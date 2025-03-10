import { generateMetadata } from "@/infra/metadata";
import ClientOrganicUnitPage from "./client-org-page";




export const metadata = generateMetadata({
	title: 'Unidades Orgânicas | ISPSML',
	description: 'Descubra nossas unidades orgânicas diversas e dinâmicas, cada uma dedicada à excelência em educação, pesquisa e serviço comunitário. Junte-se a nós para explorar as oportunidades e recursos únicos disponíveis em nossos departamentos.',
});

export default function OrganicUnitPage() {
	return <ClientOrganicUnitPage />;
}