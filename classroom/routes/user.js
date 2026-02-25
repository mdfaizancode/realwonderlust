
const express = require("express");
const router = express.Router();


// User
// Index user
router.get("/", (req,res)=>{
    res.send("this is user route");
});

// Show user
router.get("/:id", (req,res)=>{
    res.send("Get for user id ");
});

// Post User
router.post("/", (req,res)=>{
    res.send("Post for users");
});

// Delete user
router.delete("/:id", (req,res)=>{
    res.send("delete user ");
});

module.exports = router;