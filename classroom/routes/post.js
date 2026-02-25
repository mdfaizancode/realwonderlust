const express = require("express");
const router = express.Router();



// Post
// Index post
router.get("/", (req,res)=>{
    res.send("Get of post ");
});

// Show post
router.get("/:id", (req,res)=>{
    res.send("shoe of post");
});

// Post of POst
router.post("/", (req,res)=>{
    res.send("post of post");
});

// Delete post
router.delete("/:id", (req,res)=>{
    res.send("delete post ");
});

module.exports = router;