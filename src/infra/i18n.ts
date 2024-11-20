import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pt from './locales/pt.json';

// Função para obter o idioma do localStorage
const getLanguageFromStorage = () => {
    if (typeof window !== 'undefined') {
        const storedLang = localStorage.getItem('lang');
        if (storedLang) {
            return storedLang;
        }
    }
    return 'pt'; // Padrão para português
};

// Função para inicializar i18n com o idioma do storage
const initializeI18n = () => {
    const storedLang = getLanguageFromStorage(); // Recupera o idioma do storage
    i18n
        .use(initReactI18next)
        .init({
            resources: {
                en: { translation: en },
                pt: { translation: pt },
            },
            lng: storedLang, // Definir língua inicial
            fallbackLng: 'pt', // Idioma padrão caso não encontre a tradução
            interpolation: {
                escapeValue: false, // React já escapa valores por padrão
            },
        });
};

// Inicializar i18n ao carregar a página
if (typeof window !== 'undefined') {
    initializeI18n(); // Inicializa o i18n com o idioma do localStorage
}

// Atualizar idioma dinamicamente após o carregamento inicial
if (typeof window !== 'undefined') {
    const storedLang = getLanguageFromStorage();
    if (i18n.language !== storedLang) {
        i18n.changeLanguage(storedLang); // Atualiza a linguagem dinamicamente
    }
}

export default i18n;
