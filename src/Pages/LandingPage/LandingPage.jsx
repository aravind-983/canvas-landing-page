import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import AELSection from './components/AELSection';
import Carousel from './components/carousel';
import DetailsSection from './components/DetailsSection';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <AELSection />
      <Carousel />
      <DetailsSection />
    </>
  );
};

export default LandingPage;