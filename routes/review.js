const express = require("express");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressErrors.js")
const { validateListing, validateReview } = require("../middleware/middleware.js");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing");
const { saveRedirectUrl,isLoggedIn,isReviewAuthor } = require("../middleware/middleware.js");
const reviewController= require("../controllers/reviews.js");


//reviews
//Post Route
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewController.createReview)
);

//DELETE review route
router.delete("/:reviewId",isLoggedIn ,isReviewAuthor,wrapAsync(reviewController.destroyReview))

module.exports = router;