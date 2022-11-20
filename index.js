import mongoose  from "mongoose";
import User from "./model.js";

const MONGO_URL = '<Your String>';

mongoose.connect(MONGO_URL, () => {
    console.log("Connected to MongoDB");
});

async function handlr(){
    const user = await User.create({
        "name" : "User 2",
        "age"  : 25
    });
}

const getUser = async () =>{
    const users = await User.find();
    console.log(users);
}

handlr();
getUser();