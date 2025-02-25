/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import AboutDetail from './aboute-details-page';

export const metadata = generateMetadata({
    title: 'Sobre esta área na nossa instituição | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    return [
        { key: 'apresentacao-institucional' },
        { key: 'infraestruturas' },
        { key: 'convenios-e-protocolos' },
        { key: 'organigrama' },
        { key: 'codigo-de-conduta-e-etica' },
        { key: 'acao-social' },
        { key: 'mensagem-de-direcao' },
        { key: 'legislacao' }
    ];
}

export default async function Page({ params }: any) {
    const key = params.key; // Ainda é válido, problema era a prop reservada "key"
    return <AboutDetail selectedKey={key} />; // "selectedKey" no lugar de "key"
}
