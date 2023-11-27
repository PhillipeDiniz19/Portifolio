import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa"


const ScrollToTop = () => {
  const [pageYPosition, setPageYPosition] = useState(0);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        background: "white",
        color: "black",
        padding: "20px 20px",
        border: "none",
        cursor: "pointer",
      }}
    >
      <FaAngleUp/>
    </button>
  );
};

export default ScrollToTop;