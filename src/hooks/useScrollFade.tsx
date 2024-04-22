import { useState, useEffect } from "react";

export default function UseScrollFade() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 200);
    };

    //add event listener to invoke changing the state of isAtTop when the page is scrolled
    window.addEventListener("scroll", handleScroll);

    //clean-up function to remove the event listener after this has occurred - i.e. eventlistener is removed when the component is removed
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isAtTop;
}
