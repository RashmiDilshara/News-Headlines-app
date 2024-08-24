import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeadlineList from './Pages/HeadlineList';
import ArticleDetail from './Pages/ArticleDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeadlineList />} />
        <Route path="/article/:url" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
