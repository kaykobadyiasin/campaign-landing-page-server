const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let userName = process.env.VITE_EMAIL;
let userPass = process.env.VITE_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
        user: userName,
        pass: userPass,
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, phone, projectCategory, occupation, subjectCategory, subject, agree } = req.body;

    const mailOptions = {
        from: email,
        to: 'kaykobadyiasin@gmail.com',
        subject: 'Weepoka webdevelopment Campaign 2023',
        html: `
        <div style="width: 100%; background-color: #0F4790; padding: 10px 10px 30px 10px">
            <p style="font-weight: 800; text-align: center; color: #ffffff; font-size: 20px;">
              Weepoka Campaign 2023
            </p>
        
        <div style="max-width: 90%; background-color: white; margin: 0 auto; padding: 30px;">
          <div style="width: 100%;>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>FullName: <b>${name}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Phone: <b>${phone}</b></p>
              <p>Project Category: <b>${projectCategory}</b></p>
              <p>Occupation: <b>${occupation}</b></p>
              <p>Subject Category: <b>${subjectCategory}</b></p>
              <p>Subject: <b>${subject}</b></p>
              <p>Terms And Conditions: <b>${agree}</b></p>
            </div>
          </div>
        </div>
        </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Email not sent');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});