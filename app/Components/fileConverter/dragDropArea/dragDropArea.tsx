import React from 'react'
import './dragDropArea.scss';
import { Col, Row } from 'antd';
import { useDropzone } from 'react-dropzone';
import Button from '../../../Utils/CommonElements/Button/Button'
function DragDropArea({handleImageChange,onDrop}:any) {
const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
        <Row {...getRootProps()} className={`dropzone file_converter_file_input_container ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} onChange={handleImageChange} />
                <Col span={24} className='file_converter_col'>
                    <Button> + Add File</Button>
                </Col>
                {isDragActive ? 
                (
                    <Col span={24} className='file_converter_col'>
                        Drop Your File Here.
                    </Col>
                ) : 
                (
                    <>
                        <Col span={24} className='file_converter_col'>
                            OR
                        </Col>
                        <Col span={24} className='file_converter_col'>
                            Drag and drop your file HERE.
                        </Col>
                    </>
                )
                }
            </Row>
    </div>
  )
}

export default DragDropArea