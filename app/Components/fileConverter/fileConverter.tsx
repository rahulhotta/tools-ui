import React, { useCallback, useState } from 'react';
import './fileConverter.scss';
import Image from 'next/image';
import littleToolsBanner from '../../../public/Images/littleTools_banner.png';
import { Col, Row } from 'antd';
import { useDropzone } from 'react-dropzone';
import DragDropArea from './dragDropArea/dragDropArea';
import ExtensionSelector from './ExtensionSelector/extensionSelector';

function FileConverter() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
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
        // Handle the uploaded files here
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();

            reader.onload = () => {
                const fileContent = reader.result;
            };

            reader.readAsText(file);
        });
    }, []);

    // const resetSelectedFile = () => {
    //     setImage(null);
    //     console.log(image)
    // }
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Image src={littleToolsBanner} alt='little tools landing page banner' className='fileConverter_banner' />
                </Col>
            </Row>
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
        </div>
    )
}

export default FileConverter