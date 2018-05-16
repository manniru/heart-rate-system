//json-server --watch db.json --middlewares ./middleware.js --port 3001
var phone = '+601151212963';

module.exports = (req, res, next) => {
    res.header('X-Hello', 'World')
    if (req.body.bpm >=150) {
        var message = "This is SMS Message From Heart Rate Monitoring System. Your Patient with ID="+req.body.uid+" his Heart Rate is  "+req.body.bpm+" is Getting High Please, try to Call him, Thank You";
        console.log("SMS Message Sent! to Phone:" + phone +' , Message '+ message);
    }
    next()
  }