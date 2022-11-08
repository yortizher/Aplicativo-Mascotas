import { cloudinary } from "../helpers/helper.js";

export const uploadImages =  async (req, res) => {
    const  {tempFilePath:fileStr}  = req.files.image
    try {
        
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {upload_preset: "pets_folder"})
        const { secure_url } = uploadResponse;
        res.status(200).json({msg: "Image Uploaded successfully",  secure_url});

    } catch (err) {
        console.log('parameter',fileStr);
        res.status(500).json({ err});
    }
}