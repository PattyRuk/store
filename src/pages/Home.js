import { useState, useEffect } from 'react';
import axios from 'axios';
import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import SecondBanner from '../components/SecondBanner';
console.log('PageWrapper is:', PageWrapper);
console.log('Banner is:', Banner);
console.log('ProductCard is:', ProductCard);

function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products
    .filter((p) => (filter ? p.category === filter : true))
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <PageWrapper>
      <SecondBanner />

    </PageWrapper>
  );
}

export default Home;