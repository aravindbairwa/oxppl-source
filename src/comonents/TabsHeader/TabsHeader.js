import { useState } from "react";
import searchIcon from "../../assets/search_icon.svg";
import closeIcon from "../../assets/close.svg";
import Tabs from "../Tabs/Tabs";

function TabsHeader() {
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    setInputValue("");
  };

  const onClick = (isSearchBar) => {
    setIsSearchBar(isSearchBar);
    if (!isSearchBar) resetInputField();
  };

  return (
    <div className="tabs-header">
      <div className="tabs-header__tabs">
        <Tabs></Tabs>
      </div>
      <div
        className={
          isSearchBar
            ? "tabs-header__search searchActive"
            : "tabs-header__search"
        }
      >
        <img
          src={searchIcon}
          className="tabs-header__search--icon"
          alt="search"
        />
        <input
          className="tabs-header__search--input"
          value={inputValue}
          onChange={handleUserInput}
          placeholder="SEARCH..."
          onFocus={() => onClick(true)}
        />
        <img
          src={closeIcon}
          className={isSearchBar ? "close-icon show-close-icon" : "close-icon"}
          alt="close"
          onClick={() => onClick(false)}
        />
      </div>
    </div>
  );
}

export default TabsHeader;
