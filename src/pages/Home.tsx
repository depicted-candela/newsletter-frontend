// NEWSLETTER/newsletter/src/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

interface Entry {
    id: number;
    entry_en: string;
    entry_es: string;
    css_file_name: string;
}

const Home: React.FC = () => {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [language, setLanguage] = useState<'en' | 'es'>('en');

    useEffect(() => {
        fetch(`https://newsletter-supabase-express.nicalcoca.workers.dev/api/entries`)
            .then(response => response.json())
            .then(data => setEntries(data))
            .catch(error => console.error('Error fetching entries:', error));
    }, [language]);

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
                {language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            </button>

            {language === 'en' ? (
                <>
                    <h1 className={styles.title}>Exploring Frontiers: Newsletter</h1>
                    <p className={styles.byline}>by Depicted Candela</p>
                    <p className={styles.subtitle}>Dive into topics spanning Computer Science, Spatial Mathematics, GIS, Leadership, and Entrepreneurship:</p>
                </>
            ) : (
                <>
                    <h1 className={styles.title}>Explorando Fronteras: Newsletter</h1>
                    <p className={styles.byline}>por Depicted Candela</p>
                    <p className={styles.subtitle}>Sumérgete en temas que abarcan Ciencias de la Computación, Matemáticas Espaciales, GIS, Liderazgo y Emprendimiento:</p>
                </>
            )}
            
            <ul className={styles.entryList}>
                {entries.map(entry => (
                    <li key={entry.id} className={styles.entryItem}>
                        <Link to={`/${entry.id}`} className={styles.entryLink}>
                            {language === 'en' ? entry.entry_en : entry.entry_es}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
