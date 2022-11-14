import "./home.css";

import { Social } from "../../components/Social";
import {FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Links Links Links</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal no YouTube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal no YouTube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal no YouTube</p>
          </a>
        </section>

        <footer>
          <Social url="https://facebook.com/">
            <FaFacebook size={35} color="#FFF"/>
          </Social>
          <Social url="https://youtube.com/">
            <FaYoutube size={35} color="#FFF"/>
          </Social>
          <Social url="https://instagram.com/">
            <FaInstagram size={35} color="#FFF"/>
          </Social>
        </footer>
      </main>
    </div>
  );
}
