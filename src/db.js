import mongoose from "mongoose";


export const connectDB = async () => {

    try {
        await mongoose.connect('mongodb://localhost/mprt')
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}