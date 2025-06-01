'use client'
import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import './imageConverter.scss';
import littleToolsBanner from '../../../public/Images/fileConverterLandingPageImage2.png';
import { Col, Row } from 'antd';
import { useDropzone } from 'react-dropzone';
import DragDropArea from './dragDropArea/dragDropArea';
import ExtensionSelector from './ExtensionSelector/extensionSelector';
import ConvertableExtensions from '../../../public/Jsons/ConvertableExtensions.json'
import toast from 'react-hot-toast';
import { Player } from '@lottiefiles/react-lottie-player'
// import successAnimation from 'public/Animations/success.lottie'
function ImageConverter() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const allowedExtensions = ConvertableExtensions.map((extension)=>{
        return extension.value
    })

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];

        const fileExtension =  file.name.split('.').pop().toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
          toast.error("This image type is not allowed!")
          return;
        }
        const reader: any = new FileReader();
        reader.onload = () => {
            setPreview(reader.result);
            setImage(file);
        };
        reader.readAsDataURL(file);

    };
    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader: any = new FileReader();
            const fileExtension =  file.name.split('.').pop().toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
            toast.error("This image type is not allowed!")
            return;
            }
            reader.onload = () => {
                const fileContent = reader.result;
                console.log('File content (data URL):', fileContent);
                setPreview(fileContent); // This will be a base64 image now
                setImage(file);
            };

            reader.readAsDataURL(file); // 
        });
    }, []);

    return (
        <div className='fileConverter_container'>
            <Row className='display_flex'>
                <Col className='fileConverter_banner display_flex' span={24}>
                    {/* <div>
                        <Image src={littleToolsBanner} alt='little tools landing page banner' className='fileConverter_banner_image' />
                    </div> */}
                    <h1 className='file_converter_heading'>
                        CONVERT YOUR FILES FROM ONE FORMAT TO ANOTHER, ONLINE.
                    </h1>
                </Col>
                <Col span={16} xs={{ span: 23 }}
                    sm={{ span: 23 }}
                    md={{ span: 22 }}
                    lg={{ span: 16 }}
                    >
                    {!image ?
                        // To upload image show this
                        (
                            <DragDropArea onDrop={onDrop} handleImageChange={handleImageChange} />
                        )

                        :
                        // If you have image then show this
                        (
                            <ExtensionSelector image={image} setImage={setImage} preview={preview} />
                        )
                    }
                    <Player
                    autoplay
                    loop
                    src='../../../public/Animations/success.lottie'
                    style={{ height: '300px', width: '300px' }}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ImageConverter