import express from 'express';

import Tipoff from '../models/Tipoff.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Nyomm');
});

router.post('/', (req, res) => {
    console.log(__dirname)
    res.status(200).send("Hello");
});

export default router;