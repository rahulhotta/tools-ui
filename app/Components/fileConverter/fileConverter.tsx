import React, { useCallback } from 'react';
import './fileConverter.scss';
import Image from 'next/image';
import littleToolsBanner from '../../../public/Images/littleTools_banner.png';
import { Col, Row } from 'antd';
import { useDropzone } from 'react-dropzone';

function FileConverter() {
    const onDrop = useCallback((acceptedFiles: any) => {
        // Handle the uploaded files here
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();

            reader.onload = () => {
                const fileContent = reader.result;
                console.log('File content:', fileContent);
            };

            reader.readAsText(file);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Image src={littleToolsBanner} alt='little tools landing page banner' className='fileConverter_banner' />
                </Col>
            </Row>
            <Row {...getRootProps()} className={`dropzone file_converter_file_input_container ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} />
                <Col span={24} className='file_converter_col'>
                    <button className='addFile_button'> + Add File</button>
                </Col>
                {isDragActive ? (
                    <Col span={24} className='file_converter_col'>
                        Drop Your File Here.
                    </Col>
                    ) : (
                    <>
                        <Col span={24} className='file_converter_col'>
                            OR
                        </Col>
                        <Col span={24} className='file_converter_col'>
                            Drag and drop your file HERE.
                        </Col>
                    </>
                )}
            </Row>
        </div>
    )
}

export default FileConverter