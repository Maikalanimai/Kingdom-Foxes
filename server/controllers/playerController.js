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
  async getMemberList(req, res) {
    console.log("Getmemberstats hit");
    // const db = req.app.get("db");
    axios
      .get(
        "https://api.wynncraft.com/public_api.php?action=guildStats&command=Kingdom Foxes"
      )
      .then(result => {
        res.status(200).send(result.data.members);
      });
  },
  updatePlayerData(req, res) {
    const db = req.app.get("db");
    const { username } = req.params;
    axios
      .get(`https://api.wynncraft.com/v2/player/${username}/stats`)
      .then(result => {
        const memberData = result.data.data[0];
        db.user.delete_player_dat(username).then(() => {
          db.user
            .update_member_data(
              memberData.username,
              memberData.rank,
              memberData.meta.firstJoin,
              memberData.meta.playtime,
              memberData.global.chestsFound,
              memberData.global.blocksWalked,
              memberData.global.mobsKilled,
              memberData.global.totalLevel.combined,
              memberData.global.totalLevel.combat,
              memberData.global.logins,
              memberData.global.deaths
            )
            .then(() => {
              db.user.get_member_info(memberData.username).then(memInfo => {
                res.status(201).send(memInfo[0]);
              });
            });
        });
      });
  },
  getRandomStats(req, res) {
    const db = req.app.get("db");
    Promise.all([
      db.user.get_chests_found(),
      db.user.get_combined_level(),
      db.user.get_deaths(),
      db.user.get_logins(),
      db.user.get_mobs_killed(),
      db.user.get_playtime(),
      db.user.get_steps_taken(),
      db.user.country_count()
    ]).then(result => {
      res.status(200).send(result);
    });
  },
  getCountryList(req, res) {
    const db = req.app.get("db");
    db.user.get_country_list().then(result => {
      res.status(200).send(result);
    });
  },
  getAnouncements(req, res) {
    const db = req.app.get("db");
    db.user.get_anouncements().then(result => {
      res.status(200).send(result);
    });
  }
};
