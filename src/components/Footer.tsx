/* eslint-disable @typescript-eslint/no-explicit-any */


import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pt-20 text-white bg-[#212121]">
      <div className="containers grid grid-cols-1 gap-8 mx-auto md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl font-bold">Contato</h3>
          <p>+244 123 456 789</p>
          <p>+244 987 654 321</p>
          <p>info@universidadeangolana.ao</p>
          <p>São Martinho de Lima</p>
          <p>Rua Exemplo, 123</p>
          <p>Luanda, Angola</p>
          <br />
          <div className="flex gap-3">
            <FaFacebook className="my-auto" />
            <FaLinkedin className="my-auto" />
            <FaXTwitter className="my-auto" />
            <FaTiktok className="my-auto" />
            <FaInstagram className="my-auto" />
            <FaYoutube className="my-auto" />
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Links Úteis</h3>
          <ul>
            <li><a href="/my-portal" className="hover:underline">Meu Portal ISPML</a></li>
            <li><a href="/moodle" className="hover:underline">Moodle LMS</a></li>
            <li><a href="/vacancies" className="hover:underline">Vagas</a></li>
            <li><a href="/student-webmail" className="hover:underline">Webmail do Estudante</a></li>
            <li><a href="/intranet" className="hover:underline">Intranet ISPML</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Pesquisa e Inovação</h3>
          <ul>
            <li><a href="/research-services" className="hover:underline">Serviços de Pesquisa</a></li>
            <li><a href="/journals" className="hover:underline">Jornais ISPML</a></li>
            <li><a href="/repository" className="hover:underline">Repositório ISPML</a></li>
            <li><a href="/press" className="hover:underline">Imprensa ISPML</a></li>
            <li><a href="/grants" className="hover:underline">Aplicação de Subsídios</a></li>
            <li><a href="/calendar" className="hover:underline">Calendário ISPML</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Calendário ISPML</h3>

          <button className="w-full py-3 text-sm transition-all bg-primary hover:bg-primary-dark">
            Ver Calendário
          </button>
        </div>
      </div>
      <div className="py-4 mt-20 text-start bg-primary">
        <div className="containers text-sm">

          <p>&copy; 2024 São Martinho de Lima. Todos os direitos reservados.</p>

        </div>
      </div>
    </footer>
  );
}
