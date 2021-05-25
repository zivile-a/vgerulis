import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/components/Card';

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
        <li key={x.id} className="p-5">
          <Card className="w-64 h-80">
            <div className="h-3/4">
              <img src={x.image} alt={x.name} className="max-h-full m-auto" />
            </div>

            <div className=" text-center truncate mt-1 font-bold" title={x.title}>
              {x.title}
            </div>

            <div className="text-center font-semibold mt-1">{x.price}$</div>

            <Link to="/product">VIEW</Link>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default Products;
