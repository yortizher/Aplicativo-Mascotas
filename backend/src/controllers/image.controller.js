import { cloudinary } from "../helpers/helper.js";

export const getImages = async (req, res) => {
    try {
        const { resources } = await cloudinary.search
        .expression('folder:pets_folder')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
    } catch (error) {
        console.error(error);
    }
}
