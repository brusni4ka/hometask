const UserModel = require('../models')

module.exports = function(name, res) {
  UserModel.findOne({
    'username': name,
  }, function(err, user) {
    if(err) throw err;
    if(!user) {
      const user = UserModel.create({
        username: name,
      })
        .then((user)=>{
          res.json({ success: true, message: 'User saved successfully' , user})
        })
        .catch((err)=>{
          res.json({ success: false, message: err.message })
        });
    } else {
      res.json({ success: true, authorize: true, message: 'User authorized', user });
    }
  })
}
