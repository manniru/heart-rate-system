//json-server --watch db.json --middlewares ./middleware.js --port 3001
var phone = '+601151212963';
var message = "Your Patient Heart Rate is Getting High Please, try to Call him, Thank You, Patient id is "

module.exports = (req, res, next) => {
    res.header('X-Hello', 'World')
    if (req.body.bpm >=150) {
        message += req.body.uid
        console.log("SMS Message Sent! to " + phone +' , Containting '+ message);
    }
    next()
  }