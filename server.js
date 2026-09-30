// importing express library from express module

import express from "express";

//developing an express application

const app = express();

//listening to the port 5500
const port = 5500;

//defining a route for the root url

app.get("/",(req, res)  =>{
res.send("hello! coders ");
});
//starting the server and listening on the sepecified port
app.listen(port, () =>{
    console.log(`server is running on http://localhost:${port}`);
});
