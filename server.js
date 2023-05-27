
const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send("<h1 style='color: red;'>Hello World</h1>");
});

app.get('/contact', (req, res)=>{
    res.send("contact me at dAVIES.come ")
});

app.get('/about', (req, res)=>{
    res.send("Hi, this is Davies Samuel... i love software engineering.... God please help me to grow in one of the best there is");
});

app.get('/hobbies', (req, res)=>{
    res.send('<h1>i like to code </h1>')
});
app.listen(3000, function (){
    console.log("Server started on port 3000");
});