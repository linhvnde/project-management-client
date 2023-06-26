import { Link } from 'react-router-dom';

function TaskCard(props) {
  return (
    <li className="TaskCard card" key={props.task._id}>
      <h3>{props.task.title}</h3>
      <h4>Description:</h4>
      <p>{props.task.description}</p>
      <Link to="/tasks/edit/${id}">Edit</Link>
    </li>
  );
}

export default TaskCard;
