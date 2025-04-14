import React, { useCallback, useState } from 'react';
import './fileConverter.scss';
import Image from 'next/image';
import littleToolsBanner from '../../../public/Images/fileConverterLandingPageImage2.png';
import { Col, Row } from 'antd';
import { useDropzone } from 'react-dropzone';
import DragDropArea from './dragDropArea/dragDropArea';
import ExtensionSelector from './ExtensionSelector/extensionSelector';
import CommonCard from '@/app/Utils/CommonElements/Card/CommonCard';

function FileConverter() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    console.log('image', image)
    const handleImageChange = (event: any) => {
        const file = event.target.files[0];

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

            reader.onload = () => {
                const fileContent = reader.result;
                console.log('File content (data URL):', fileContent);
                setPreview(fileContent); // This will be a base64 image now
                setImage(file);
            };

            reader.readAsDataURL(file); // 
        });
    }, []);

    // const resetSelectedFile = () => {
    //     setImage(null);
    //     console.log(image)
    // }
    return (
        <div>
            <Row className='display_flex'>
                <Col className='fileConverter_banner display_flex' span={24}>
                    <div>
                        <Image src={littleToolsBanner} alt='little tools landing page banner' className='fileConverter_banner_image' />
                    </div>
                    <h1>
                        CONVERT YOUR FILES FROM ONE FORMAT TO ANOTHER, ONLINE.
                    </h1>
                </Col>
                <Col span={16}>
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
                </Col>
            </Row>
        </div>
    )
}

export default FileConverter