import { useEffect, useCallback, useState } from "react";
import TabsHeader from "../TabsHeader/TabsHeader";
import List from "../List/List";

function Content() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback((event) => {
    let newVal = event.target.scrollTop > 0;
    setIsScrolled(newVal);
    console.log(isScrolled);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={isScrolled ? "content activeScroll" : "content"}>
      <div className="content__tabs">
        <TabsHeader></TabsHeader>
      </div>

      <div className="content__list">
        <List></List>
      </div>
    </div>
  );
}

export default Content;
