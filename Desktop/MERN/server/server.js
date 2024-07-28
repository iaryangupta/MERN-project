// to use dotenv in project
require("dotenv").config();
// getting express variable to use express
const express= require("express");
const app= express();
const authRoute= require("./router/auth-router");
const contactRoute= require("./router/contact-router");
const connectDb= require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


// ExpressJS: a layer built on the top of the Node js that helps manage servers and routes
// Add Express middleware that parses JSON requests. 
// important to place this before any routes that need to handle JSON data in the request body. 
app.use(express.json());


//Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix, changes control to router 
app.use("/api/auth", authRoute);

app.use("/api/form", contactRoute);

// // get has first argument as root, the page that is requested
// // the second argument is callback function,that is the repsonse whem someone visits the page  
// app.get("/", (req, res) => {
//     res.status(200).send("server mein swagat");
// });

// to be able to use error middleware (before creating connection)
app.use(errorMiddleware);

const PORT= 5000;

connectDb().then(()=>{
    // to start the server
    app.listen(PORT, ()=>{
        console.log(`server running at port: ${PORT}`);

    })
});
