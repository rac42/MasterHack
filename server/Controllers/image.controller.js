import cloudinary from 'cloudinary';
import { createCanvas } from 'canvas';

export const uploadToCloudinary = async (file, folder, quality) => {
    const options = { folder };
    options.resource_type = "auto";

    if (quality) {
        options.quality = quality;
    }

    try {
        const result = await cloudinary.uploader.upload(file, options);
        return result;
    } catch (error) {
        console.log('Cloudinary Upload Error:', error);
        throw error;
    }
}

function generateProfilePicture (letter) {
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');

    // Background color
    ctx.fillStyle = '#8897b5';
    ctx.fillRect(0, 0, 200, 200);

    // Text settings
    ctx.fillStyle = '#10e04b';
    ctx.font = 'bold 100px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter, 100, 100);

    return canvas.toBuffer();
}

export default generateProfilePicture;
