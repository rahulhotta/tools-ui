'use client'
import Image from "next/image";
import './page.scss';
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import FileConverter from "./Components/imageConverter/imageConverter";
import NavBar from "./Components/navBar/navBar";
import { Col, Row } from 'antd';
import Loader from "./Utils/Services/Loader/Loader";
import LandingPage from "./Components/home/Landing";
function Home() {
  return (
    <div className="home" >
      <Loader />
      <Row className="file_converter_container_row">
        <Col span={24}>
          <LandingPage />
        </Col>
      </Row>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });