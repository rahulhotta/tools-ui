import React from 'react'
import './fileConverter.scss';
import Image from 'next/image';
import littleToolsBanner from '../../../public/Images/littleTools_banner.png';
import { Col, Row } from 'antd';
function FileConverter() {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Image src={littleToolsBanner} alt='little tools landing page banner' className='fileConverter_banner' />
                </Col>
            </Row>
            <Row className='file_converter_file_input_container'>
                <Col span={24} className='file_converter_col'>
                    <button className='addFile_button'> + Add File</button>
                </Col>
                <Col span={24} className='file_converter_col'>
                    OR
                </Col>
                <Col span={24} className='file_converter_col'>
                    Drag and drop your file HERE.
                </Col>
            </Row>
        </div>
    )
}

export default FileConverter