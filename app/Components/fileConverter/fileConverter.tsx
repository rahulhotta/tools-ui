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