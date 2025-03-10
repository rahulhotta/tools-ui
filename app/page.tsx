'use client'
import Image from "next/image";
import './page.scss';
import React, { useState } from "react";
import dynamic from 'next/dynamic';

function Home() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  
  const handleImageChange = (event:any) => {
    const file = event.target.files[0];
    if (file && file.type === "image/jpeg") {
      const reader:any = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        setImage(file);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid JPG file.");
    }
  };

  const convertToPNG = () => {
    if (!image) return;

    const img:any = document.createElement('img');
    if(img){
      img.src = preview;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0);
        
        const pngUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = "converted.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    }
  };
  return (
    <div className="home" >
      <div className="">
      <h1 className="">JPG to PNG Converter</h1>
      <input type="file" accept="image/jpeg" onChange={handleImageChange} />
      {preview && <img src={preview} alt="Preview" className="" />}
      <button 
        className="" 
        onClick={convertToPNG}
        disabled={!image}
      >
        Convert to PNG
      </button>
    </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });