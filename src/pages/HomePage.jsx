import "../styles/HomePage.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GetStartedSection from "../components/GetStartedSection";
import PopularToolsSelection from "../components/PopularToolsSelection";
import BuyHome from "../components/BuyHome";
import NewsSection from "../components/NewsSection";
import BottomNav from '../components/BottomNav';

const HomePage = () => {
  return (

    <div className="font-inter ">
      {/*Outer Wrapper Start*/}
      <div className="wrapper pb-34">
        <Header />
        <HeroSection />
        <GetStartedSection />
        <PopularToolsSelection />
        <BuyHome />
        <NewsSection />
        <BottomNav />
      </div>
      { /*END Outer Wrapper*/}
    </div>

  )
}

export default HomePage
