import { Outlet, Link, useParams } from 'react-router-dom';
import '../App.css';

function ProjectPage() {

  return (
    <div className="project-page">
      <h1>Project Name</h1>
      <Outlet />
      <p><a href="/">back to home</a></p>
    </div>
  );
}

export function SingleProject(params) {
  const { projectId } = useParams();

  return (
    <div>
      <h1>{projectId}</h1>
    </div>
  )
}

export default ProjectPage;