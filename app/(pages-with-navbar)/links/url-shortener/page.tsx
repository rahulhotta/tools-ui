'use client'
import React, {useRef} from 'react'
import type { FormProps } from 'antd';
import { Space, Form, Input, Radio, Tooltip, message } from 'antd';
import './url-shortener.scss';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import Button from '@/app/Utils/CommonElements/Button/Button';
import CommonCard from '@/app/Utils/CommonElements/Card/CommonCard';
import { MdContentCopy } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
const page = () => {
  const inputRef:any = useRef(null);
  const handleCopy = async () => {
    const inputValue = inputRef.current?.input?.value;

    if (!inputValue) {
      toast.error('Please enter some text');
      return;
    }

    try {
      await navigator.clipboard.writeText(inputValue);
      toast.success('Copied to Clipboard!')

    } catch (err) {
      toast.error('Failed to copy.');
    }
  };
  type FieldType = {
    URL?: string;
    expiry_date?: string;
    remember?: string;
  };
  const options: CheckboxGroupProps<string>['options'] = [
    { label: '1 Day', value: '1_day' },
    { label: '3 Days', value: '3_days' },
    { label: '7 Days', value: '7_days' },
  ];
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log("values: ", values)
  }
  return (
    <div className='url_shortener_page_container'>
      <Toaster />
      <div className='url_shortener_header'>
        <h1>
          Make your URLs really short, ONLINE.
        </h1>
      </div>
      <div className='url_shortener_form_container'>
        <CommonCard>
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 1000 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            className='url_shortener_form'
          >
            <Form.Item<FieldType>
              label="Enter URL"
              name="URL"
              rules={[{ required: true, message: 'Please Enter your URL!' }]}
            >
              <Input placeholder='Enter your URL' className='form_input' />
            </Form.Item>

            <Form.Item<FieldType>
              label="Expires In"
              name="expiry_date"
              rules={[{ required: true, message: 'Please Enter Expiry Time!' }]}
            >
              <Radio.Group
                block
                options={options}
                optionType="button"
                buttonStyle="solid"
              />
            </Form.Item>

            <Form.Item label={null}>
              <Button width={'100%'}>
                Generate
              </Button>
            </Form.Item>
          </Form>
        </CommonCard>
      </div>
      <div className='url_shortener_form_container'>
        <CommonCard>
          <div className='copy_container'>
            <Space.Compact style={{ width: '100%' }}>
              <Input className='copy_input' placeholder='Copy URL'  defaultValue={'hello'} ref={inputRef}/>

              <Tooltip placement="top" title={'Copy'}>
                <Button onClick={handleCopy} title="copy"> <MdContentCopy style={{ fontSize: "1rem" }} /></Button>
              </Tooltip>
            </Space.Compact>
          </div>
        </CommonCard>
      </div>
    </div>
  )
}

export default page