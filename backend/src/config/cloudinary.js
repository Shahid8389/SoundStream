import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {

    try {
        await cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY
        });

        console.log("Cloudinary Connection Estalished");

    } catch (error) {
        console.log("Error! can't connect to the Cloudinary");
    }
}

export default connectCloudinary