import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <ul className="flex flex-wrap">
      {products.map((x) => (
        <ProductCard key={x.id} id={x.id} title={x.title} image={x.image} price={x.price} />
      ))}
    </ul>
  );
}

export default Products;
