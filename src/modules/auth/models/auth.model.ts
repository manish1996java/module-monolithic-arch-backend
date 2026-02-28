import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
    title: String
});


export default mongoose.model("Blog",BlogSchema);