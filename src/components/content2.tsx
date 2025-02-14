import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  id: number;
  src: string;
  alt: string;
}

export default function ProductList() {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [category]);

  return (
    <div>
      <h2>{category?.toUpperCase()}</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <img
            key={product.id}
            src={product.src}
            alt={product.alt}
            className="w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
}
