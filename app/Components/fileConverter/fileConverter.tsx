import React, { useCallback,useState } from 'react';
import './fileConverter.scss';
import Image from 'next/image';
import littleToolsBanner from '../../../public/Images/littleTools_banner.png';
import { Col, Row } from 'antd';
import { useDropzone } from 'react-dropzone';

function FileConverter() {
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

            {image ?  
            // If you have image then show this
            'hello'  
            :
            // To upload image show this
            (
            <Row {...getRootProps()} className={`dropzone file_converter_file_input_container ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} onChange={handleImageChange} />
                <Col span={24} className='file_converter_col'>
                    <button className='addFile_button'> + Add File</button>
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
            )
            }
        </div>
    )
}

export default FileConverter