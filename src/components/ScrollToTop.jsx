import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) { // Defina a quantidade de rolagem necessária para mostrar o botão
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpe o event listener quando o componente é desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Array vazio para executar o efeito apenas uma vez após a montagem do componente

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    showButton && (
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
          color: "white",
          padding: "15px 15px",
          border: "1px solid yellow",
          cursor: "pointer"
        }}
      >
        <FaAngleUp />
      </button>
    )
  );
};

export default ScrollToTop;
