const express = require("express");

const app = express();

app.get('/users',(req,res)=> {
    res.send("GET /users")
})

app.post('/users',(req,res)=> {
    res.send("POST /users")
})

app.delete('/users',(req,res)=> {
    res.send("DELETE /users")
})

app.listen(3000, () => {
    console.log("My Server is ON !!!")
});