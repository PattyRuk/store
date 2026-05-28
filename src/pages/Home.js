import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';
import SecondBanner from '../components/SecondBanner';
import ProductGallery from './ProductGallery';

function Home() {
  return (
    <PageWrapper>
      <Banner />
      <SecondBanner />
      <ProductGallery />
    </PageWrapper>
  );
}

export default Home;