// NEWSLETTER/newsletter/src/router.tsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Newsletter from './pages/Newsletter';

const AppRouter: React.FC = () => {
    useEffect(() => {
        document.title = 'Newsletter';
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Newsletter />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
