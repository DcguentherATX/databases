var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages

    post: function (obj) {
      var sql = `INSERT INTO messages (tweet,sender,chatroom_id) values (${obj.message}, ${obj.userid}, ${obj.roomid})`;

      db.query(sql, (err,result) => {
        if(err) {
          throw err;
        }
        console.log('inserted messsage successfully!!');
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (string) {
      var sql = `INSERT INTO users (user_name) values (${string})`;

      db.query(sql, (err,result) => {
        if(err) {
          throw err;
        }
        console.log('inserted user name successfully!!');
      });

    }
  }
};

