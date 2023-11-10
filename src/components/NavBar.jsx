import React, {useState} from 'react';
import '../navbar.css'

function NavBar() {

    const [active, setActive] = useState("nav_menu")
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
        const navToggle = () => {
            active === "nav_menu" 
            ? setActive('nav_menu nav_active')
            : setActive("nav_menu");

          // TogglerIcon
            toggleIcon === 'nav_toggler' 
            ? setToggleIcon('nav_toggler toggle')
            : setToggleIcon('nav_toggler');
        };

    return(
        <nav className="navbar">
            <a href='#' className='Logo'>
             &#8249;<span>D</span>INIZ&#8260;&#8250;
            </a>
            <ul className={active}>
               <label><li className='nav_item'><a href='#' className='nav_link'>HOME</a></li></label> 
               <label><li className='nav_item'><a href='#' className='nav_link'>SOBRE</a></li></label>  
               <label><li className='nav_item'><a href='#' className='nav_link'>PROJETOS</a></li></label>
               <label><li className='nav_item'><a href='#' className='nav_link'>FORMAÇÃO</a></li></label>
               <label><li className='nav_item'><a href='#' className='nav_link'>CONTATO</a></li></label>
            </ul>

            <div className="icons">
                <label><a href='https://www.youtube.com' target="_blank"><img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo.png" 
                    alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo"/></a></label>  

                <label><a href='https://www.youtube.com' target="_blank"><img width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png" alt="linkedin"/></a></label>               
            </div>
                      
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>  
        </nav>
    )
};

export default NavBar
