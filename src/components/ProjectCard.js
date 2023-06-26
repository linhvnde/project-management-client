import { Link } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <div className="ProjectCard card" key={props.project._id}>
      <Link to={`/projects/${props.project._id}`}>
        <h3>{props.project.title}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;
