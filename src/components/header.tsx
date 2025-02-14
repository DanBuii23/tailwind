import { Button, Layout } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="mx-auto flex justify-between items-center bg-white shadow-md px-6">
      {/* Logo */}

      <div className="basis-1/2 flex gap-10 justify-center">
        <h2 className="font-black text-white items-center">App Header</h2>
      </div>
      <div className="basis-1/2 flex gap-10 items-center">
        <h3 className="font-bold text-white">Home</h3>
        <h3 className="font-bold text-white">About</h3>
        <h3 className="font-bold text-white">Contact</h3>
        <div className="font-bold text-white">
          <Button type="primary">Đăng nhập</Button>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
