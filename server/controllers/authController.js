const bcrypt = require('bcryptjs')
const saltRounds = 10;

module.exports = {
  async login(req, res){
    const db = req.app.get('db')
    const {username, password} = req.body;
    const authorizedUsers = await db.auth.get_aproved_users()
    if(authorizedUsers.map(e=>e.username).includes(username)){
      const userCheck = await db.auth.get_user_by_username(username)
      const result = await bcrypt.compare(password, userCheck[0].hash_pass)
      if(result){
        req.session.user ={
          username: userCheck[0].username,
          id: userCheck[0].id,
          loggedIn: true
        }
        res.send(req.session.user)
      } else res.status(401).send('Password Incorrect')
    } else res.status(401).send('Unauthorized for admin account')
  },
  async register(req,res){
    const db = req.app.get('db');
    const {username, password} = req.body;
    const authorizedUsers = await db.auth.get_aproved_users()
    if(authorizedUsers.map(e => e.username).includes(username)){
      const userCheck = await db.auth.get_user_by_username(username)
      console.log(userCheck)
      if(userCheck[0].hash_pass === null){
        console.log('hashing init')
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(password,salt)
        const user = await db.auth.add_hash( hash,username)
        req.session.user = {username: userCheck[0].username, id: userCheck[0].id, loggedIn: true}
        res.send(req.session.user)
      } else res.status(401).send('Password Exists, Please Login Instead')
    } else res.status(401).send('Unauthorized for admin account')
  },
  logout(req, res){
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser(req,res){
    res.send(req.session.user)
  }
}