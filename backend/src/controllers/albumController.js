import { v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/albumModel.js';

const addAlbum = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColour = req.body.bgColour;
        const imageFile = req.file;

        // Uploading the image to the Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type : "image"});

        const albumData = {
            name,
            desc,
            bgColour,
            image: imageUpload.secure_url
        }

        // saving the albumData into the MongoDB
        const album = albumModel(albumData);
        await album.save();

        res.json({
            success: true,
            message: "Album Added.."
        })
        
    } catch (error) {
        console.log("Error! In uploading the Album Data to the Cloudinary and MongoDb");
        res.json({
            success: false
        })
    }
}

const listAlbum = async (req, res) => {
    try {
        const allAlbumList = await albumModel.find({});
        res.json({
            success: true,
            albums: allAlbumList
        })

    } catch (error) {
        console.log("Error! In Fetching the Album Data from MongoDb");
        res.json({
            success: false
        })
    }
}

const removeAlbum = async (req, res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Album Removed.."
        })

    } catch (error) {
        console.log("Error! In Deleting the Album Data from MongoDb");
        res.json({
            success: false
        })
    }
}


export {addAlbum, listAlbum, removeAlbum}