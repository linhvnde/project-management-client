import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

function AddTask(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      projectId: props.id,
    };

    axios
      .post(`${API_URL}/api/tasks`, newTask)
      .then(() => {
        props.callbackToUpdateProject();
        setDescription('');
        setTitle('');
      })
      .catch((e) => console.log('Error to POST new task', e));
  };

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>

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
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
