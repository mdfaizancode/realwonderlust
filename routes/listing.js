const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedin, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});


 //Index Route plus create route,
router 
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedin ,upload.single('listing[image]'),validateListing, wrapAsync (listingController.createListing));




//New Route
router.get("/new", isLoggedin ,listingController.renderNewForm );


// Show route update route delete route 
router
.route("/:id")
.get(wrapAsync (listingController.showListing))
.put(isLoggedin,isOwner, upload.single('listing[image]'),validateListing, wrapAsync (listingController.updateListing))
.delete(isLoggedin,isOwner, wrapAsync (listingController.deleteListing));



//Edit Route
router.get("/:id/edit",isLoggedin,isOwner, wrapAsync (listingController.renderEditForm));


module.exports = router;

