const mongoose = require("mongoose");
require("dotenv").config();
const Listing = require("../models/listing");
const initData = require("./data");
const dbUrl = process.env.ATLASDB_URL;

async function main() {
    if (!dbUrl) {
        throw new Error("ATLASDB_URL is missing. Add it to your .env file.");
    }

    await mongoose.connect(dbUrl);
    console.log(`Mongo Connected: ${mongoose.connection.host}/${mongoose.connection.name}`);

    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);

    console.log("Data inserted");
    await mongoose.connection.close();
}

main();
