var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('THIS IS REQUEST!!!!');
      console.log('THIS IS RESPONSE!!!!!');

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let body = '';
      let msgObj = {};
      req.on('data', chunk => {body += chunk.toString();});
      req.on('end',()=>{
        msgObj = JSON.parse(body);
        models.messages.post(msgObj);
        res.end();
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      let body = '';
      let msgObj = {};
      req.on('data', chunk => {body += chunk.toString();});
      req.on('end',()=>{
        msgObj = JSON.parse(body);
        if(msgObj.username !== undefined){
          models.messages.users(msgObj.username);
        }
        res.end();
      });
    } 
  }
};

