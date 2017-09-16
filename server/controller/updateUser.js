const UserModel = require('../models')

module.exports = (res, status, id) => {
  UserModel.findOneAndUpdate({
    _id: id
  }, {$set:{status: status}}, {new: true})
    .then((user)=>{
      res.json({ success: true, message: 'User updated successfully' , user})
        })
    .catch((err)=>{
      res.json({ success: false, message: err.message })
    });
}
