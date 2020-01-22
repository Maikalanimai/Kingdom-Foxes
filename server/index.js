//nescesary libraries
const express = require('express')
require('dotenv').config()
const session = require('express-session')
const massive = require('massive')
const{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()
//controller imports
const playCtrl = require('./controllers/playerController.js')
const adminCtrl = require('./controllers/adminController')
const authCtrl = require('./controllers/authController')
//middleware imports
const initSession= require('./middleware/initSession')
const authCheck= require('./middleware/authCheck')

//top level middleware
app.use(express.json())
app.use(
  session(
    {
      secret:SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60*60*1000 //1hour
      }
    }
  )
)
app.use(initSession)

//basic endpoints
app.post('/api/application', playCtrl.putApp)
app.get('/api/members',playCtrl.getMemberList)
app.get('/api/member/:username', playCtrl.updatePlayerData)
app.get('/api/randStats', playCtrl.getRandomStats)
//admin restricted endpoints
app.get('/admin/applications', authCheck, adminCtrl.getApplications)
app.put('/admin/applicationresult/:id', authCheck, adminCtrl.applicationProcess)
//authorization endpoints
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCheck, authCtrl.getUser)


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Getting ${SERVER_PORT} turtle shells`))
})