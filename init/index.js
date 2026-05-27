const mongoose = require("mongoose");
require("dotenv").config();
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dbUrl = process.env.ATLASDB_URL;

async function main() {
    if (!dbUrl) {
        throw new Error("ATLASDB_URL is missing. Add it to your .env file.");
    }

    await mongoose.connect(dbUrl);
    console.log(`Mongo Connected: ${mongoose.connection.host}/${mongoose.connection.name}`);
}

const initDB = async () => {

    await Listing.deleteMany({});

    const updatedData = initData.data.map((obj) => {
        return {
            ...obj,
            owner: new mongoose.Types.ObjectId("6a15813ba30d196dddc62800")
        };
    });

    console.log("First object before insert:", updatedData[0]);

    await Listing.insertMany(updatedData);

    console.log("DATA INSERTED SUCCESSFULLY");
    await mongoose.connection.close();
};

main()
    .then(initDB)
    .then(() => {
        console.log("connection closed!");
    })
    .catch((err) => {
        console.log(err);
    });
