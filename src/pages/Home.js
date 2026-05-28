import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';
import SecondBanner from '../components/SecondBanner';
import ProductGallery from './ProductGallery';
import ProductIntro from '../components/ProductIntro';

function Home() {
  return (
    <PageWrapper>
      <Banner />
      <SecondBanner />
      <ProductIntro />
      <ProductGallery />
    </PageWrapper>
  );
}

export default Home;