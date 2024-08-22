import express from 'express'
import { google, signin, signup } from '../Controllers/auth.controller.js';
import { sendEmail } from '../Controllers/email.controller.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',google);
router.post('/send-email', async (req, res) => {
    console.log(req.body);
    const { email, subject } = req.body;
  
    try {
      await sendEmail(email, subject);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      res.status(500).send('Failed to send email');
    }
  });

export default router;