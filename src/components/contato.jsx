import React from "react";
import '../modelsCss/contato.css'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function contato() {
    return(
        <div>
            <main className="main-contato">

                <div className="titulos">
                    <h1>Contato</h1> 
                </div>
                
                <div className="detalhes">
                    <div className="bar"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
                <div className="contatos">
                    <h2>Entre em contato atráves desses convites.</h2>
                    <ul className="lista-contatos">
                        <li><i><FaGithub className="tamanho-icone"/><a href="https://github.com/PhillipeDiniz19" target="_blank" rel="noopener noreferrer"><span>GITHUB</span></a></i></li>
                        <li><i><CiLinkedin className="tamanho-icone"/><a href="https://www.linkedin.com/in/phillipe-diniz/" target="_blank" rel="noopener noreferrer"><span>LINKEDIN</span></a></i></li>
                        <li><i><MdEmail className="tamanho-icone"/><a href="http://" target="_blank" rel="noopener noreferrer"><span>Phillipediniz19@gmail.com</span></a></i></li>
                        <li><i><FaWhatsapp className="tamanho-icone"/><a href="https://api.whatsapp.com/send?phone=5561981474028&text=Ol%C3%A1,%20estou%20atr%C3%A1ves%20do%20portfolio" target="_blank" rel="noopener noreferrer"><span>WHATSAPP</span></a></i></li>             
                    </ul>
                </div>
            </main>
            <div className="footer" id="contato">
                <div className="linha-final">
                    <div className="ultimo-contato">
                        <h3 className="copyraty">&#169;Todos os direitos reservados</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contato