import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PageWrapper from '../components/PageWrapper';
import SecondBanner from '../components/SecondBanner';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ addToCart }) => {
  const URL = 'https://fakestoreapi.com/products';
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    // FIX 1: Reset state when ID changes so old data doesn't flash
    setProduct(null);
    setSimilar([]);
    setQty(1);

    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${URL}/${id}`);
        
        // FIX 2: FakeStoreAPI returns an empty string "" for IDs out of range but still in 1-20 format (e.g. deleted items)
        if (!response.data || response.data === "") {
          navigate('/');
          return;
        }
        
        setProduct(response.data);
        
        const categoryResponse = await axios.get(`${URL}/category/${response.data.category}`);
        
        const filtered = categoryResponse.data
          .filter((p) => p.id !== response.data.id)
          .slice(0, 4);
          
        setSimilar(filtered);
      } catch (error) {
        console.error(error.message);
        navigate('/');
      }
    };

    const idNumber = Number(id);
    if (idNumber > 0 && idNumber <= 20) {
      fetchProductData();
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  // Loading state remains safe
  if (!product) {
    return <div className="notfound-container"><h2>Loading Item...</h2></div>;
  }

  return (
    <PageWrapper>

    </PageWrapper>
  );
};

export default ProductDetail; 