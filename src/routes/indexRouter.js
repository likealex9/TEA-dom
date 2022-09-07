import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';

const router = express.Router();

router.get('/', async (req, res) => {
    const initState = { path: req.originalUrl };
    const layout = React.createElement(Layout, { initState });
    const html = renderToString(layout);
    res.write('<!DOCTYPE html>');
    res.end(html);
  });

export default router;