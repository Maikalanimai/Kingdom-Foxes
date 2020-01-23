const nodemailer = require("nodemailer");
require('dotenv').config()
const{EMAIL_PASS} = process.env

let transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  service: 'yahoo',
  auth: {
    user: 'KingdomFoxes@yahoo.com', 
    pass: {EMAIL_PASS} 
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
}
});

module.exports = {
  getApplications(req, res) {
    const db = req.app.get("db");
    Promise.all([db.admin.get_applications(), db.admin.get_accepted()]).then(
      result => {
        // console.log(result);
        res.status(200).send(result);
      }
    );
  },
  applicationProcess(req, res) {
    const db = req.app.get('db')
    const {id} = req.params
    const {method} = req.query
    console.log(req.query)
    method == 'true' ? 
    db.admin.accept_application(id).then(result => {
      transporter.sendMail({
        from: 'KingdomFoxes@yahoo.com', // sender address
        to: "kalonekamimoto@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
      }).catch(err => console.log(err));
      res.status(200).send('Application Accepted')
    })
    :
    db.admin.delete_application(id).then(result => {
      res.status(200).send('Application Denied')
    })
  }
};
