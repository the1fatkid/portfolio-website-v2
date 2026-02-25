import { useState } from "react"
import profilePicture from '../assets/1.png'
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

export default function About() {

  const [isHovered, setIsHovered] = useState(false);

  // For glowing dots
  const tiles = Array.from({ length: 1000 }, (_, i) => i);

  return (
    <section id="about" className="about">

      {/* Dot grid */}
      <div className="card">
        <div className="card__img">
          <div className="card__grid-effect">
            {tiles.map((tile) => (
              <a
                key={tile}
                className="card__grid-effect-tile"
                href="#"
                onClick={(e) => e.preventDefault()}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="left-col">
          <p className="greeting">Hello, I'm Shivika <span>👋</span></p>
          <h2 className="title">I am a Frontend Developer</h2>
          <p className="bio">I create beautiful, responsive web experiences with React and modern CSS.
            Passionate about clean code and intuitive design, I love turning ideas
            into interactive digital solutions.</p>
          <ul className="tech-logos">
            <li style={{ color: "#61DBFB" }}><FaReact /></li>
            <li style={{ color: "#F0DB4F" }}><IoLogoJavascript /></li>
            <li style={{ color: "#3178C6" }}><SiTypescript /></li>
            <li style={{ color: "#F06529" }}><FaHtml5 /></li>
            <li style={{ color: "#3178C6" }}><FaCss3Alt /></li>
            <li style={{ color: "#3C873A" }}><FaNodeJs /></li>
          </ul>
          <a 
            className="download-btn" 
            href="/cv.pdf" 
            download="Shivika_CV.pdf"
          >
            Download CV
          </a>
        </div>

        <div className="right-col">

          <div
            className="profile-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={profilePicture} alt="Profile" className="profile-image" />

            {/* {isHovered && (
              <div className="halo-container">
                <div className="halo"></div>
              </div>
            )} */}
          </div>
        </div>
      </div>

    </section>
  )
}