import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddProject from '../components/AddProject';
import ProjectCard from '../components/ProjectCard';

const API_URL = 'http://localhost:5005';

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject callbackToUpdateList={getAllProjects} />
      {projects.length} projects in the database
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}

export default ProjectListPage;
