import AboutUs from "../AboutUs/AboutUs";
import Content from "../Content/Content";
import Wallet from "../Wallet/Wallet";

function Home() {
  return (
    <div className="home">
      <div className="home__aboutUs">
        <AboutUs></AboutUs>
      </div>
      <div className="home__content">
        <Content></Content>
      </div>
      <div className="home__wallet">
        <Wallet></Wallet>
      </div>
    </div>
  );
}

export default Home;
