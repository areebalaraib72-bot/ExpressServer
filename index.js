const express = require("express");

const app = express();

const PORT = 8080;

app.delete("/user", (req, res) => {
    console.log("delete request received");

    res.json({
        message: "user deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});