import { Link } from 'react-router-dom';

const LabelSection = () => {
  const categories = [
    {
      id: 1,
      title: 'Electronics',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/gallery?filter=electronics',
    },
    {
      id: 2,
      title: 'Clothing',
      image: 'https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xvdGh8ZW58MHx8MHx8fDA%3',
      path: '/gallery?filter=clothing',
    },
    {
      id: 3,
      title: 'Accessories',
      image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/gallery?filter=accessories',
    },
  ];

  return (
    <section id="categories" className="label-section">
        <h2 className="label-section-title">Trending Categories</h2>
        <div className="label-grid">
        {categories.map((item) => (
          <div key={item.id} className="label-card">
            <div className="label-img-wrap">
              <img src={item.image} alt={item.title} className="label-img" />
            </div>
            <h3 className="label-title">{item.title}</h3>
            <Link to={item.path} className="label-shop-btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LabelSection;