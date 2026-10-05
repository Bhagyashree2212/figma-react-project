import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import PromoBar from './component/PromoBar';
import Hero from './component/Hero';
import WelcomeStrip from './component/WelcomeStrip';
import PromoBanners from './component/PromoBanners';
import FrequentlyOrdered from './component/FrequentlyOrdered';
import HealthcareBanner from './component/HealthcareBanner';
import PopularCategories from './component/PopularCategories';
import TrendingNow from './component/TrendingNow';
import TopDeals from './component/TopDeals';
import GenericAlternative from './component/GenericAlternative';
import Membership from './component/Membership';

function App() {
  return (
    <div className="App">
      <header className="App-header">

       
       <Header/>
        <PromoBar />
      <NavBar />
      <Hero />

       <WelcomeStrip />
      <PromoBanners />
      <FrequentlyOrdered />
      <HealthcareBanner />

      <PopularCategories />
<TrendingNow />

<TopDeals />
<GenericAlternative />
<Membership />

       <Body/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
