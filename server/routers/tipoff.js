import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';
import { commentTipoff } from '../controllers/tipoff.js';
import Tipoff from '../models/Tipoff.js';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const router = express.Router();

router.post('/:id/comment', commentTipoff);

router.get('/all', (req, res) => {
    Tipoff.find({}, (err, tipoffs) => {
        res.status(200).json(tipoffs);
    })
});

router.get('/user', (req, res) => {
    Tipoff.find({ userHash: req.query.userHash }, (err, tipoffs) => {
        res.status(200).json(tipoffs);
    })
});

router.post('/', (req, res) => {
    const doc = new Tipoff({
        userHash: req.body.userHash,
        location: req.body.location,
        message: req.body.message,
        bounty: 0
    });

    doc.save((err, tipoff) => {
        if (err)
            res.status(500).send("Please try again later!!!");

        fs.mkdir(path.join(__dirname, '..', 'tipoff_evidences', tipoff.id), { recursive: true }, (err) => {
            if (err)
                res.status(500).send("Please try again later!!!");
        });


        const filePaths = [];
        for (let i = 0; i < req.body.fileCount; ++i)
            req.files[`file${i+1}`].mv(path.join(__dirname, '..', 'tipoff_evidences', tipoff.id, req.files[`file${i+1}`].name), async err => {
                if (err)
                    res.status(500).send("Please try again later!!!");
                
                tipoff.filePaths.push(path.join(__dirname, '..', 'tipoff_evidences', tipoff.id, req.files[`file${i+1}`].name));
                await tipoff.save();  
            });
        
        res.status(200).send("Success");
    });
});

export default router;