const mongoose = require('mongoose');

// define the schema for our user model
const userSchema = mongoose.Schema({

    username: {
      type: String,
      unique: true
    },
    status: {
      type: String,
      default: 'working'
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    lastActive: {
      type: Date,
      default: Date.now()
    },

});


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
