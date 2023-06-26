import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import AddProject from '../components/AddProject';
import AddTask from '../components/AddTask';
import TaskCard from '../components/TaskCard';

const API_URL = 'http://localhost:5005';

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);

  const { id } = useParams();

  const getProject = () => {
    axios
      .get(`${API_URL}/api/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((e) => console.log('Error GET details from API', e));
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="ProjectDetails">
      <AddTask callbackToUpdateProject={getProject} id={id} />

      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      {project &&
        project.tasks.map((task) => <TaskCard key={task.id} task={task} />)}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      <Link to={`/projects/edit/${id}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
