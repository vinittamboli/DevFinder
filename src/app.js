const express = require("express");

const app = express();

app.use("/test", (req,res)=>{
    res.send("Hello from Test")
})

app.listen(3000, () => {
    console.log("My Server is ON !!!")
});