import Image from "next/image"
import Link from "next/link"
import Logo from "../img/logo.png"
import "../app/globals.css"

const NavBar = () => {
  return (
    <div className="flex flex-col bg-gray-100 font-mono ">
      <nav className="bg-gray-600 p-4 text-white text-center rounded-b-2xl fixed w-full z-10 ">
        <div className="flex flex-col justify-between sm:flex-row justify-between items-center">
          <div>
            <Image className="hover:animate-spin w-16 h-16 md:w-20 md:h-20" src={Logo} alt="Imagem logo" />
          </div>
          <div className="flex space-x-4 pt-3 pb-3 min-[320px]:text-center">
           <ul className="flex items-center pl-7 pr-7 text-lg">
             <li className="pl-5 pr-5 rounded-md hover:transition duration-700 ease-in-out hover:rounded-2xl hover:border hover:border-white">
               <Link href="/" legacyBehavior><a className="hover:transition duration-700 ease-in-out hover:text-gray-300">Inicio</a></Link>
             </li>
              <li className="pl-5 pr-5 rounded-2xl hover:transition duration-700 ease-in-out hover:rounded-2xl hover:border hover:border-white">
                <Link href="/Projetos" legacyBehavior><a className="hover:transition duration-700 ease-in-out hover:text-gray-300">+Projetos</a></Link>
              </li>
           </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar
