import { images } from '@/assets';
import { Event } from '../interfaces/events.interface';

export const events: Event[] = [
  {
    id: '1',
    title: 'CONFERÊNCIA: O FUTURO DA MOBILIDADE E A ELETRIFICAÇÃO DO TRANSPORTE',
    description: 'Junte-se a esta conferência! Descubra como a eletrificação e a descarbonização estão transformando o futuro da mobilidade.',
    longDescription: 'Nesta conferência, especialistas do setor discutirão as últimas tendências e inovações na eletrificação do transporte. Você aprenderá sobre os desafios e oportunidades que a eletrificação traz para a mobilidade urbana e rural, e como as políticas públicas estão moldando o futuro do transporte sustentável.',
    date: new Date(), 
    category: 'Setor Público',
    imageUrl: images.departImages.ciencias_sociais.src,
    isFeatured: true,
    slug: 'conferencia-futuro-mobilidade-eletrificacao-transporte',
    place: 'Auditório Principal', // nova propriedade
  },
  {
    id: '2',
    title: 'CONFERÊNCIA: DESAFIOS DAS VENDAS EM CONTEXTOS DINÂMICOS',
    description: '',
    longDescription: 'Esta conferência abordará os principais desafios enfrentados pelos profissionais de vendas em um mercado em constante mudança. Serão discutidas estratégias para adaptar-se rapidamente às novas demandas dos consumidores e às mudanças tecnológicas que impactam o setor de vendas.',
    date: new Date(), 
    category: '',
    imageUrl: images.departImages.studying_group.src,
    isFeatured: false,
    slug: 'conferencia-desafios-vendas-contextos-dinamicos',
    place: 'Sala de Conferências 2', // nova propriedade
  },
  {
    id: '3',
    title: 'VIAGENS A TERRAS INIMAGINÁVEIS: A CONVIVÊNCIA COM OS TRANSTORNOS NEUROCOGNITIVOS',
    description: '',
    longDescription: 'Nesta palestra, especialistas em neurociência discutirão os desafios e as estratégias para conviver com transtornos neurocognitivos. Serão apresentados estudos de caso e abordagens terapêuticas inovadoras para melhorar a qualidade de vida dos pacientes.',
    date: new Date(), 
    category: '',
    imageUrl: images.departImages.studying_group_2.src,
    isFeatured: false,
    slug: 'viagens-terras-inimaginaveis-convivencia-transtornos-neurocognitivos',
    place: 'Sala de Conferências 3', // nova propriedade
  },
  {
    id: '4',
    title: 'CONFERÊNCIA SUCESSO SEM MEDOS: VENCENDO A SÍNDROME DO IMPOSTOR',
    description: '',
    longDescription: 'Esta conferência é dedicada a ajudar profissionais a superar a síndrome do impostor e alcançar o sucesso sem medos. Serão discutidas técnicas de autoconfiança e estratégias para lidar com a auto-sabotagem e o medo do fracasso.',
    date: new Date(), 
    category: '',
    imageUrl: images.departImages.geoscience.src,
    isFeatured: false,
    slug: 'conferencia-sucesso-sem-medos-vencendo-sindrome-impostor',
    place: 'Auditório Secundário',
  },
];
