var request = require("request");

var options = {
  method: 'GET',
  url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
  headers: {
    'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
    'x-rapidapi-key': '<RAPIDAPI-KEY>',
    accept: 'application/json'
  }
};

request(options, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let chucknorris = JSON.parse(body)
    let message = `${chucknorris.value}`;
    console.log(message);
  }
});
