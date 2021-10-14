const express = require("express");
const https = require("https");
const bodyParser = require("body-Parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function(req , res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req , res){
   
    const querry = req.body.cityName;
    const apiKey ="cbaf94088f5d2ce79de29702f829d762";
    const url= "https://api.openweathermap.org/data/2.5/weather?q="+ querry +"&appid="+apiKey;

    https.get(url, function(response){

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = " http://openweathermap.org/img/wn/"+icon+"@2x.png";

            res.write("<h1>The temprature in "+querry+" is : "+ temp+" kelvin</h1>");
            res.write("<p>The weather is currently: "+weatherDescription+"</p>");
            res.write("<img src = "+imageUrl+">");

            res.send();
        });
    }); 

});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});



