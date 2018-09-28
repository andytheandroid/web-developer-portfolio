const express = require('express')
const ejs = require('ejs')
const app = express()
const bodyParser = require('body-parser')
const request = require('request');
let apiKey = 'ff479d152ddd1ba6d6fcf232df8a0ee2';

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static('public'));


//---VERY IMPORTANT NOTE----///

//--Make sure that app get is called before app post, otherwhise the web will not render correctly and any post request will not work--///
app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
 let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });



})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})