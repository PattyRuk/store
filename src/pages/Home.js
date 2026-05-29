import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';
import SecondBanner from '../components/SecondBanner';
import ProductIntro from '../components/ProductIntro';
import ThirdBanner from '../components/ThirdBanner';
import LableSection from '../components/LableSection';
import SlideBanner from '../components/SlideBanner';

function Home() {
  return (
    <PageWrapper>
      <Banner />
      <LableSection />
      <ThirdBanner />
      <SlideBanner />
      <ProductIntro />
      <SecondBanner />
    </PageWrapper>
  );
}

export default Home;