import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { ThemeController } from './controllers/ThemeController';
import { LanguageController } from './controllers/LanguageController';
import HomePage from './views/pages/HomePage';
import PostDetailPage from 'views/pages/PostDetailPage';
import './styles/theme.css';
import './styles/layout.css';
import './styles/navbar.css';
import './styles/news.css';
import './styles/skeleton.css';
import './styles/detail.css';
import './styles/banner.css';


const App: React.FC = () => {
  useEffect(() => {
    ThemeController.init();
    LanguageController.init();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:id" element={<PostDetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;