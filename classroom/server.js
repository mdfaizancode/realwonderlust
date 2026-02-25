
const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secreatCode"));


app.get("/getsignedcookie", (req,res)=>{
    res.cookie("make-in", "india",{signed:true});
    res.send("signed cookie send");
});

app.get("/verify", (req,res)=>{
    console.log(req.signedCookies);
    res.send("cookie is verify");
});


 
app.get("/getcookies", (req,res)=>{
    res.cookie("greet", "Hello");
    res.cookie("madein", "india");
    res.cookie("city", "goa");
    res.send("this is the cooke ");
});


app.get("/greet", (req,res)=>{
let {name = "anomimas"}= req.cookies;
    res.send(`hello ${name}`);
})
app.get("/", (req,res)=>{
    console.dir(req.cookies);
    res.send("hi am root");
});

app.use("/users", users);
app.use("/posts", posts);



app.listen (3000, ()=>{
    console.log("server 300 is lesten");
});
