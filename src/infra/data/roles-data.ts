import { images, profiles } from "@/assets"

interface IPhrase {
    title: string
    description: string
}
export interface IRole {
    pic: string
    name: string
    about: string
    cv: string
    role: string
    linkedin?: string
    x?: string
    phrases?: IPhrase[]
    id: string
    team?: string[]
}

export const RolesData: IRole[] = [
    {
        id: "promotor",
        pic: images.teachers.elon_musk.src,
        name: "Elon Musk",
        about: "<p>Elon Musk é um renomado professor com vasta experiência em ensino e pesquisa. Ele possui um doutorado em Educação e tem se dedicado a melhorar a qualidade do ensino em várias instituições.</p><p>Além de suas atividades acadêmicas, João é um palestrante ativo e autor de vários artigos e livros sobre educação.</p><p>Ele também é conhecido por suas inovações tecnológicas e contribuições para a indústria espacial.</p><p>Elon tem sido uma figura central em várias iniciativas educacionais, promovendo o uso de tecnologia avançada para melhorar a aprendizagem. Ele acredita que a educação deve ser acessível a todos e trabalha incansavelmente para quebrar barreiras e criar oportunidades para estudantes de todas as origens. Sua paixão pela educação é evidente em seu trabalho diário, onde ele continua a inspirar e motivar seus alunos a alcançar grandes feitos.</p>",
        role: "Promotor",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        x: "link_para_linkedin",
        phrases: [
            {
                title: "The Little Poney",
                description: "Uma pequena descrição sobre o Little Poney, abordando suas características e importância."
            },
            {
                title: "The Little Poney",
                description: "Uma pequena descrição sobre o Little Poney, abordando suas características e importância."
            }
        ],
        team: ["vice-presidente", "diretor-executivo"]
    },
    {
        id: "vice-presidente",
        pic: images.profiles.profile2.src,
        name: "Maria Silva",
        about: "<p>Maria Silva é a Vice Presidente da instituição, com uma carreira dedicada à administração educacional. Ela possui um mestrado em Administração e tem sido fundamental na implementação de políticas educacionais inovadoras.</p><p>Maria é conhecida por sua liderança e capacidade de gerenciar equipes de forma eficaz.</p><p>Ela também tem experiência em consultoria educacional e desenvolvimento de currículos.</p><p>Maria tem trabalhado em estreita colaboração com várias organizações educacionais para desenvolver programas que atendam às necessidades dos alunos e professores. Sua abordagem centrada no aluno tem resultado em melhorias significativas no desempenho acadêmico e na satisfação dos alunos. Além disso, Maria é uma defensora ativa da educação inclusiva e tem liderado várias iniciativas para garantir que todos os alunos, independentemente de suas habilidades ou origens, tenham acesso a uma educação de qualidade.</p>",
        role: "Vice Presidente",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        team: ["promotor", "diretor-executivo"]
    },
    {
        id: "diretor-executivo",
        pic: images.profiles.profile3.src,
        name: "Carlos Santos",
        about: "<p>Carlos Santos é o Diretor Executivo, responsável por supervisionar todas as operações administrativas da instituição. Ele possui um MBA e uma vasta experiência em gestão de projetos.</p><p>Carlos é um líder estratégico, sempre buscando maneiras de otimizar processos e melhorar a eficiência organizacional.</p><p>Ele também tem um histórico de sucesso em captação de recursos e parcerias institucionais.</p><p>Carlos tem sido um defensor fervoroso da inovação no setor educacional, promovendo o uso de novas tecnologias e metodologias para melhorar a experiência de aprendizagem. Ele acredita que a educação deve evoluir constantemente para atender às demandas do mundo moderno e trabalha para garantir que a instituição esteja na vanguarda dessas mudanças. Sua dedicação à excelência administrativa tem sido fundamental para o crescimento e sucesso contínuo da instituição.</p>",
        role: "Diretor Executivo",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        team: ["promotor", "vice-presidente"]
    },
    {
        id: "chefe-matematica",
        pic: images.profiles.profile4.src,
        name: "Ana Oliveira",
        about: "<p>Ana Oliveira é a Chefe de Departamento de Matemática, com um doutorado na área e uma paixão por ensinar. Ela tem publicado vários artigos em revistas científicas e é uma referência em sua área de atuação.</p><p>Ana é conhecida por sua abordagem inovadora ao ensino da matemática, tornando-a acessível e interessante para todos os alunos.</p><p>Ela também participa de conferências internacionais e colabora com pesquisadores de renome.</p><p>Ana tem desenvolvido vários projetos educacionais que visam tornar a matemática mais envolvente e prática para os alunos. Ela acredita que a matemática é uma ferramenta essencial para a resolução de problemas e trabalha para integrar conceitos matemáticos em situações do mundo real. Sua dedicação ao ensino e à pesquisa tem inspirado muitos alunos a seguir carreiras na área de STEM (Ciência, Tecnologia, Engenharia e Matemática).</p>",
        role: "Chefe de Departamento de Matemática",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin"
    },
    {
        id: "chefe-fisica",
        pic: images.profiles.profile5.src,
        name: "Pedro Fernandes",
        about: "<p>Pedro Fernandes é o Chefe de Departamento de Física, com um doutorado em Física Teórica. Ele tem uma vasta experiência em pesquisa e ensino, e é conhecido por suas contribuições significativas para a comunidade científica.</p><p>Pedro é um educador dedicado, sempre buscando inspirar seus alunos a explorar o mundo da física.</p><p>Ele também lidera projetos de pesquisa financiados por agências governamentais e privadas.</p><p>Pedro tem sido um mentor para muitos jovens cientistas, ajudando-os a desenvolver suas habilidades e a perseguir suas paixões na física. Ele acredita que a curiosidade e a investigação são fundamentais para o avanço do conhecimento e incentiva seus alunos a questionar e explorar o desconhecido. Sua abordagem ao ensino da física é prática e envolvente, utilizando experimentos e demonstrações para tornar os conceitos complexos mais compreensíveis.</p>",
        role: "Chefe de Departamento de Física",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin"
    },
    {
        id: "reitor",
        pic: images.profiles.profile6.src,
        name: "Luisa Rodrigues",
        about: "<p>Luisa Rodrigues é a Reitora da instituição, com um doutorado em Administração Educacional. Ela tem uma carreira distinta em liderança educacional e é conhecida por sua visão estratégica e capacidade de implementar mudanças significativas.</p><p>Luisa é uma defensora apaixonada pela educação de qualidade e trabalha incansavelmente para garantir que todos os alunos tenham acesso a oportunidades educacionais excepcionais.</p><p>Ela também é autora de vários livros sobre políticas educacionais e gestão escolar.</p><p>Luisa tem sido uma líder visionária, promovendo uma cultura de excelência e inovação na instituição. Ela acredita que a educação é a chave para o desenvolvimento pessoal e social e tem trabalhado para criar um ambiente que apoie o crescimento e o sucesso dos alunos. Sua abordagem colaborativa e inclusiva tem sido fundamental para o desenvolvimento de programas e iniciativas que atendem às necessidades de uma comunidade estudantil diversificada.</p>",
        role: "Reitor",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin"
    },
    {
        id: "professor-matematica",
        pic: images.profiles.profile7.src,
        name: "João Almeida",
        about: "<p>João Almeida é um Professor de Matemática com um mestrado na área. Ele é conhecido por sua habilidade em tornar conceitos complexos acessíveis e interessantes para seus alunos.</p><p>João é um educador dedicado, sempre buscando novas maneiras de engajar seus alunos e promover o amor pela matemática.</p><p>Ele também desenvolve materiais didáticos inovadores e participa de programas de formação de professores.</p><p>João tem sido um defensor da aprendizagem ativa, incentivando seus alunos a participar ativamente do processo de aprendizagem através de projetos e atividades práticas. Ele acredita que a matemática deve ser ensinada de uma maneira que seja relevante e aplicável à vida cotidiana dos alunos. Sua paixão pelo ensino e sua abordagem inovadora têm feito dele um professor muito querido e respeitado entre seus alunos e colegas.</p>",
        role: "Professor de Matemática",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        phrases: [{
            title: "Matemática é vida",
            description: "A matemática está em tudo ao nosso redor, desde a natureza até a tecnologia."
        }]
    },
    {
        id: "professora-fisica",
        pic: images.profiles.profile8.src,
        name: "Mariana Costa",
        about: "<p>Mariana Costa é uma Professora de Física com um doutorado na área. Ela tem uma paixão por ensinar e é conhecida por sua habilidade em explicar conceitos complexos de maneira clara e envolvente.</p><p>Mariana é uma pesquisadora ativa, sempre buscando novas maneiras de explorar e entender o universo.</p><p>Ela também colabora com instituições internacionais em projetos de pesquisa avançada.</p><p>Mariana tem sido uma defensora da educação STEM, promovendo a importância da ciência, tecnologia, engenharia e matemática na formação dos alunos. Ela acredita que a física é uma disciplina fundamental que ajuda os alunos a desenvolver habilidades críticas de pensamento e resolução de problemas. Sua abordagem ao ensino é centrada no aluno, utilizando métodos interativos e experimentais para tornar a aprendizagem mais envolvente e eficaz.</p>",
        role: "Professora de Física",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        phrases: [{
            title: "A Física do Universo",
            description: "Explorando os mistérios do cosmos e entendendo as leis fundamentais que governam o universo."
        }]
    },
    {
        id: "professor-quimica",
        pic: images.profiles.profile9.src,
        name: "Ricardo Pereira",
        about: "<p>Ricardo Pereira é um Professor de Química com um doutorado na área. Ele é conhecido por sua abordagem prática ao ensino da química, sempre buscando maneiras de tornar as aulas mais interativas e envolventes.</p><p>Ricardo é um pesquisador dedicado, com várias publicações em revistas científicas renomadas.</p><p>Ele também desenvolve experimentos inovadores para uso em sala de aula e participa de feiras de ciências.</p><p>Ricardo tem sido um defensor da educação prática, acreditando que os alunos aprendem melhor quando estão ativamente envolvidos no processo de aprendizagem. Ele desenvolve experimentos e atividades que permitem aos alunos explorar conceitos químicos de maneira prática e divertida. Sua paixão pela química e seu compromisso com a educação têm feito dele um professor muito respeitado e admirado.</p>",
        role: "Professor de Química",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        phrases: [{
            title: "A Magia da Química",
            description: "Transformações químicas e suas aplicações no dia a dia, mostrando a importância da química na vida cotidiana."
        }]
    },
    {
        id: "president",
        pic: images.teachers.president_photo.src,
        name: "Bill Gates",
        about: "<p>Bill Gates é um Presidente com um doutorado na área. Ele é conhecido por sua abordagem prática ao ensino da química, sempre buscando maneiras de tornar as aulas mais interativas e envolventes.</p><p>Ricardo é um pesquisador dedicado, com várias publicações em revistas científicas renomadas.</p><p>Ele também lidera iniciativas de responsabilidade social e programas de bolsas de estudo.</p><p>Bill tem sido uma figura central na promoção da educação acessível e de qualidade para todos. Ele acredita que a educação é um direito fundamental e trabalha para garantir que todos os alunos tenham as mesmas oportunidades de sucesso. Sua liderança e visão têm sido fundamentais para o desenvolvimento de programas e iniciativas que apoiam a aprendizagem e o crescimento dos alunos. Além disso, Bill é um defensor ativo da responsabilidade social, liderando várias iniciativas que visam melhorar a comunidade e o mundo em geral.</p>",
        role: "Presidente",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        phrases: [
            {
                title: "The Little Poney",
                description: "Uma pequena descrição sobre o Little Poney, abordando suas características e importância."
            },
            {
                title: "The Little Poney",
                description: "Uma pequena descrição sobre o Little Poney, abordando suas características e importância."
            },
            {
                title: "A Magia da Química",
                description: "Transformações químicas e suas aplicações no dia a dia, mostrando a importância da química na vida cotidiana."
            },
        ],
        team: ["promotor", "vice-presidente", "diretor-executivo"]
    },
    {
        id: "diretor-unidade-organica",
        pic: images.profiles.profile1.src,
        name: "Jane Doe",
        about: "<p>Jane Doe é a Diretora da Unidade Orgânica de Ciências Naturais, com um doutorado em Biologia. Ela tem uma vasta experiência em pesquisa e ensino, e é conhecida por suas contribuições significativas para a comunidade científica.</p>",
        role: "Diretora de Unidade Orgânica",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        team: ["professor-biologia", "professor-quimica"]
    },
    {
        id: "professor-biologia",
        pic: images.profiles.profile2.src,
        name: "John Smith",
        about: "<p>John Smith é um Professor de Biologia com um mestrado na área. Ele é conhecido por sua habilidade em tornar conceitos complexos acessíveis e interessantes para seus alunos.</p>",
        role: "Professor de Biologia",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        phrases: [{
            title: "A Vida na Terra",
            description: "Explorando a diversidade da vida e os processos biológicos fundamentais."
        }]
    },
    {

        id: "professor-historia",
        pic: profiles.profile1.src,
        name: "Alice Souza",
        about: "<p>Alice Souza é uma Professora de História com um mestrado na área. Ela é conhecida por sua habilidade em tornar eventos históricos vivos e relevantes para seus alunos.</p>",
        role: "Professora de História",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        phrases: [{
            title: "A História Viva",
            description: "Explorando os eventos que moldaram o mundo moderno."
        }],
      
        team: ["team-member-1", "team-member-2"]
    },
    {
        id: "professor-geografia",
        pic: profiles.profile2.src,
        name: "Fernando Lima",
        about: "<p>Fernando Lima é um Professor de Geografia com um doutorado na área. Ele tem uma paixão por ensinar e é conhecido por sua habilidade em explicar conceitos geográficos de maneira clara e envolvente.</p>",
        role: "Professor de Geografia",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        phrases: [{
            title: "O Mundo em Mapas",
            description: "Entendendo a geografia física e humana do nosso planeta."
        }]
    },
    {
        id: "professora-literatura",
        pic: profiles.profile3.src,
        name: "Beatriz Santos",
        about: "<p>Beatriz Santos é uma Professora de Literatura com um doutorado na área. Ela é conhecida por sua habilidade em tornar a literatura acessível e interessante para seus alunos.</p>",
        role: "Professora de Literatura",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        phrases: [{
            title: "A Magia da Literatura",
            description: "Explorando as grandes obras literárias e seus autores."
        }]
    },
    {
        id: "professor-filosofia",
        pic: profiles.profile4.src,
        name: "Roberto Costa",
        about: "<p>Roberto Costa é um Professor de Filosofia com um mestrado na área. Ele é conhecido por sua habilidade em estimular o pensamento crítico e a reflexão entre seus alunos.</p>",
        role: "Professor de Filosofia",
        cv: "link_para_cv",
        linkedin: "link_para_linkedin",
        phrases: [{
            title: "Pensamento Crítico",
            description: "Explorando as grandes questões filosóficas e suas implicações."
        }]
    }
]