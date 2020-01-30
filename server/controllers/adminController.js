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
        console.log(result)
          transporter
            .sendMail({
              from: "KingdomFoxes@outlook.com", 
              to: result[0].email, 
              subject: "Welcome to Kingdom Foxes!", // Subject line
              text: `${result[0].email}, You've been offered a conditional admission into the Kingdom of Foxes! To accept our offer, type /guild join Fox when you're in-game. Note that this means in order to become a full-member of our guild, there are certain conditions you must meet first. For a more in-depth explanation, click on the buttons on our thread. Second, be apart of our Discord group: Discord is our way of staying connected to you even when we’re not in the game. Unless given a proper pardon, send @LoveLusting or me a notice before you go inactive. The invitation for our Discord is https://discord.gg/f26TyGn   If you have any further questions, don't be afraid to ask!`
              
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
  },
  addMember(req, res){
    const db = req.app.get('db')
    const {username, gender, country, time} = req.body
    // console.log(time)
    db.admin.add_member(username, gender, country, time.toString()).then(() => {
      res.status(201).send('Sucessfully added')
    })
  },
  deleteMember(req,res){
    const db = req.app.get('db')
    const {id} = req.params
    db.admin.delete_member(id).then(() => {
      res.sendStatus(200)
    }).catch(err =>
      res.status(400).send(err)
    )
  }
};
