import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import CategoryPage from './pages/CategoryPage';
import '../src/css/App.css';
import './pages/StylePage'
function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />

      </Routes>
    </Router>
  );
}

export default App;
