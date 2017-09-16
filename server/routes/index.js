const User = require('../models');
const addUser = require('../controller/addUser')
const updateUser = require('../controller/updateUser')

module.exports = function (app) {

  app.get('/api', function (req, res) {
    res.send('Hello')
  });

  app.get('/api/users', function (req, res) {
    User.find({}, function (err, users) {
      if (err) throw err;
      res.json(users)
    })
  });

  app.post('/api/login', function(req, res, next) {
    const name = req.body.username;
    if (!name) {
      return next(new Error('Wrong login parameters'))
    }
    next();
  }, function (req, res) {
      const name = req.body.username;
      addUser(name, res);
  });

  app.post('/api/user/:id', function(req, res, next) {
    const status = req.body.status;
    const id = req.params.id;
    if (!status || !id) {
      return next(new Error('Mandatory parameters missing'))
    }
    next();
  }, function (req, res) {
    const status = req.body.status;
    const id = req.params.id;
    updateUser(res, status, id);
  });

  app.use(function(err, req, res, next) {
    if (err) {
      return res.json({ success: false, authorize: false, message: err.message });
    }
  })

}

