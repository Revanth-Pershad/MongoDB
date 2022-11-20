import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    }, 
    age : {
        type : Number,
        required : true
    }
})

export default mongoose.model("User", userSchema);