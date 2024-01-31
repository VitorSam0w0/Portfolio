import Image from "next/image";
import Link from "next/link";
import Logo from "./img/logo.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-18">
        <ul>
          <li><Image className="" src={Logo} alt="Imagem logo"></Image></li>
          <li><Link href="/Projetos">+Projetos</Link></li>git 
          <li><Link href="/Email">E-mail</Link></li>
        </ul>
      </div>
    </main>
  );
}
