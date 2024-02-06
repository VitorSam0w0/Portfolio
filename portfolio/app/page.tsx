import NavBar from "@/pages/NavBar";
import Image from "next/image";
import Logo2 from '../img/Logo2.png'
import Linkedin from '../img/Linkedin.jpg'
import GitHub from '../img/GitHub.png'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-mono bg-gray-100">
      <NavBar />
      <main className="m-20 p-20 max-w-screen-md mx-auto">
        <div className="text-base text-center items-center justify-center md:text-4xl flex">
          <h1>Vitor Dias Frontend Developer</h1>
        </div>
        <div className="flex justify-center items-center">
          <Image className="w-150 h-150 md:w-200 md:h-200" src={Logo2} alt="Logo2"></Image>
        </div>
        <div className="flex justify-center flex flex-col md:flex-row">
          <div><a href="https://www.linkedin.com/in/vitor-dias-314566244/" target="_blank"><Image className="ease-in-out duration-300 hover:scale-110 m-6 w-full rounded-lg w-48 h-16 md:w-48 md:h-16" src={Linkedin} alt="Linkedin"></Image></a></div>
          <div><a href="https://github.com/VitorSam0w0" target="_blank"><Image className="ease-in-out duration-300 hover:scale-110 m-6 w-full rounded-lg w-48 h-16 md:w-48 md:h-16" src={GitHub} alt="GitHub"></Image></a></div>
        </div>
        <div className="rounded-lg bg-gray-200">
          <div>
            <h1 className="text-xl md:text-2xl text-center rounded-t-lg bg-gray-300">Bem-vindo ao meu Mundo do Desenvolvimento!</h1>
          </div>
          <div>
            <p className="text-center md:text-xl">
            Olá, sou Vitor, um entusiasta de tecnologia e desenvolvedor web apaixonado por criar experiências digitais incríveis. Atualmente, estou focado em aprimorar minhas habilidades com tecnologias modernas, com ênfase especial em Next.js, Tailwind CSS, TypeScript e React.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Portfolio de Vitor Dias
      </footer>
    </div>
  );
}

export default Home;
