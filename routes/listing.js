const express = require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { validateListing } = require("../middleware/middleware.js");
const { isLoggedIn ,isOwner} = require("../middleware/middleware.js");
const { saveRedirectUrl } = require("../middleware/middleware.js");
const listingController= require("../controllers/listings.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js")
const upload = multer({ storage })

router.route("/")
//Index Route
.get(wrapAsync(listingController.index) )
//Create Route
.post(isLoggedIn,upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing)
);


//New Route
router.get("/new",isLoggedIn,listingController.newListing );
//Wishlist
router.post(
    "/:id/wishlist",
    isLoggedIn,
    wrapAsync(listingController.toggleWishlist)
);
//renderwishlist
router.get(
    "/wishlist",
    isLoggedIn,
    wrapAsync(listingController.renderWishlist)
);
router.get("/search", wrapAsync(listingController.searchListing));
router.get("/filter/:category", wrapAsync(listingController.filterListing));

router.route("/:id")
//Update Route
.put( isLoggedIn,isOwner, validateListing, upload.single('listing[image]'),listingController.updateListing)
//Delete post Route
.delete(isLoggedIn,isOwner, listingController.destroyListing)
//Show Route
.get( wrapAsync(listingController.showListing));




//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, listingController.editListing);

module.exports = router;