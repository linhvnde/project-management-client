import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

function EditProjectPage(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const { id } = useParams();
  //pre-populate with details previously stored in DB
  const getProject = () => {
    axios
      .get(`${API_URL}/api/projects/${id}`)
      .then((res) => {
        const projectToEdit = res.data;

        setTitle(projectToEdit.title);
        setDescription(projectToEdit.description);
      })
      .catch((e) => console.log('Error GET details from API', e));
  };

  useEffect(() => {
    getProject();
  }, [id]); //change the state when the id of the project is different

  //update current details with new details
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDetails = {
      title,
      description,
    };

    axios
      .put(`${API_URL}/api/projects/${id}`, newDetails)
      .then(() => {
        navigate(`/projects/${id}`);
      })
      .catch((e) => console.log('Error PUT update to API', e));
  };

  //delete from API
  const deleteProject = () => {
    axios
      .delete(`${API_URL}/api/projects/${id}`)
      .then(() => navigate(`/projects`))
      .catch((e) => console.log('Error DELETE from API', e));
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}

export default EditProjectPage;
