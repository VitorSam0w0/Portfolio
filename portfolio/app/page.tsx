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
          <ul className="flex justify-right">
            <li>
              <Link className="px-11" href="/Projetos">+Projetos</Link>
            </li>
            <li className="transform hover:scale-110 transition-transform easy-in-out ">
              <Link className="px-11 rounded-full border-gray-950 border-2 hover:bg-black hover:text-white " href="/Email">Email</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

