import { Link } from 'react-router-dom';
import { FaShoppingBag, FaStore } from 'react-icons/fa';
import '../styles/header.css';

export default function Header({ cartCount }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/home" className="logo">
          <FaStore className="logo-icon" />
         <h2>MEGA<strong>MARKET</strong></h2> 
        </Link>
        <nav className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Shop</Link>
          <Link to="/cart" className="cart-link">
            <FaShoppingBag className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}