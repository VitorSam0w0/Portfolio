import Image from "next/image";
import Link from "next/link";
import Logo from "./img/logo.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-18">
        <ul className="flex item-center">
          <li className="w-20 h-20 mx-11"><Image src={Logo} alt="Imagem logo"></Image></li>
          <li className="mx-11 aligh-middle"><Link href="/Projetos">+Projetos</Link></li> 
          <li className="mx-11 aligh-middle"><Link href="/Email">E-mail</Link></li>
        </ul>
      </div>
    </main>
  );
}
