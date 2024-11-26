 
import Link from 'next/link';

export default function Custom404() {
	return (
		<div style={{ textAlign: 'center', padding: '50px' }}>
			<h1>404 - Página Não Encontrada</h1>
			<p>Desculpe, a página que você está procurando não existe.</p>
			<Link href="/">
				<a style={{ color: 'blue', textDecoration: 'underline' }}>Voltar para a página inicial</a>
			</Link>
		</div>
	);
}
