import Header from '../components/Header';
import Hero from '../components/Hero';
import Shop from '../components/Shop';
import Brands from '../components/Brands';
import Tips from '../components/Tips';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <Shop />
      <Brands />
      <Tips />
      <Reviews />
      <Footer />
    </div>
  );
}
