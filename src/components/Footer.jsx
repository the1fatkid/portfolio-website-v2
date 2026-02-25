import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <ul className="socials">
                <li><a href="https://github.com/the1fatkid" target="_blank"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/shivika-bahri/" target="_blank"><FaLinkedin /></a></li>
                <li><a href="https://medium.com/@shivikabahri" target="_blank"><FaMedium /></a></li>
                <li><a href="https://x.com/ShivikaInTech"><FaXTwitter /></a></li>
            </ul>
        </div>
    </div>
  )
}
