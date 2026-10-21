import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (

    <main className="home">

      {/* Navbar */}
      <Navbar />

         {/* Main banner and Movie card */}

         {/* Main banner */}
        <div className="hero">
          <img src={hero_banner} alt="The Protector series banner" className="banner-img" />
          <div className="hero-caption">
            <img src={hero_title} alt="The Protector title logo" className="caption-img" />
            <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
            <div className="hero-btns">
              <button className="btn"><img src={play_icon} alt="Play-icon" />Play</button>
              <button className="btn dark-btn"><img src={info_icon} alt="Info-icon" />More Info</button>
            </div>

            {/* Movie card  */}
           <TitleCards/>
          </div>
        </div>

          {/* Multiple Movie cards */}
        <div className="more-cards">
          <TitleCards title={"Only on Netflix"} category={"now_playing"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
          <TitleCards title={"Top Movies for You"} category={"top_rated"}/>
        </div>
        
        {/* Footer */}
        <Footer/>

    </main>

  );
};

export default Home;
