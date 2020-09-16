var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'smtp-relay.sendinblue.com',
  auth: {
    user: 'onyirims@yahoo.com',
    pass: 'fmkCADIvrn0Td8pL'
  }
});

var mailOptions = {
  from: 'mykel.zubz@gmail.com',
  to: 'onyirims@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});