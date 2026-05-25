import { Link } from 'react-router-dom';

const Header = ({}) => (
  <header className="header">
    <Link to="/" className="header-logo">
      <h2> MegaMarket</h2>
    </Link>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart ({})</Link>
    </nav>
  </header>
);

export default Header;