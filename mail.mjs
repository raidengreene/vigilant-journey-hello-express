import nodemailer from 'nodemailer';
import 'dotenv/config';

// CORS configuration
const corsOptions = {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
  credentials: true, // Allow cookies to be sent with requests
  optionsSuccessStatus: 200 // For legacy browser support
};

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    }
  });

  try {
   
    // if (!register.email) {
    //   console.log("Request Error", req.body.register);
    //   return res.status(400).send("Bad Request");}
    
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: 'barrycumbie@gmail.com',
      subject: 'CIS 486',
      text: `'email assignment from raiden greene'
`
    };

    // await registrations.insertOne(req.body);
   
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Error:', error);
        res.status(500).send("Failed to send email");
      } else {
        console.log('Email sent:', info.response);
        res.json({success : req.body.emailBody, status : 200, info: info.response});
      }
    });
 
  } catch (error) {
    console.error('Error in /register:', error);
    res.status(500).send("Internal Server Error");
  } finally {}


