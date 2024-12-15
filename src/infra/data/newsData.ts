/* eslint-disable @typescript-eslint/no-explicit-any */
import { images } from '@/assets';

export const newsData = [
    {
        title: "Descoberta Científica Revoluciona a Medicina",
        shortDescription: "Uma nova descoberta promete mudar o tratamento de várias doenças.",
        content: "<p>Pesquisadores do Instituto de Tecnologia de Massachusetts (MIT) descobriram uma nova forma de tratar doenças crônicas. A pesquisa, que levou mais de dez anos para ser concluída, mostra resultados promissores em testes clínicos. A nova técnica utiliza nanotecnologia para entregar medicamentos diretamente às células afetadas, aumentando a eficácia do tratamento e reduzindo os efeitos colaterais.</p></br></br><p>O estudo foi publicado na revista Science e já está sendo considerado um marco na medicina moderna. Os pesquisadores esperam que a nova técnica esteja disponível para o público em geral nos próximos cinco anos.</p>",
        postDate: "2023-09-15",
        poster: "Dr. João Silva",
        link: "#",
        slug: "descoberta-cientifica-revoluciona-a-medicina",
        image: images.bgPplImages.bg_ppl22.src,
    },
    {
        title: "Tecnologia 5G Chega em Angola",
        shortDescription: "A nova tecnologia promete revolucionar a comunicação no país.",
        content: "<p>A tecnologia 5G finalmente chegou em Angola, trazendo consigo uma série de melhorias na comunicação e na conectividade. </br></br> Com velocidades até 100 vezes maiores que o 4G, o 5G permitirá o desenvolvimento de novas aplicações em áreas como saúde, educação e transporte. Além disso, a nova tecnologia promete reduzir a latência, tornando a comunicação quase instantânea.</p></br></br><p>As operadoras de telefonia já começaram a implementar a tecnologia nas principais cidades do país. A expectativa é que, até o final de 2024, a cobertura 5G esteja disponível em todo o território nacional.</p>",
        postDate: "2023-10-01",
        poster: "Maria Oliveira",
        link: "#",
        slug: "tecnologia-5g-chega-em-angola",
        sponsor: true,
        image: images.bgPplImages.bg_ppl37.src,
    },
    {
        title: "Mudanças Climáticas: O Que Esperar para o Futuro",
        shortDescription: "Especialistas discutem os impactos das mudanças climáticas no planeta.",
        content: "<p>As mudanças climáticas são uma realidade e seus impactos já podem ser sentidos em várias partes do mundo. De acordo com especialistas, se nada for feito para reduzir as emissões de gases de efeito estufa, o planeta enfrentará consequências severas, como aumento do nível do mar, eventos climáticos extremos e perda de biodiversidade.</p><p>Governos e organizações ao redor do mundo estão se mobilizando para combater as mudanças climáticas. A implementação de políticas sustentáveis e o investimento em energias renováveis são algumas das medidas que estão sendo adotadas para mitigar os efeitos das mudanças climáticas.</p>",
        postDate: "2023-08-20",
        poster: "Ana Costa",
        link: "#",
        slug: "mudancas-climaticas-o-que-esperar-para-o-futuro",
        image: images.bgPplImages.bg_pplIMG_2217.src,
    },
    {
        title: "Descoberta Científica Revoluciona a Medicina",
        shortDescription: "Uma nova descoberta promete mudar o tratamento de várias doenças.",
        content: "<p>Pesquisadores do Instituto de Tecnologia de Massachusetts (MIT) descobriram uma nova forma de tratar doenças crônicas.</br></br> A pesquisa, que levou mais de dez anos para ser concluída, mostra resultados promissores em testes clínicos. A nova técnica utiliza nanotecnologia para entregar medicamentos diretamente às células afetadas, aumentando a eficácia do tratamento e reduzindo os efeitos colaterais.</p><p>O estudo foi publicado na revista Science e já está sendo considerado um marco na medicina moderna. Os pesquisadores esperam que a nova técnica esteja disponível para o público em geral nos próximos cinco anos.</p>",
        postDate: "2023-09-15",
        poster: "Dr. João Silva",
        link: "#",
        slug: "descoberta-cientifica-revoluciona-a-medicina",
        image: images.bgPplImages.bg_pplIMG_2218.src,
    },
    {
        title: "Tecnologia 5G Chega em Angola",
        shortDescription: "A nova tecnologia promete revolucionar a comunicação no país.",
        content: "<p>A tecnologia 5G finalmente chegou em Angola, trazendo consigo uma série de melhorias na comunicação e na conectividade.</br></br> Com velocidades até 100 vezes maiores que o 4G, o 5G permitirá o desenvolvimento de novas aplicações em áreas como saúde, educação e transporte. Além disso, a nova tecnologia promete reduzir a latência, tornando a comunicação quase instantânea.</p><p>As operadoras de telefonia já começaram a implementar a tecnologia nas principais cidades do país. A expectativa é que, até o final de 2024, a cobertura 5G esteja disponível em todo o território nacional.</p>",
        postDate: "2023-10-01",
        poster: "Maria Oliveira",
        link: "#",
        slug: "tecnologia-5g-chega-em-angola",
        image: images.bgPplImages.bg_ppl48.src,
    },
    {
        title: "Mudanças Climáticas: O Que Esperar para o Futuro",
        shortDescription: "Especialistas discutem os impactos das mudanças climáticas no planeta.",
        content: "<p>As mudanças climáticas são uma realidade e seus impactos já podem ser sentidos em várias partes do mundo. De acordo com especialistas, se nada for feito para reduzir as emissões de gases de efeito estufa, o planeta enfrentará consequências severas, como aumento do nível do mar, eventos climáticos extremos e perda de biodiversidade.</p><p>Governos e organizações ao redor do mundo estão se mobilizando para combater as mudanças climáticas. A implementação de políticas sustentáveis e o investimento em energias renováveis são algumas das medidas que estão sendo adotadas para mitigar os efeitos das mudanças climáticas.</p>",
        postDate: "2023-08-20",
        poster: "Ana Costa",
        link: "#",
        slug: "mudancas-climaticas-o-que-esperar-para-o-futuro",
        image: images.bgPplImages.bg_ppl34.src,
    },
];

export function getNewsBySlug(slug: any) {
    return newsData.find(news => news.slug === slug);
}