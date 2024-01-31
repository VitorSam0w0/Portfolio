import Image from "next/image";
import Link from "next/link";
import Logo from "./img/logo.png"

export default function Home() {
  return (
    <main className="flex items-center justify-between p-24">
      <div className="flex items-center">
        <div>
          <Image className="w-20 h-20" src={Logo} alt="Imagem logo"></Image>
        </div>
        <div className="text-end">
          <Link className="px-11" href="/Projetos">+Projetos</Link>
          <Link className="px-11 rounded-full border-gray-950 " href="/Email"></Link>
        </div>
      </div>
    </main>
  );
}

