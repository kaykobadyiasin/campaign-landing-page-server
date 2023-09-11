/* const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors());


// Create a transporter with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use the appropriate email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Handle form submissions
app.post('http://localhost:3000/email', (req, res) => {
  const formData = req.body;

  res.send(formData)

  // console.log(formData.get('name'))

  // const mailOptions = {
  //   from: 'kaykobadyiasin@gmail.com',
  //   to: 'morsalinecoding@gmail.com', // The recipient's email address
  //   subject: 'Contact Form Submission - ' + formData.name,
  //   text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error('Error sending email:', error);
  //     res.status(500).send('Error sending email');
  //   } else {
  //     console.log('Email sent:', info.response);
  //     res.send('Email sent successfully');
  //   }
  // });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); */












































//  const nodemailer = require('nodemailer');

// let mailTransporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "kaykobadyiasin@gmail.com",
//         pass: "vlxghhnabsvzzrvj"
//     }
// })

// let details = {
//     from: "kaykobadyiasin@gmail.com",
//     to: "morsalinecoding@gmail.com",
//     subject: "nodemail again",
//     html: `<html>
//     <head>
//       <style>
//         h1 {
//           color: #007bff;
//           font-size: 18px;
//         }
//       </style>
//     </head>
//     <body>
//       <h1>Hi, Mursaline</h1>
//       <hr/>
//       <p>&#128509; Congratulation you are winner &#128513;</p>
//     </body>
//   </html>
//   `
// }


// mailTransporter.sendMail(details, (err, info) => {
//     if (err) {
//         console.log('not send email. becouse error', err)
//     }
//     else if (info) {
//         console.log('email sent successfully', info.response)
//     }
// })