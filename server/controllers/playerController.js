const axios = require("axios");

module.exports = {
  putApp(req, res) {
    const db = req.app.get("db");
    const {
      ign,
      country,
      timezone,
      gender,
      age,
      time_daily,
      main_class,
      main_level,
      enjoy,
      reason_to_join,
      previous_guild_name,
      previous_guild_leave,
      discord_user,
      forum_user,
      consent_to_email,
      email
    } = req.body;
    db.user
      .post_application(
        ign,
        country,
        timezone,
        gender,
        age,
        time_daily,
        main_class,
        main_level,
        enjoy,
        reason_to_join,
        previous_guild_name,
        previous_guild_leave,
        discord_user,
        forum_user,
        consent_to_email,
        email
      )
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async getMemberStats(req, res) {
    console.log("Getmemberstats hit");
    const db = req.app.get("db");
    axios
      .get(
        "https://api.wynncraft.com/public_api.php?action=guildStats&command=Kingdom Foxes"
      )
      .then(result => {
        let delay = 0;
        const memberList = result.data.members.map((e, i, a) => {
          return (setTimeout(() => {
            console.log(e.name);
            axios
              .get(`https://api.wynncraft.com/v2/player/${e.name}/stats`)
              .then(result2 => {
                console.log(result2.data.data)
                return result2.data;
              })
              .catch(err => {
                console.log( 'error occured')
                return err.response
              });
          }),
            i * 3000)
        });
        console.log(memberList)
        Promise.all(memberList).then(promRes => {
          res.status(200).send(promRes);
        });
      });
  }
};
