import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    name: 'Fjallraven Backpack',
    desc: 'Durable, classic design for daily & outdoor use.',
    rating: 4.8,
  },
  {
    id: 2,
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    name: 'Mens Casual Premium Shirt',
    desc: 'Soft fabric, slim fit, perfect for daily wear.',
    rating: 4.6,
  },
  {
    id: 3,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
    name: 'Mens Cotton Jacket',
    desc: 'Warm & lightweight, great for all seasons.',
    rating: 4.9,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) return <span key={i} className="star full">★</span>;
        if (i === fullStars && hasHalf) return <span key={i} className="star half">★</span>;
        return <span key={i} className="star empty">★</span>;
      })}
      <span className="rating-num">({rating})</span>
    </div>
  );
};

const ProductIntro = () => {
  return (
    <section className="product-intro-section">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-intro-grid">
        {featuredProducts.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="product-card-link"
          >
            <div className="product-intro-card">
              <div className="product-img-wrap">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="product-img"
                  onError={(e) => {
                    e.target.src = 'https://picsum.photos/300/300';
                  }}
                />
              </div>
              <h3 className="product-name">{item.name}</h3>
              <StarRating rating={item.rating} />
              <p className="product-desc">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductIntro;