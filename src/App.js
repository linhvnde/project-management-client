import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
