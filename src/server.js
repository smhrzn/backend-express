const express = require('express');
const app = express()
const logger = require('./middleware/logger.js');
const one = require('./middleware/one.js');
const two = require('./middleware/two.js');
const three = require('./middleware/three.js');
const hellomiddleware = require('./middleware/hellomiddleware.js')
const port = 3000
app.use(express.json())
app.use(express.static('public'))


app.get('/', (req, res)=> {
    res.send('Hello, World !')
}
)

app.use(logger);

app.get('/', one, two, three, (req, res)=>{
    res.send('hello world')
})


//making our first request
app.get("/SMZ",hellomiddleware,(req,res)=>{
    console.log("header value:", req.headers.myheader) //get header from postman
    console.log("params value:", req.query.myparams) //get header from postman
    res.status(200).json({
        "message":"Sarun"
    })
})

// app.post("/imga", (req,res)=>{
//     res.send()
// })


//endpoint post to get body 
app.post("/data", (req,res)=>{
    

    console.log(req.body)

    res.status(200).json({
        "message":"success",
    })
})

app.listen (port ,() =>{
    console.log('Example app listening on port ${post}')
})