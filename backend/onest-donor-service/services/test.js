const sgMail = require('@sendgrid/mail');

async function sendEmail(emailFrom, emailTo, causeName , donorName, certificareURL  ) {
  sgMail.setApiKey('YOUR_SENDGRID_API_KEY');
  const emailTemplate = `
    <html>
      <head>
        <title>Certificate of Pledge</title>
      </head>
      <body>
        <p>Dear ${donorName},</p>
        <p>We extend our heartfelt appreciation for your impactful pledge towards the cause: ${causeName}. Your commitment resonates deeply, and we are thrilled to present you with the "Certificate of Pledge."</p>
        <p>A team member will get in touch with you to facilitate the collection of the pledged amount. Your privacy is of utmost importance to us, and we assure you that these details will remain strictly confidential and not be shared with any third parties.</p>
        <p>Thank you once again for your invaluable contribution. We are honoured to have you as part of our mission.</p>
        <p>You can download your pledge certificate by clicking on the below attached link</p>
        <a href=${certificareURL}>Download pledge Certificate</a?
        <p>Warm regards,</p>
        <p>ONEST Pledge Team</p>
      </body>
    </html>
  `;

  const msg = {
    to: emailTo,
    from: emailFrom, // Use your alias email address here
    subject: 'Thank You for Your Support: Certificate of Pledge',
    html: emailTemplate, // Set the HTML template here
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error(error);
  }
}

module.exports ={
    sendEmail
}