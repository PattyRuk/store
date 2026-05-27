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
    // Reset state when ID changes so old data doesn't show
    setProduct(null);
    setSimilar([]);
    setQty(1);

    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${URL}/${id}`);
        
        // returns an empty string "" for (deleted items)
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
      <div className="detail-container">
        <div className="detail-image-wrapper">
          <img src={product.image} alt={product.title} className="detail-image" />
        </div>
        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-desc">{product.description}</p>
          <h2 className="detail-price">${product.price.toFixed(2)}</h2>
          
          <div className="detail-actions">
            <label htmlFor="quantity">Quantity:</label>
            <input 
              id="quantity"
              type="number" 
              min="1" 
              value={qty} 
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} 
              className="qty-input" 
            />
            <button className="btn" onClick={() => addToCart(product, qty)}>Add to Cart</button>
          </div>
        </div>
      </div>

      <SecondBanner />

      <div className="gallery-section">
        <h3 className="gallery-title">You May Also Like</h3>
        <div className="gallery-grid">
          {similar.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductDetail; 