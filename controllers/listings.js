const Listing = require("../models/listing")
const User = require("../models/user");

module.exports.index = async (req, res) => {
    try {

        let { minPrice, maxPrice } = req.query;

        let filter = {};

        if (minPrice && maxPrice) {
            filter.price = {
                $gte: Number(minPrice),
                $lte: Number(maxPrice),
            };
        }


        const alllistings = await Listing.find(filter)
            .sort({ createdAt: -1 })
            .lean();


        if (!alllistings.length) {
            req.flash("error", "No Listings Found!");
            return res.redirect("/listings");
        }


        let savedListings = [];

        if (req.user) {
            const user = await User.findById(req.user._id)
                .select("wishlist")
                .lean();

            savedListings = user?.wishlist?.map(id => id.toString()) || [];
        }


        const updatedListings = alllistings.map(listing => {

            const createdAt = listing.createdAt
                ? new Date(listing.createdAt)
                : null;

            const isRecent = createdAt
                ? (Date.now() - createdAt.getTime()) < 3 * 24 * 60 * 60 * 1000
                : false;

            return {
                ...listing,
                isRecent
            };
        });

        let recentListings = [];

        if (req.session.recentlyViewed) {

            console.log("SESSION IDS:",
                req.session.recentlyViewed);

            const mongoose = require("mongoose");

            recentListings = await Listing.find({
                _id: {
                    $in: req.session.recentlyViewed.map(
                        id => new mongoose.Types.ObjectId(id)
                    )
                }
            }).lean();
            console.log("FOUND LISTINGS:",
                recentListings);
        }
        const topRatedListings = await Listing.find({
            averageRating: { $gt: 0 }
        })
            .sort({ averageRating: -1 })
            .limit(4)
            .lean();
        return res.render("listings/index", {
            alllistings: updatedListings,
            savedListings,
            recentListings,
            topRatedListings
        });


    } catch (err) {
        console.log("INDEX ERROR:", err);
        return res.status(500).send(err.message);
    }
};
module.exports.newListing = async (req, res) => {

    res.render("listings/new")
};

module.exports.toggleWishlist = async (req, res) => {

    let { id } = req.params;

    let user = await User.findById(req.user._id);

    let isSaved = user.wishlist.includes(id);

    if (isSaved) {
        user.wishlist.pull(id);
        req.flash("success", "Removed from wishlist!");
    } else {
        user.wishlist.push(id);
        req.flash("success", "Added to wishlist!");
    }
    await user.save();
    res.redirect(`/listings/${id}`);
};
module.exports.renderWishlist = async (req, res) => {

    let user = await User.findById(req.user._id)
        .populate("wishlist");

    res.render(
        "listings/wishlist.ejs",
        { wishlist: user.wishlist }
    );
};
module.exports.searchListing = async (req, res) => {

    let { q } = req.query;

    const alllistings = await Listing.find({
        $or: [
            { title: { $regex: q, $options: "i" } },
            { location: { $regex: q, $options: "i" } },
            { country: { $regex: q, $options: "i" } }
        ]
    });

    if (alllistings.length == 0) {
        req.flash("error", "Results not found")
        return res.redirect("/listings");
    }
    const topRatedListings = await Listing.find({
        averageRating: { $gt: 0 }
    })
        .sort({ averageRating: -1 })
        .limit(4)
        .lean();
    res.render("listings/index", {
        alllistings,
        savedListings: [],
        recentListings: [],
        topRatedListings
    });
};

module.exports.filterListing = async (req, res) => {

    let { category } = req.params;

    const alllistings = await Listing.find({ category });

    if (alllistings.length === 0) {
        req.flash("error", "No listings found!");
        return res.redirect("/listings");
    }
    let savedListings = [];

    if (req.user) {
        const user = await User.findById(req.user._id).select("wishlist").lean();

        savedListings = user?.wishlist?.map(id => id.toString()) || [];
    }
    const topRatedListings = await Listing.find({
        averageRating: { $gt: 0 }
    })
        .sort({ averageRating: -1 })
        .limit(4)
        .lean();
    res.render("listings/index", {
        alllistings,
        savedListings,
        recentListings: [],
        topRatedListings
    });

};
module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }

    let savedListings = [];

    if (req.user) {
        const user = await User.findById(req.user._id)
            .select("wishlist")
            .lean();

        savedListings =
            user?.wishlist?.map(id => id.toString()) || [];
    }
    req.session.recentlyViewed =
        req.session.recentlyViewed || []
    if (!req.session.recentlyViewed.includes(id)) {
        req.session.recentlyViewed.unshift(id);

        if (req.session.recentlyViewed.length > 5) {
            req.session.recentlyViewed.pop();
        }

    }

    res.render("listings/show", {
        listing,
        savedListings,
        recentListings: []
    });
};

module.exports.createListing = async (req, res, next) => {
    console.log(req.file);
    let url = req.file.path;
    let filename = req.file.filename
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!!");
    res.redirect("/listings")
};

module.exports.updateListing = async (req, res) => {

    let { id } = req.params;

    const listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        {
            runValidators: true,
            new: true
        }
    );

    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};
module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings")
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing });
};

