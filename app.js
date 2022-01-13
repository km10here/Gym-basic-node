const { urlencoded } = require("express");
const express = require("express");  //importing exress
const res = require("express/lib/response");
const app = express();  //create an app named express
const port = 80;  //port number set at 80
const path = require("path");
const fs = require("fs");

//****EXPRESS SPECIFICSTUFF****
app.use('/static', express.static('static')) // for serving static files

app.use(express.urlencoded()) // middleware used to access form data to express

//****PUG SPECIFIC STUFF****
app.set('view engine', 'pug') //set the template engine as pug 
app.set('views', path.join(__dirname, 'views')) //set the views directory


//****END POINTS****
app.get('/', (req,res)=>{
    const con = "This is the best content on internet so far so use it wisely"
    const params = {'title': 'best game : pubg' ,"content" : con}
    res.status(200).render('index.pug', params);
})

app.post('/', (req,res)=>{

    Name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.Address;
    more = req.body.More
    let outputToWrite = `the name of the client is ${Name}, ${age} years old, ${gender}, residing at ${address}. More about him/her : ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})


//****START THE SERVER****
app.listen(port, ()=>{
    console.log("This app has started successfully!");
})


