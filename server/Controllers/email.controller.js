import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // SSL port for Gmail
  secure: true, // true for SSL
  auth: {
    user: 'omkumavat1212@gmail.com',
    pass: 'uras jdul iior klxx'
  }
});

export const sendEmail = async (to, subject) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  
  const htmlFilePath = path.join(__dirname, '..', 'uploads', 'email.html');
  console.log('HTML file path:', htmlFilePath);

  let htmlContent;
  try {
    htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
    console.log('HTML content:', htmlContent); 
  } catch (error) {
    console.error('Error reading HTML file:', error);
    return;
  }

  const mailOptions = {
    from: 'Om Kumavat <omkumavat1212@gmail.com>',
    to,
    subject,
    html: htmlContent // Use the HTML file content
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
