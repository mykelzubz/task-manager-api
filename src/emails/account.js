const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'mykel.zubz@gmail.com',
    from: 'mykel.zubz@gmail.com',
    subject: 'This is my first creation',
    text:  'I hope this one actually gets to you.'
})