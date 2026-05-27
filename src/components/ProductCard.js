import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="card">
    <img src={product.image} alt={product.title} />
    <h4>{product.title}</h4>
    <p className="card-price">${product.price.toFixed(2)}</p>
  </Link>
);

export default ProductCard;