import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault(); // Stops the Link wrapper from opening the product details page
    
  if (addToCart) {
      addToCart(product, 1);   // Calls quantity of 1
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="card-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductCard;