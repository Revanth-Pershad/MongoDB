import mongoose  from "mongoose";
import CompUser from "./model.js";

const MONGO_URL = '<Your Credentials>';

mongoose.connect(MONGO_URL, () => {
    console.log("Connected to MongoDB");
});

async function handlr(){
    const compuser = await CompUser.create({
        "name" : "User 2",
        "age"  : 25,
        "address" : {
            "HouseNum" : 52,
            "StreetNum" : 64
        }
    });
}

handlr();