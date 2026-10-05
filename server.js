const express = require("express");

const app = express();
const port = 5500;

app.use(express.json());

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("user data recieved!");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});