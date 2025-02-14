import { Button, Form, Input } from "antd";

const AppContent = () => {
  return (
    <div className="container p-20">
      <Form>
        <Form.Item label="Tài khoản">
          <Input />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="default">Đăng nhập</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AppContent;
