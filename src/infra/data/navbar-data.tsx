import { images } from "@/assets";
import type { ReactNode } from "react";

type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[] | ReactNode;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Sobre', href: '/about' },
  {
    label: 'Acadêmico',
    href: '#',
    children: [
      { label: 'Cursos', href: '/courses' },
      { label: 'Biblioteca', href: '/library' },
      { label: 'Horários', href: '/schedules' },
      { label: 'Calendário', href: '/calendar' },
    ]
  },
  {
    label: 'Campus',
    href: '#',
    children: [
      { label: 'Mapa', href: '/map' },
      { label: 'Acomodações', href: '/accommodations' },
      { label: 'Refeitório', href: '/cafeteria' },
      { label: 'Estacionamento', href: '/parking' },
      { label: 'Segurança', href: '/security' },
      { label: 'Eventos', href: '/events' },
    ]
  },
  {
    label: 'Estudantes',
    href: '#',
    children: [
      { label: 'Portal do Estudante', href: '/student-portal' },
      { label: 'Alumni', href: '/alumni' },
      { label: 'Associações', href: '/associations' },
    ]
  },
  { label: 'Biblioteca', href: '/library' },
  { label: 'Contato', href: '/contact' },
  {
    label: 'Estude no ISPTML',
    href: '#',
    children: (
      <div className="grid grid-cols-3 gap-4 p-4 children-nav">
        <div>
          <h3>Todos os Links de Aplicação</h3>
          <ul>
            <li>Informações de Aplicação (Geral)</li>
            <li>Programas Acadêmicos (Todos)</li>
            <li>Aplicação Online</li>
            <li>Guia de Aplicação Online (Estudantes Retornando)</li>
            <li>Prospectos</li>
            <li>Aplicações Tardias</li>
            <li>Formulários de Aplicação</li>
          </ul>
        </div>
        <div>
          <h3>Estudantes de Graduação</h3>
          <ul>
            <li>Requisitos de Admissão</li>
            <li>Brochura de Programas</li>
            <li>Taxas</li>
            <li>Aplicação Online</li>
            <li>Guia de Aplicação</li>
            <li>Prospectos</li>
          </ul>
        </div>
        <div>
          <h3>Estudantes de Pós-Graduação</h3>
          <ul>
            <li>Requisitos de Admissão</li>
            <li>Brochura de Programas</li>
            <li>Taxas</li>
            <li>Aplicação Online</li>
            <li>Guia de Aplicação</li>
            <li>Prospectos</li>
          </ul>
        </div>
        <div>
          <h3>Estudantes Internacionais</h3>
          <ul>
            <li>Programas Acadêmicos</li>
            <li>Taxas</li>
            <li>Aplicação Online</li>
            <li>Registro Online</li>
            <li>Prospectos</li>
          </ul>
        </div>
        <div>
          <h3>Educação a Distância/Tempo Parcial</h3>
          <ul>
            <li>Requisitos de Admissão</li>
            <li>Programas de Graduação</li>
            <li>Programas de Pós-Graduação</li>
            <li>Aplicação Online</li>
            <li>Registro Online</li>
            <li>e-Learning (Moodle)</li>
            <li>Suporte Online</li>
            <li>Prospectos</li>
          </ul>
        </div>

        <div>
          <h3>Taxas Estudantis</h3>
          <ul>
            <li>Brochura de Taxas</li>
            <li>Pagamento Online</li>
            <li>Formulário de Débito Direto</li>
            <li>Processo de Reembolso</li>
          </ul>
        </div>
        <div>
          <h3>Outros Recursos</h3>
          <ul>
            <li>Cursos de Idiomas</li>
            <li>Guias de Admissão 2024</li>
            <li>Cursos de Preparação 2024</li>
            <li>Escala de Avaliação</li>
            <li>Orientação (1º Anos)</li>
            <li>Galeria de Fotos da Vida Estudantil</li>
          </ul>
        </div>
      </div>
    )
  },
];

export const carouselItems = [
  {
    background: images .teachers.teacher2,
    title: 'Bem-vindo à ISPML',
    description: 'As inscrições estão abertas! Junte-se a nós e transforme o seu futuro.',
    cta: 'Inscreva-se Agora',
    link: '/apply'
  },
  {
    background: images.backgrounds.bg1,
    title: 'Excelência Acadêmica',
    description: 'Oferecemos cursos de alta qualidade para preparar você para o mercado de trabalho.',
    cta: 'Saiba Mais',
    link: '/courses'
  },
  {
    background: images.teachers.teacher1,
    title: 'Pesquisa e Inovação',
    description: 'Participe de projetos inovadores e contribua para o avanço do conhecimento.',
    cta: 'Descubra',
    link: '/research'
  },
  {
    background: images.teachers.teacher3,
    title: 'Vida Universitária',
    description: 'Experimente uma vida universitária vibrante e cheia de atividades.',
    cta: 'Explore',
    link: '/campus-life'
  }
];