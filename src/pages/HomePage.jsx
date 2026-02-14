import "../styles/HomePage.css";
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import GetStartedSection from "../components/GetStartedSection"
import PopularToolsSelection from "../components/PopularToolsSelection"

const HomePage = () => {
  return (

    <div className="font-inter">
      {/*Outer Wrapper Start*/}
      <div className="wrapper">
        <Header />
        <HeroSection />
        <GetStartedSection />
        <PopularToolsSelection />
      </div>
      { /*END Outer Wrapper*/}
    </div>

  )
}

export default HomePage
