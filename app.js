if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
console.log("THIS APP.JS IS RUNNING");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing");
const Review = require("./models/review");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js")
const ExpressErrors = require("./utils/ExpressErrors.js");

const { validateListing, validateReview } = require("./middleware/middleware.js");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");

const userRouter = require("./routes/user.js");
const reviewRouter = require("./routes/review.js")

const dbUrl = process.env.ATLASDB_URL;
const sessionSecret = process.env.SECRET || "supersecreatecode";





main()
    .then(() => {
        console.log("connection successful!")
    })
    .catch((err) => {
        console.log(err);
    })
async function main() {
    if (!dbUrl) {
        throw new Error("ATLASDB_URL is missing. Add it to your .env file.");
    }

    await mongoose.connect(dbUrl);
    console.log(`Mongo Connected: ${mongoose.connection.host}/${mongoose.connection.name}`);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")))


const store = MongoStore.create({
    mongoUrl: process.env.ATLASDB_URL,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});
store.on("error", (err) => {
    console.log("ERROR IN MONGODB SESSION", err);
});
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

console.log("CLOUD:", process.env.CLOUD_NAME);
console.log("KEY:", process.env.CLOUD_API_KEY);

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email:"piyush@gmail.com",
//         username:"delta-student"
//     })
//     let registereduser=await User.register(fakeUser,"helloworld");
//     res.send(registereduser); 
// })



app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter)
app.use("/", userRouter)

// app.get("/", (req, res) => {
//     res.send("hii, I m root")
// });
app.get("/updateRatings", async (req, res) => {

    const listings = await Listing.find();

    for (let listing of listings) {

        const reviews = await Review.find({
            _id: { $in: listing.reviews }
        });

        if (reviews.length > 0) {

            const total = reviews.reduce(
                (sum, review) => sum + review.rating,
                0
            );

            listing.averageRating =
                total / reviews.length;

            await listing.save();
        }
    }

    res.send("Average Ratings Updated");

});

app.get("/testListing", async (req, res) => {
    let samplelisting = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1200,
        location: "Calungute, Goa",
        country: "India",
    });

    await samplelisting.save();
    res.send("Test listing saved!");
});



app.use((req, res, next) => {
    next(new ExpressErrors(404, "Page Not Found!"));
});
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;

    res.status(statusCode).render("errors", {
        message,
        err
    });
});

app.listen(8080, () => {
    console.log("app is listening");
})
