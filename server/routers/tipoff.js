import express from 'express';

import Tipoff from '../models/Tipoff.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Nyomm');
});

router.post('/', (req, res) => {
    
});

export default router;