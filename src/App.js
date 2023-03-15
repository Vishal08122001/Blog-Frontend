
import './styles/App.css';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/ArticleDetail';
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/ArticleList' element={<ArticleList />} />
          <Route path='/Article/:name' element={<Article />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
