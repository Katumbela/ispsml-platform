'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import i18n from '@/infra/i18n';

type LanguageContextType = {
	lang: string;
	setLang: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
	lang: 'pt',
	setLang: () => {} // Função padrão vazia
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
	const [ lang, setLang ] = useState<string>('pt');

	useEffect(() => {
		// Função para obter idioma do localStorage
		const getStoredLang = () => {
			if (typeof window !== 'undefined') {
				const storedLang = localStorage.getItem('lang'); // Busca o valor no localStorage
				return storedLang || 'pt'; // Retorna o idioma armazenado ou 'pt' como padrão
			}
			return 'pt';
		};

		const storedLang = getStoredLang(); // Obter idioma do localStorage
		setLang(storedLang); // Atualizar estado
		i18n.changeLanguage(storedLang); // Atualizar idioma no i18n
	}, []);

	const changeLang = (newLang: string) => {
		setLang(newLang); // Atualizar estado
		i18n.changeLanguage(newLang); // Atualizar idioma no i18n

		// Atualizar idioma no localStorage
		if (typeof window !== 'undefined') {
			localStorage.setItem('lang', newLang); // Armazena o idioma no localStorage
		}
	};

	return <LanguageContext.Provider value={{ lang, setLang: changeLang }}>{children}</LanguageContext.Provider>;
};

// Hook customizado para acessar o contexto de idioma
export const useLanguage = () => useContext(LanguageContext);
