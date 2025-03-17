"use client";
import  { useState } from "react";

interface ImageUploaderProps {
  onUpload: (url: string) => void;
}

export  default function ImageUploader({onUpload}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const[loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(!file) return

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      setLoading(true);

      try{
        const res = await fetch("/api/upload",{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ image: reader.result }),
        });

        const data = await res.json();
        if (data.url) {
          setPreview(data.url);
          onUpload(data.url)
        }
      } catch(error) {
        console.error("Upload failed", error)
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <div className="flex flex-col gap-2">
      <input type="file" accept="image/" onChange={handleImageUpload} className="border broder-gray-800 rounded w-1/2 cursor-pointer" />
      {loading && <p>Uploading...</p>}
      {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover " />}
    </div>
  )
}