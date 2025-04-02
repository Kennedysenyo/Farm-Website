"use client";
import { useState } from "react";

interface ImageUploaderProps {
  onUpload: (url: string) => void;
}

export default function ImageUploader({ onUpload }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Instant preview
    setPreview(URL.createObjectURL(file));

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.url) {
        setPreview(data.url); // Use actual uploaded image URL
        onUpload(data.url);
      } else {
        console.error("Upload failed", data.error);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="border border-gray-800 rounded w-1/2 cursor-pointer"
      />
      {preview && (
        <img
          src={preview}
          alt="preview"
          width={200}
          height={200}
          className="rounded object-cover"
        />
      )}
      {loading && <p>Uploading...</p>}
    </div>
  );
}
