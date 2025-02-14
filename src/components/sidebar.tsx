import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const categories = [
    { key: 'phones', label: 'Điện thoại' },
    { key: 'laptops', label: 'Laptop' },
    { key: 'accessories', label: 'Phụ kiện' },
    { key: 'keyboards', label: 'Bàn phím' },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-white shadow-lg transition-all ${collapsed ? 'w-24' : 'w-60'} p-2`}
      >
        <button
          className="mb-4 p-2 w-full bg-blue-500 text-white rounded-lg"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? '>' : '<'}
        </button>
        <Menu mode="vertical" theme="light">
          {categories.map((cat) => (
            <Menu.Item key={cat.key}>
              <Link to={`/category/${cat.key}`}>{cat.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </div>
  );
}
