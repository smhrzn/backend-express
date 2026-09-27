// const express = require('express');
// const app = express()
// // const logger = require('./middleware/logger.js');
// // const one = require('./middleware/one.js');
// // const two = require('./middleware/two.js');
// // const three = require('./middleware/three.js');
// // const hellomiddleware = require('./middleware/hellomiddleware.js')
// const port = 3000
// app.use(express.json())
// app.use(express.static('public'))


// //connect to mongo db database
// const mongoose=require('mongoose')
// require('dotenv').config()

// //importing User schema
// const User = require('./models/User')
// //make a route
// app.post('/create/User',async (req, res , next)=>{
//     try{
//         //create User
//         const User = await User.create(req.body);
//         res.status(201).json({
//             "success":true,
//             data:User
//         })
//     }
//     catch(error)
//     {
//         res.status(400).json({
//             "success": false, 
//             "error":error.message
//         })
        
//     }
// })

// //read
// app.get('/read/User',async (req, res , next)=>{
//     try{
//         //create User
//         const User = await User.find();
//         res.status(201).json({
//             "success":true,
//             data:User
//         })
//     }
//     catch(error)
//     {
//         res.status(400).json({
//             "success": false, 
//             "error":error.message
//         })
        
//     }
// })

// // delete
// app.delete('/delete/User/',async (req,res,next)=>{
//     try{
//         // read a User
//         console.log(req.query.id)
//         const User=await User.findByIdAndDelete(req.query.id); //delete User in database
//         res.status(201).json({
//             "success":true,
//             data:User
//         })
//     }
//     catch (error) {
//         res.status(500).json({
//             "success":false,
//             "error":error.message
//         })
//     }
// })


// //connection 
// const connectDB = async () => {
//     try{
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("mongo db database connected successfully")
//     }
//     catch(error){
//         console.error("error while connecting ", error)
//         process.exit(1);
//     }
// }

// connectDB().then(() => {
//     app.listen(port, () => {
//         console.log(`Example app listening on port ${port}`)
//     })
// })


// // app.get('/', (req, res)=> {
// //     res.send('Hello, World !')
// // }
// // )

// // app.use(logger);

// // app.get('/', one, two, three, (req, res)=>{
// //     res.send('hello world')
// // })


// // //making our first request
// // app.get("/SMZ",hellomiddleware,(req,res)=>{
// //     console.log("header value:", req.headers.myheader) //get header from postman
// //     console.log("params value:", req.query.myparams) //get header from postman
// //     res.status(200).json({
// //         "message":"Sarun"
// //     })
// // })

// // // app.post("/imga", (req,res)=>{
// // //     res.send()
// // // })


// // //endpoint post to get body 
// // app.post("/data", (req,res)=>{
    

// //     console.log(req.body)

// //     res.status(200).json({
// //         "message":"success",
// //     })
// // })

// // app.listen (port ,() =>{
// //     console.log('Example app listening on port ${post}')
// // })

// // connectDB().then()=>{
// //     app.listen(port,() =>{
        
// //     })
// // }



const express = require('express');
const logger=require('./middleware/logger')
const hellomiddleware=require('./middleware/hellomiddleware')
const one=require('./middleware/one')
const two=require('./middleware/two')
const three=require('./middleware/three')
const app = express()
// sepecify the format will be in json
app.use(express.json())
app.use(express.static('public'))
const port = 3000

// connect the mongo db database
const mongoose=require('mongoose')
require('dotenv').config()


// importing User schema
const User=require('./models/User')
// make a route
app.post('/create/User',async (req,res,next)=>{
    try{
        // create a User
        const User=await User.create(req.body)
        res.status(201).json({
            "success":true,
            data:User
        })
    }
    catch (error) {
        res.status(500).json({
            "success":false,
            "error":error.message
            })
    }
}) 

// read 
app.get('/read/User',async (req,res,next)=>{
    try{
        // read a User
        const User=await User.find(); //find Users in database
        res.status(201).json({
            "success":true,
            data:User
        })
    }
    catch (error) {
        res.status(500).json({
            "success":false,
            "error":error.message
            })
    }
}) 

// delete
app.delete('/delete/User/',async (req,res,next)=>{
    try{
        //password check
        //get password
        const password =req.query.password;
        //get the requesting User infprmation
        const User =await  User.findById(req.query.id)

        if( User.password == password){
            console.log("password matched")
            return res.status(200).json({
                "message": "password matched"
            })
        }
        else{
            console.log("Password not matched")
            return res.status(403).json({
                "message": "password not matched"
            })
        }
    //     // read a User
    //     console.log(req.query.id)
    //     const User=await User.findByIdAndUpdate(req.query.id); //delete User in database
    //     res.status(201).json({
    //         "success":true,
    //         data:User
    //     })
    // }
    // catch (error) {
    //     res.status(500).json({
    //         "success":false,
    //         "error":error.message
    //     })
    }
}) 

// // patch
// app.patch('/patch/User/',async (req,res,next)=>{
//     try{
//         // read a User
//         console.log(req.query.id)
//         const User=await User.findByIdAndDelete(req.query.id); //delete User in database
//         res.status(201).json({
//             "success":true,
//             data:User
//         })
//     }
//     catch (error) {
//         res.status(500).json({
//             "success":false,
//             "error":error.message
//             })
//     }
// }) 


// PATCH - update User
app.patch('/update/User', async (req, res, next) => {
    try {
        console.log(req.query.id);

        const User = await User.findByIdAndUpdate(
            req.query.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            "success": true,
            data: User
        });
    }
    catch(error)
    {
        res.status(400).json({
            "success": false,
            "error": error.message
        });
    }
});

// PUT - update User
app.put('/update/User', async (req, res, next) => {
    try {
        console.log(req.query.id);

        const User = await User.findByIdAndUpdate(
            req.query.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            "success": true,
            data: User
        });
    }
    catch(error)
    {
        res.status(400).json({
            "success": false,
            "error": error.message
        });
    }
});


// connection 
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo db database connected successfully")
    }
    catch (error) 
    {
        console.error("error while connecting", error)
        process.exit(1)
    }
}

// logger defination
// const logger=function(req, res, next) {
//     console.log("logger called")

//     // This is most important part
//     // middleware always calls next function
//     // rather than giving response
//     next();
// }
// for calling middleware we use app.use
app.use(logger); 

// export default logger;

app.get('/',one,two,three, (req, res) => {
    res.send('Hello World!')
})

// making our first request 
app.get("/hello",hellomiddleware,(req, res)=>{
    // header value
    console.log("header value:",req.headers.myheader)
    // getting params
    console.log("params value:",req.query.mparams)
    // response
    res.status(200).json({
        "message":"hello"
    })
})

// endpoint post to get body
app.post("/data",(req, res)=>{
    console.log(req.body)
    res.status(200).json({
        message:"success"
    })
})

app.get("/name",(req, res)=>{
    // response
    res.status(200).json({
        "name":"Shreya"
    })
})

// implementing middleware


connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`Example app listening on port ${port}`)
    })
})