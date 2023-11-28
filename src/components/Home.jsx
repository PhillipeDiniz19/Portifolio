import React, {useState} from "react";
import '../modelsCss/home.css'
import '../modelsCss/globalcss.css'
import '../modelsCss/About.css'
import '../modelsCss/projetos.css'
import imgagemEscolhida1 from '../img/css.png'
import imgagemEscolhida2 from '../img/htmlç.png'
import imgagemEscolhida3 from '../img/javascript.png'
import imgagemEscolhida4 from '../img/mongodb.png'
import imgagemEscolhida5 from '../img/nodejs.png'
import imgagemEscolhida6 from '../img/react.png'
import imgagemEscolhida7 from '../img/77d0a7c454e658833800528e748edbe9.png'
import calculadora from '../img/calculadoraIphone.png'
import foto1 from '../img/homepage.png'
import foto2 from '../img/Screenshot_1.png'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { saveAs } from 'file-saver';
import pdfContent from '../download/Curriculo.pdf'
import '../modelsCss/navbar.css'




function Home(){



    const handleDownload = () => {
        fetch(pdfContent)
          .then((res) => res.blob())
          .then((blob) => {
            // Salvando o Blob como arquivo PDF
            saveAs(blob, 'PhillipeDiniz.pdf');
          })
          .catch((error) => {
            console.error('Houve um erro:', error);
          });
      };

    const ancorarSobre = () => {
        const section = document.getElementById('minhaSecao');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
        const [active, setActive] = useState("nav_menu")
        const [toggleIcon, setToggleIcon] = useState("nav_toggler");
        const navToggle = (sectionId) => {
            
            setActive("nav_menu");
          if (sectionId) {
            // Obtém a posição da seção na página
            const offsetTop = sectionId.offsetTop;
        
            // Scroll suave para a seção na página
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }


            active === "nav_menu" 
            ? setActive('nav_menu nav_active')
            : setActive("nav_menu");

          // TogglerIcon
            toggleIcon === 'nav_toggler' 
            ? setToggleIcon('nav_toggler toggle')
            : setToggleIcon('nav_toggler');

          
        };

    return(
    <div>
        <nav className="navbar">
            <a href='#' className='Logo'>
             &#8249;<span>D</span>INIZ&#8260;&#8250;
            </a>
            <ul className={active}>
               <label><li className='nav_item'><a href='#' className='nav_link' onClick={() => navToggle("section1")}>HOME</a></li></label> 
               <label><li className='nav_item'><a href='#minhaSecao' className='nav_link' onClick={() => navToggle("section1")}>SOBRE</a></li></label>  
               <label><li className='nav_item'><a href='#meusProjetos' className='nav_link' onClick={() => navToggle("section1")}>PROJETOS</a></li></label>
               <label><li className='nav_item'><a href='#contato' className='nav_link' onClick={() => navToggle("section1")}>CONTATO</a></li></label>
            </ul>

            <div className="icons">
                <label><a href='https://github.com/PhillipeDiniz19' target="_blank"><img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo.png" 
                    alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo"/></a></label>  

                <label><a href='https://www.linkedin.com/in/phillipe-diniz/' target="_blank"><img width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png" alt="linkedin"/></a></label>               
            </div>
                      
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>  
        </nav> 
    
            <main className="editado">
                <aside>
                    <h2><span className="home-specs">I'm</span> Phillipe Diniz <br/>  Cardoso </h2>
                    <h3>Desenvolvedor Front-And</h3>
                    <ul className="lista-imagens">
                        <li><img src={imgagemEscolhida2} alt="HTML5"></img></li>
                        <li><img src={imgagemEscolhida1} alt="CSS3"></img></li>
                        <li><img src={imgagemEscolhida3} alt="JAVASCRIPT"></img></li>
                        <li><img src={imgagemEscolhida6} alt="REACTJS"></img></li>
                        <li><img src={imgagemEscolhida5} alt="NODEJS"></img></li>
                        <li><img src={imgagemEscolhida4} alt="MONGODB"></img></li>
                    </ul> 
                    <button type="submit" className="botao" onClick={ancorarSobre}>READ MORE</button>
                </aside>
                
                <article>
                     <img src={imgagemEscolhida7} className="imagem-minha"></img>
                </article>
            </main>
            
            <div className="About-main">
            <div>    
                     <img src={imgagemEscolhida7} className="img-about" id="minhaSecao"></img>            
            </div>

            <article>
                <h2><u>Sobre</u></h2>
                <h3>Brasília - DF</h3>
                <p>Olá, meu nome é Phillipe Diniz Cardoso. Atualmente, estou cursando análise e desenvolvimento de sistemas na Universidade IESB. 
                    No meu tempo livre dedico-me aos estudos de <span className="bold-sobre">JavaScript, ReactJS, NodeJS e MongoDB. </span> 
                    Estudo criando projetos e atráves de documentações, pois sou um amante de tecnologia e busco aprimorar meus conhecimentos nessa área.</p>
                    <button  className="buton-about" onClick={handleDownload}> <FaCloudDownloadAlt /> Currículo</button>
            </article>
            </div>

            <div className="Main-projetos">
                <h1 id="meusProjetos">Projetos</h1> <br/>
                <h3>Projetos que eu desenvolvir durante esse ano que estou estudando 
                    programação, ainda estou na busca de desenvolver vários outros para
                    aprimorar meus conhecimentos tanto em Front-and quanto em Back-And.
                </h3>
                    <br/>
               <div className="ProjetosOnline">
                    <div className="elementor-filho">
                            <img src={foto2}></img>
                        <div className="info-projetos">
                            <p>Este projeto busca criar uma pagina de Login/Registro para implementar em um site 
                                que deseja ter esse mecanismo. <br/> <span>REACTJS, NODEJS, MONGODB</span></p> 
                            <div className="imagensprojetos">
                                <img src={imgagemEscolhida6} alt="REACTJS"></img>
                                <img src={imgagemEscolhida5} alt="NODEJS"></img>
                                <img src={imgagemEscolhida4} alt="MONGODB"></img>
                            </div>                                   
                            <button type="submit"><a href="https://calculadoracelular.netlify.app" target="_blank">Deploy</a></button>
                            <button type="submit"><a href="https://github.com/PhillipeDiniz19/Calculadora-Iphone" target="_blank">Portfólio</a></button>
                        </div> 
                    </div>

                    <div className="elementor-filho">
                            <img src={foto1}></img>
                        <div className="info-projetos">
                            <p>Este projeto busca mostrar todos meus conhecimentos em front-and aplicando
                                em uma leading page demostrando minha habilidades e meus projetos na área. <br/>
                                <span>REACTJS, CSS3</span>
                            </p>
                            <div className="imagensprojetos">
                                <img src={imgagemEscolhida6} alt="reactjs"></img>
                            </div>
                            <button type="submit"><a href="https://calculadoracelular.netlify.app" target="_blank">Deploy</a></button>
                            <button type="submit"><a href="https://github.com/PhillipeDiniz19/Calculadora-Iphone" target="_blank">Portfólio</a></button>
                        </div> 
                    </div>

                    <div className="elementor-filho">
                            <img src={calculadora}></img>
                        <div className="info-projetos">
                            <p>Como um dos meus primeiros projetos na programação busquei desenvolver uma calculadora igual a do iphone.
                                 <br/>
                                <span>HTML5, CSS3, JAVASCRIPT</span>
                            </p>
                            <div className="imagensprojetos">
                                <img src={imgagemEscolhida2} alt="HTML5"></img>
                                <img src={imgagemEscolhida1} alt="CSS3"></img>
                                <img src={imgagemEscolhida3} alt="JAVASCRIPT"></img>
                            </div>
                            <button type="submit"><a href="https://calculadoracelular.netlify.app" target="_blank">Deploy</a></button>
                            <button type="submit"><a href="https://github.com/PhillipeDiniz19/Calculadora-Iphone" target="_blank">Portfólio</a></button>
                        </div> 
                    </div>
               </div> 
            </div>
            
    </div>   
    )
};

export default Home 
