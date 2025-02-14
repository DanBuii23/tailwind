import React from 'react';
import { Button, Form, Input, Space } from 'antd';

const FormContent = () => {
  return (
    <div className="p-20 max-w-2xl mx-auto border-2 border-gray-200">
      <h1 className="text-3xl font-bold text-center">
        Đăng ký nhận thông báo sản phẩm mới
      </h1>
      <Form>
        <Form.Item label="Tài khoản">
          <Input />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input />
        </Form.Item>
        <Form.Item>
          <Space size="middle">
            <Button type="primary">Đăng nhập</Button>
            <Button type="primary">Đăng ký</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormContent;
