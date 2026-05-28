import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';
import SecondBanner from '../components/SecondBanner';
import ProductGallery from './ProductGallery';
import ProductIntro from '../components/ProductIntro';
import ThirdBanner from '../components/ThirdBanner';

function Home() {
  return (
    <PageWrapper>
      <Banner />
      <SecondBanner />
      <ProductIntro />
      <ThirdBanner />
    </PageWrapper>
  );
}

export default Home;