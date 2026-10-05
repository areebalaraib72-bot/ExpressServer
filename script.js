
const express = require("express");

//developing an express application

const app = express();

//listening to the port 5173 
const port = 5173;

//defining a route for the root url

app.get("/",(req, res)  =>{
res.send("heloooo!developers");
}   );
//starting the server and listening on the sepecified port
app.listen(port, () =>{
    console.log(`server is running on http://localhost:${port}`)
}
);
