



const sendEmail = (emailFrom, emailTo, causeName , donorName, certificareURL ) => {
  console.log(emailFrom, emailTo, causeName , donorName, certificareURL);
  const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey('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')
  sgMail.setApiKey('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');

  let emailTemplate = `
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
      <a href=${certificareURL}>Download pledge Certificate</a>
      <p>Warm regards,</p>
      <p>ONEST Pledge Team</p>
    </body>
  </html>
`;


  const msg = {
    to: emailTo, // Change to your recipient
    from: emailFrom, // Change to your verified sender
    subject: 'Thank You for Your Support: Certificate of Pledge',
    text: `Dear [Name],
  
    We extend our heartfelt appreciation for your impactful pledge towards the cause: [Cause Name]. Your commitment resonates deeply, and we are thrilled to present you with the "Certificate of Pledge."
    
    A team member will get in touch with you to facilitate the collection of the pledged amount. Your privacy is of utmost importance to us, and we assure you that these details will remain strictly confidential and not be shared with any third parties.
    
    Thank you once again for your invaluable contribution. We are honoured to have you as part of our mission.
    
    Warm regards,
    ONEST Pledge Team
    and easy to do anywhere, even with Node.js`,
    html: emailTemplate,
  }
  sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}

module.exports ={
  sendEmail
}
