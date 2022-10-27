import { cloudinary } from "../helpers/helper.js";

export const uploadImages =  async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'pets_folder',
        });
        console.log(uploadResponse);
        res.json({ msg: 'Image Uploaded successfully' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}