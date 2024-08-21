import Image from 'next/image';
import Pagina from './components/template/Pagina';
import { IconTarget } from '@tabler/icons-react';

// cabeçalho
const Header = () => (
<header className="bg-purple-950 rounded-lg text-white p-4">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-3xl font-bold rounded-lg bg-gray-900 p-4">
      Apresentação Back End integrada no framework
    </h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">Sobre</a></li>
          <li><a href="#contact" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

// rodapé
const Footer = () => (
  <footer className="bg-purple-800 rounded-lg text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <Pagina>
      <Header />
      <main className="container mx-auto p-4">
        <section id="home" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Meu Site De apresentação Full-Stack</h2>
          <p className="text-lg mb-4">
            Este é um exemplo de página com uma estrutura full stack para cadastro e controle de usuarios, focando em comprovar experiencias de front e Back end 
            e mostrar compêtencias com estrutura de algoritimos responsável por gerenciar dados de API, Banco de dados, Aplicações Dev & DevSec-Ops.
          </p>
          <Image
             src="/full.png" 
            alt="Imagem de exemplo"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          
        </section>
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Qual importancia do projeto? o que quero mostrar ? </h2>
          <p className="text-lg">
            Sou um profissional de segurança e tecnologia da informação, desenvolvi esse site para apresentar um projeto front e back end(Full Stack),
            com uma dinamica prestativa e competente para uma aplicação real com utilidades importantes usando as seguintes tecnologias: 
            ---> Next.js - Prisma - Node.js - SQLite - TaiwindCSS .
          </p>
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Mais Sobre Mim</h2>
          <p className="text-lg"/>
          <a href='https://www.linkedin.com/in/henrique-oliveira-117574257/' target='blank' className='bg-purple-950'>Linkedin</a>
          <hr className='bg-purple-950'></hr>
          <a href='https://github.com/HenrikOliveira' target='blank'>Github</a>
          <hr className='bg-purple-950'></hr >
          <a href='https://66bea0e34e548978168cee39--dancing-sunshine-c6d6ab.netlify.app/' target='blank' className='bg-purple-950' >Sec Skill & Works</a>
        </section>
      </main>
      <Footer />
    </Pagina>
  );
}
