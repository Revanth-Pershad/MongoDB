import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    HouseNum : Number, 
    StreetNum : Number
})

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    }, 
    age : {
        type : Number,
        required : true
    }, 
    address : addressSchema
}, {timestamps : true})

export default mongoose.model("CompUser", userSchema);