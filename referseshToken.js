const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// OAuth2 Setup
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
  refresh_token: process.env.refreshtoken,
});

async function sendMail() {
  try {
    const accessToken = await oauth2Client.getAccessToken();

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'vedant.jobs03@gmail.com',  
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.refreshtoken,
        accessToken: accessToken,
      },
    });

    let mailOptions = {
      from: 'vedant.jobs03@gmail.com',
      to: 'vedadntyadav03   @example.com',
      subject: 'Test Email via OAuth2',
      text: 'This is a test email sent using OAuth2 and Nodemailer.',
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);

  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendMail();
