import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';
import SecondBanner from '../components/SecondBanner';
import ProductGallery from './ProductGallery';
import ProductIntro from '../components/ProductIntro';
import ThirdBanner from '../components/ThirdBanner';
import LableSection from '../components/LableSection';

function Home() {
  return (
    <PageWrapper>
      <Banner />
      <SecondBanner />
      <LableSection />
      <ThirdBanner />
      <ProductIntro />
    </PageWrapper>
  );
}

export default Home;