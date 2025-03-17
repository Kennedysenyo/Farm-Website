import { NextResponse } from "next/server";
import { v2 as Cloudinary } from "cloudinary";

Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const { image } = await req.json();

    if(!image) {
      return NextResponse.json({error: "No image provided"}, {status: 400})
    }

    const uploadedImage = await Cloudinary.uploader.upload(image, {
      folder: "farm-products",
    });

    return NextResponse.json({url: uploadedImage.secure_url }, {status: 200 });
  }catch (error) {
    console.error("Cloudinary upload error: ", error);
    return NextResponse.json(
      {error: "Image upload failed"},
      {status: 500}
    );
  }

}