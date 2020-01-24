const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL_PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.mail.outlook.com",
  service: "outlook",
  auth: {
    user: "KingdomFoxes@outlook.com",
    pass: EMAIL_PASS
  },
  tls: {
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
    const db = req.app.get("db");
    const { id } = req.params;
    const { method } = req.query;
    console.log(req.query);
    method == "true"
      ? db.admin.accept_application(id).then(result => {
          transporter
            .sendMail({
              from: "KingdomFoxes@outlook.com", // sender address
              to: result.email, // list of receivers
              subject: "Hello ✔", // Subject line
              html: "<div>Something</div>"
            })
            .catch(err => console.log(err));
          res.status(200).send("Application Accepted");
        })
      : db.admin.delete_application(id).then(result => {
          res.status(200).send("Application Denied");
        });
  },
  addPost(req, res) {
    const db = req.app.get("db");
    const { content } = req.body;
    const { username } = req.session.user;
    db.admin.add_anouncement(username, content).then(result => {
      res.status(201).send("Anouncement added");
    });
  },
  deleteAnouncement(req, res) {
    const db = req.app.get("db");
    const { id } = req.params;
    db.admin.delete_anouncement(id).then(result => {
      res.status(200).send(result);
    });
  },
  getMembers(req, res) {
    const db = req.app.get("db");
    db.admin.get_members().then(result => {
      res.status(200).send(result);
    });
  },
  updateMember(req, res) {
    const db = req.app.get("db");
    const { id } = req.params;
    const {
      username,
      dateJoined,
      gender,
      region,
      rank,
      nobleClass,
      medals,
      country,
      admin,
      pm
    } = req.body;
    db.admin
      .update_member(
        username,
        dateJoined,
        gender,
        region,
        rank,
        nobleClass,
        medals,
        country,
        admin,
        pm,
        id
      )
      .then(() => {
        db.admin.get_members().then(result => {
          res.status(200).send(result);
        });
      });
  }
};
