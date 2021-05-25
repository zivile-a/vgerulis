import { useEffect, useState } from 'react';
import Button from '../common/components/Button';
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
          <Card className="w-64 h-80" isRounded>
            <div className="h-3/4 flex">
              <img src={x.image} alt={x.name} className="max-h-full m-auto" />
            </div>

            <div className=" text-center truncate font-bold" title={x.title}>
              {x.title}
            </div>

            <div className="text-center font-semibold">{x.price}$</div>

            <div className="flex justify-center">
              <Button to="/product" className="text-blue-400 hover:bg-gray-50 p-1">
                VIEW
              </Button>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default Products;
