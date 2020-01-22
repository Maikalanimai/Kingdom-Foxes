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
    method == true ? 
    db.admin.accept_application(id).then(result => {
      res.status(200).send('Application Accepted')
    })
    :
    db.admin.delete_application(id).then(result => {
      res.status(200).send('Application Denied')
    })
  }
};
