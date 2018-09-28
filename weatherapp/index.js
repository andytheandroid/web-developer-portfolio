const request = require('request');
const argv = require('yargs').argv;
let apiKey = 'ff479d152ddd1ba6d6fcf232df8a0ee2';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  	let weather = JSON.parse(body)

    console.log('body:', weather);
    let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
console.log(message);
  }
});