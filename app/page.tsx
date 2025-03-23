'use client'
import Image from "next/image";
import './page.scss';
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import FileConverter from "./Components/fileConverter/fileConverter";
import NavBar from "./Components/navBar/navBar";
import { Col, Row } from 'antd';
import Loader from "./Utils/Services/Loader/Loader";

function Home() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type === "image/jpeg") {
      const reader: any = new FileReader();
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

    const img: any = document.createElement('img');
    if (img) {
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
      <Loader />
      <NavBar />
      <Row className="file_converter_container_row">
        <Col span={16}>
          <FileConverter />
        </Col>
      </Row>
      
    </div>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });