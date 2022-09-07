import express from 'express';
import { Teas } from '../db/models';

const router = express.Router();

router.get('/allteas', async (req, res) => {
    const teas = await Teas.findAll();
    res.json(teas);
  });

export default router;