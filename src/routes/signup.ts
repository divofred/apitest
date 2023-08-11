// src/routes/signup.ts
import express, { Request, Response } from 'express';
import { signup } from '../Controller';
const router = express.Router();

router.route('/').post(signup);

router.route('*').all((req, res) => {
  res.status(404).json({ message: 'Invalid route' });
});

module.exports = router;
