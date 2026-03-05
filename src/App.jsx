import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { LanguageProvider } from './context/LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';   

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;