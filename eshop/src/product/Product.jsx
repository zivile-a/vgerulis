import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getProduct } from '../common/requests';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios(getProduct(id));

      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return <div>Product Page {id}</div>;
}

export default Product;
