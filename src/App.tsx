import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import { Header } from './components/Header';
import { MainNav } from './components/Navigation/MainNav';
import { TheoryList } from './components/Theory/TheoryList';
import { TheoryArticle } from './components/Theory/TheoryArticle';
import { TopicList } from './components/TopicList';
import { ProblemList } from './components/ProblemList';
import { Problem } from './components/Problem';
import { VariantPage } from './components/Variant/VariantPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Header />
          <MainNav />
          <Routes>
            <Route path="/" element={<Navigate to="/practice" replace />} />
            <Route path="/theory" element={<TheoryList />} />
            <Route path="/theory/:topicId" element={<TheoryArticle />} />
            <Route path="/practice" element={<TopicList />} />
            <Route path="/topic/:topicId" element={<ProblemList />} />
            <Route path="/topic/:topicId/problem/:problemId" element={<Problem />} />
            <Route path="/variant/:variantId" element={<VariantPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;