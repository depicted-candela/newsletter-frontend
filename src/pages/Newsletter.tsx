// src/pages/Newsletter.tsx

import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import defaultStyles from '../styles/default.module.css';

type Styles = {
    [className: string]: string;
};

// Lazy load the entry component based on the ID
const loadComponent = (id: string) => {
    return lazy(() => import(`../entries/${id}.tsx`));
};

const Newsletter: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [cssFileName, setCssFileName] = useState<string | null>(null);
    const [language, setLanguage] = useState('en');
    const [styles, setStyles] = useState<Styles | null>(null);
    const [globalStyles, setGlobalStyles] = useState<Styles | null>(null);
    const [keywords, setKeywords] = useState<string[]>([]);

    const EntryComponent = id ? loadComponent(id) : null;

    useEffect(() => {
        if (!id) return;
        fetch(`https://newsletter-supabase-express.nicalcoca.workers.dev/api/entries/${id}/css/`)
            .then(response => response.json())
            .then(data => {
                setCssFileName(data.layout.css_file_name);
            })
            .catch(error => console.error('Error fetching the entry:', error));
    }, [id]);

    useEffect(() => {
        if (!cssFileName) return;
        import(`../styles/${cssFileName}.module.css`)
            .then((module) => {
                setStyles(module.default);
            })
            .catch(error => console.error('Error loading the module styles:', error));
        import(`../styles/${cssFileName}.global.css`)
            .then((global) => {
                setGlobalStyles(global.default);
            })
            .catch(error => console.error('Error loading the global styles:', error));
    }, [cssFileName])

    useEffect(() => {
        if (globalStyles && styles) {
            fetch(`https://newsletter-supabase-express.nicalcoca.workers.dev/api/entries/${id}/keywords/`)
                .then(response => response.json())
                .then(data => {
                    setKeywords(data.map((item: any) => item.keywords.keyword));
                })
                .catch(error => console.error('Error fetching the entry keywords:', error));
        }
    }, [globalStyles, styles, id]);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
    };
    console.log(!styles, !EntryComponent, !globalStyles);

    if (!styles || !EntryComponent || !globalStyles) return <div>Loading...</div>;

    return (
        <div className={`${defaultStyles['total-container']} container`}>
            <div className={`${defaultStyles['header-container']} text-center mb-4`}>
                <div className={defaultStyles['header-content']}>
                    <a className="nav-link" href="/">
                        <b className={defaultStyles['back-arrow']}>←</b>
                    </a>
                    {language === 'en' ? (
                        <h1 className={defaultStyles['header-title']}>Newsletter</h1>
                    ) : (
                        <h1 className={defaultStyles['header-title']}>Noticias</h1>
                    )}
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="form-select"
                        aria-label="Language Select"
                    >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                    </select>
                </div>
                <div className={`${styles['container']} ${defaultStyles['logos-content']} row mt-3`}>
                    {keywords.map((keyword, index) => (
                        <img
                            key={index}
                            src={`/${keyword}.png`}
                            alt={keyword}
                            className="me-2"
                            style={{ height: '2rem', width: 'auto' }}
                        />
                    ))}
                </div>
            </div>
    
            {cssFileName && styles && (
                <>
                    <Suspense fallback={<div>Loading component...</div>}>
                        <EntryComponent styles={styles} globalStyles={globalStyles} language={language} />
                    </Suspense>
                    <div>
                        <a href="/" className={styles.btnPrimary}>Regresar al Boletín</a>
                    </div>
                </>
            )}
    
            <Footer />
        </div>
    );
    
};

export default Newsletter;
