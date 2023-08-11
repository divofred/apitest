// src/routes\deposit.ts
import express, { Request, Response } from 'express';
import { deposit } from '../Controller';
const router = express.Router();

router.route('/').put(deposit);

router.route('*').all((req, res) => {
  res.status(404).json({ message: 'Invalid route' });
});

module.exports = router;
