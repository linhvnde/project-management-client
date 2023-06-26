import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

function EditTaskPage(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const { id } = useParams();
  //pre-populate with details previously stored in DB
  const getTask = () => {
    axios
      .get(`${API_URL}/api/tasks/${id}`)
      .then((res) => {
        const taskToEdit = res.data;

        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
      })
      .catch((e) => console.log('Error GET details from API', e));
  };

  useEffect(() => {
    getTask();
  }, [id]); //change the state when the id of the task is different

  //update current details with new details
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDetails = {
      title,
      description,
      projectId: id,
    };

    axios
      .put(`${API_URL}/api/tasks/${id}`, newDetails)
      .then(() => {
        navigate(`/tasks/${id}`);
      })
      .catch((e) => console.log('Error PUT update to API', e));
  };

  //delete from API
  const deleteTask = () => {
    axios
      .delete(`${API_URL}/api/tasks/${id}`)
      .then(() => navigate(`/project`))
      .catch((e) => console.log('Error DELETE from API', e));
  };

  return (
    <div className="EditTaskPage">
      <h3>Edit the Task</h3>

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
      <button onClick={deleteTask}>Delete Task</button>
    </div>
  );
}

export default EditTaskPage;
