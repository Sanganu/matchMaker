var userData = require('../data/friends.js');


module.exports = function(app) //app referes to express in server.js file
{
  app.get('/api/friends',function(req,res)
  {
     console.log('API call',userData);
     res.json(userData);
   });
   app.get('/api/friendslist',function(req,res)
    {
      var friendobject = JSON.stringify(userData,null,2);
      res.send(friendobject);
      //res.json(userData,null,2);
    });
    app.post('/api/friends',function(req,res)
    {
      userData.push(req.body);
      res.json(true);
      console.log('Added new uer',req.body);
    });
}
