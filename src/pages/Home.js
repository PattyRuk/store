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


  return (
    <PageWrapper>
      <SecondBanner />

    </PageWrapper>
  );
}

export default Home;