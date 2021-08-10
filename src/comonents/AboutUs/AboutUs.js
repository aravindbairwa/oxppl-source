import profileImage from "../../assets/profile_picture.svg";
import pplLogo from "../../assets/ppl_logo.svg";
function AboutUs() {
  return (
    <div className="aboutUs">
      <img
        src={profileImage}
        className="aboutUs__profileImage"
        alt="profileImage"
      />
      <img src={pplLogo} className="aboutUs__pplLogo" alt="pplLogo" />
      <div className="aboutUs__desc">
        <p className="aboutUs__desc--title">Welcome to 0xPeople,</p>
        <p className="aboutUs__desc--subTitle">
          a decentralized social network for the crypto natives.
        </p>
        <p className="aboutUs__desc--info">
          For the first time, you can communicate with users behind the ETH
          addresses. Follow what the others are doing and engage in
          cummunication.{" "}
        </p>
        <p className="aboutUs__desc--info">
          Service is run on a distributed proof-of-stake network. There’s no
          central company owning the servers.{" "}
        </p>
        <p className="aboutUs__desc--learnMore">Learn more</p>
      </div>
    </div>
  );
}

export default AboutUs;
