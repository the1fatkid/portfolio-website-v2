import { useState, useEffect } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const hideNavLinks = ()=> {
      if(window.innerWidth >= 992){
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', hideNavLinks);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', hideNavLinks);
    };
  }, []);

  function handleHamburgerClick() {
    setIsOpen(!isOpen);
  }

  function handleLinkClick(){
    setIsOpen(false);
  }

  return (
    <header 
      className={`header ${isScrolled ? "scrolled" : ""} ${isOpen? "open" : ""}`}
  
    >
      <div className="container">
        <div className="nav-left">
          <h1 
            className="logo"
            style={{
              paddingBottom: isOpen? "10px" : "0px",
              borderBottom:  isOpen? "1px solid black" : "none"
            }}
          >
            shivika<span>.tech</span>
          </h1>
          <span className="hamburger-icon" onClick={handleHamburgerClick}>
            {isOpen? <RxCross1 /> : <GiHamburgerMenu />}
          </span>
        </div>

        <nav 
          className={`nav-list ${isOpen? "open" : ""}`} 
        >
          <ul>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}
