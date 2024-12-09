import Image from "next/image";
import './header.css';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Header () {
  return (
    <header className={`header-wrapper ${inter.className}`}  style={{ backgroundImage: "url('/api/image?name=background&type=public')" }}>
      <div className="header-container">
        <h2 className="header-heading">
          As melhores cervejas artesanais da sua região!
        </h2> 
        <Image src="/api/image?name=logo&type=public " alt="Logo" className="header-logo" width={240} height={144}></Image>
        <h3 className="header-heading">
          O aplicativo desenvolvido para você ter a melhor experiência cervejeira.
        </h3>
        <div className="header-container-button">
          <button className="header-button">Quero Conhecer a Rota</button>
        </div>
      </div>
      <span className="header-container-glass"
        style={{ backgroundImage: "url('/api/image?name=glass&type=public')" }}
      ></span>
    </header>
  );
}
