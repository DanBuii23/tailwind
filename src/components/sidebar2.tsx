import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Sidebar() {
  const categories = [
    { key: 'phones', label: 'Điện thoại' },
    { key: 'laptops', label: 'Laptop' },
    { key: 'accessories', label: 'Phụ kiện' },
    { key: 'keyboards', label: 'Bàn phím' },
  ];

  return (
    <div className="w-60 bg-white shadow-lg p-4">
      <Menu mode="vertical">
        {categories.map((cat) => (
          <Menu.Item key={cat.key}>
            <Link to={`/products/${cat.key}`}>{cat.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
