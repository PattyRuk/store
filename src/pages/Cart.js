import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const Cart = ({ cart, removeFromCart, updateQty }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <PageWrapper>
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          {cart.length > 0 && (
            <span className="cart-count">{cart.reduce((s, i) => s + i.quantity, 0)} items</span>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛍️</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/gallery" className="btn">Start Shopping</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img-wrap">
                    <img src={item.image} alt={item.title} className="cart-item-img" />
                  </div>
                  <div className="cart-item-details">
                    <span className="cart-item-category">{item.category}</span>
                    <h4 className="cart-item-title">{item.title}</h4>
                    <p className="cart-item-unit-price">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="cart-item-right">
                    <div className="qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >−</button>
                      <span className="qty-display">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >+</button>
                    </div>
                    <p className="cart-item-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3 className="summary-title">Order Summary</h3>
              <div className="summary-rows">
                {cart.map((item) => (
                  <div key={item.id} className="summary-row">
                    <span className="summary-label">
                      {item.title.length > 26 ? item.title.slice(0, 26) + '…' : item.title}
                      <em> ×{item.quantity}</em>
                    </span>
                    <span className="summary-val">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="summary-divider" />
              <div className="summary-total-row">
                <span>Total</span>
                <span className="summary-total-val">${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-success summary-checkout-btn">
                Proceed to Checkout
              </button>
              <Link to="/gallery" className="summary-continue-link">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Cart;