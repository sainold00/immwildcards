import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CardListPage from './pages/CardListPage';
import CardPage from './pages/CardPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/student/:name' element={<CardPage />} />
            <Route path='/students' element={<CardListPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
