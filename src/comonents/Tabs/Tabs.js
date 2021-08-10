import { useRef, useState } from "react";
import communitiesIcon from "../../assets/communities_icon.svg";
import messageIcon from "../../assets/message_icon.svg";
import homeIcon from "../../assets/home_icon.svg";

function Tabs() {
  const [activeTab, setActiveTab] = useState("FEED");

  const onClick = (activeTab) => {
    setActiveTab(activeTab);
  };

  return (
    <div className="tabs">
      <div
        className={activeTab === "FEED" ? "tabs__tab active-tab" : "tabs__tab"}
        onClick={() => onClick("FEED")}
      >
        <img src={homeIcon} className="tabs__tab--icon" alt="search" />
        <span className="tabs__tab--section">FEED</span>
      </div>
      <div
        className={
          activeTab === "COMMUNITIES" ? "tabs__tab active-tab" : "tabs__tab"
        }
        onClick={() => onClick("COMMUNITIES")}
      >
        <img src={communitiesIcon} className="tabs__tab--icon" alt="search" />
        <span className="tabs__tab--section">COMMUNITIES</span>
      </div>
      <div
        className={
          activeTab === "MESSAGES" ? "tabs__tab active-tab" : "tabs__tab"
        }
        onClick={() => onClick("MESSAGES")}
      >
        <img src={messageIcon} className="tabs__tab--icon" alt="search" />
        <span className="tabs__tab--section">MESSAGES</span>
      </div>
    </div>
  );
}

export default Tabs;
