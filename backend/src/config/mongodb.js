import mongoose from "mongoose";

const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => {
            console.log('MongoDB connection Established');
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/Soundstream`)

    } catch (error) {
        console.log("Error! can't connect to MongoDB");
    }
}

export default connectDB