// NEWSLETTER/newsletter/src/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

interface SupabaseKeyword {
    keyword_id: number;
    keywords: {
        keyword: string;
        label_en: string;
        label_es: string;
    }
}

interface Keyword {
    id: number;
    keyword: string;
    label_en: string;
    label_es: string; 
}

interface Entry {
    id: number;
    entry_en: string;
    entry_es: string;
    css_file_name: string;
    keywords?: Keyword[];
}

interface LanguagesImp {
    [key: string]: string;
}

interface LanguageContentImp {
    [key: string] : {
        title: string,
        rights: string,
        subtitle: string
    }
}

const LANGUAGES: LanguagesImp = {'es': 'Español', 'en': 'English'};

const LANGUAGE_CONTENT: LanguageContentImp = {
    en: {
        title: "Exploring Frontiers: Newsletter",
        rights: "by Depicted Candela",
        subtitle: "Dive into topics spanning Computer Science, Spatial Mathematics, GIS, Leadership, and Entrepreneurship:",
    },
    es: {
        title: "Explorando Fronteras: Newsletter",
        rights: "por Depicted Candela",
        subtitle: "Sumérgete en temas que abarcan Ciencias de la Computación, Matemáticas Espaciales, GIS, Liderazgo y Emprendimiento:",
    }
};

const Home: React.FC = () => {
    const [fetchingDateEntries, setFetchingDateEntries] = useState<Date>();
    const [entries, setEntries] = useState<Entry[]>([]);
    const [language, setLanguage] = useState<'en' | 'es'>('en');
    const [isSpanish, setIsSpanish] = useState<boolean>(true);

    useEffect(() => {
        fetch(`https://newsletter-supabase-express.nicalcoca.workers.dev/api/entries`)
            .then(response => response.json())
            .then(data => {
                setEntries(data);
                const currentDateWithSeconds = new Date();
                setFetchingDateEntries(currentDateWithSeconds);
            })
            .catch(error => console.error('Error fetching entries:', error));
    }, [language]);

    useEffect(() => {
        setIsSpanish(language === 'es');
    }, [language]);

    useEffect(() => {
        if (entries.length === 0) return;
        const fetchKeywordsForEntries = async () => {
            const updatedEntries = await Promise.all(entries.map(async (entry) => {
                try {
                    const response = await fetch(`https://newsletter-supabase-express.nicalcoca.workers.dev/api/entries/${entry.id}/keywords`);
                    const keywords = await response.json();
                    return {
                        ...entry,
                        keywords: keywords.map((keyword: SupabaseKeyword) => ({
                            id: keyword.keyword_id,
                            keyword: keyword.keywords.keyword,
                            label_en: keyword.keywords.label_en,
                            label_es: keyword.keywords.label_es,
                        })),
                    };
                } catch (error) {
                    console.error(`Error fetching keywords for ${entry.entry_en}:`, error);
                    return entry;
                }
            }));
            setEntries(updatedEntries);
        };
        fetchKeywordsForEntries();
    }, [entries, fetchingDateEntries]);
    

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
    };

    return (
        <div className={styles.container}>
            
            <div className="text-center mt-4">
                <a 
                    href="https://www.depicted-candela.space" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.portfolioButton}
                >
                    Depicted Candela
                </a>
                <a className={styles.spaecialText} href='https://espaecial.org/'><i><b>ESPÆCIAL</b></i></a>
            </div>

            <button onClick={toggleLanguage} className={styles.languageToggleButton}>
                {LANGUAGES[language]}
            </button>

            <h1 className={styles.title}>{LANGUAGE_CONTENT[language].title}</h1>
            <p className={styles.byline}>{LANGUAGE_CONTENT[language].rights}</p>
            <p className={styles.subtitle}>{LANGUAGE_CONTENT[language].subtitle}</p>
            
            <ul className={styles.entryList}>
                {entries.map(entry => (
                    <li key={entry.id} className={styles.entryItem}>
                        <Link to={`/${entry.id}`} className={styles.entryLink}>
                            {language === 'en' ? entry.entry_en : entry.entry_es}
                            <span style={{display: 'none'}}>{entry.keywords?.map(keyword => `${keyword.keyword} ${ isSpanish ? keyword.label_es : keyword.label_en }`)}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
