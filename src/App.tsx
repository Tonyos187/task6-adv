import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Blog from './pages/Blog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Newsletter from './pages/Newsletter';
import Footer from './components/Footer/Footer';

const routes = [
  { path: '/', element: <Blog /> },
  { path: '/blog/:id', element: <BlogDetails /> },
  { path: '/newsletter', element: <Newsletter /> },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
