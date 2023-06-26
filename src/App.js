import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';
import AddTask from './components/AddTask';
import EditTaskPage from './pages/EditTaskPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:id" element={<EditProjectPage />} />
        <Route path="/tasks/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
