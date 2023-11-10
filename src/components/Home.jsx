import React from "react";
import '../home.css'
import '../globalcss.css'
import imgagemEscolhida1 from '../img/css.png'
import imgagemEscolhida2 from '../img/htmlç.png'
import imgagemEscolhida3 from '../img/javascript.png'
import imgagemEscolhida4 from '../img/mongodb.png'
import imgagemEscolhida5 from '../img/nodejs.png'
import imgagemEscolhida6 from '../img/react.png'
import imgagemEscolhida7 from '../img/77d0a7c454e658833800528e748edbe9.png'


function Home(){
    return(
        <div>
            <main className="editado">
                <aside>
                    <h2><span>I'm</span> Phillipe Diniz <br/> Cardoso</h2>
                    <h3>Desenvolvedor Front-And</h3>
                    <ul className="lista-imagens">
                        <li><img src={imgagemEscolhida2} alt="HTML5"></img></li>
                        <li><img src={imgagemEscolhida1} alt="CSS3"></img></li>
                        <li><img src={imgagemEscolhida3} alt="JAVASCRIPT"></img></li>
                        <li><img src={imgagemEscolhida6} alt="REACTJS"></img></li>
                        <li><img src={imgagemEscolhida5} alt="NODEJS"></img></li>
                        <li><img src={imgagemEscolhida4} alt="MONGODB"></img></li>
                    </ul> 
                    <input type="submit" value="READ MORE" className="botao"/>
                </aside>

                <article>
                     <img src={imgagemEscolhida7} className="imagem-minha"></img>
                </article>
            </main>
        </div>
    )
};

export default Home