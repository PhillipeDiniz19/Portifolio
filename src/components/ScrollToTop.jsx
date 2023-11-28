import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa"



const ScrollToTop = () => {
  const [pageYPosition, setPageYPosition] = useState(0);

  const handleClick = () => {
    window.scrollTo({ top: 0,  behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="testando"
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        borderRadius: "50%",
        background: "black",
        color: "black",
        padding: "15px 15px",
        border: "1px solid yellow",
        cursor: "pointer",
        color: "white"
      }}
    >
      <FaAngleUp/>
    </button>
  );
};

export default ScrollToTop;