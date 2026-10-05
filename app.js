const express = require("express");

const app = express();
const PORT = 5500;

app.use(express.json());

app.post("/user", (req,res) => {
    console.log("post data:",req.body);
    res.send("user created!");
});

app.put("/user",(req, res)  =>{
    const {name,email } =req.body;
    res.jason({message: "user updated" , name, email});
}    );
app.use((req,res) =>{
    res.status(404).send("route not found ");
});

app.listen(PORT,() =>{
    console.log(`server is running on port`)
})