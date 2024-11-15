import { useRouteError } from "react-router-dom";
import '../App.css';

function ErrorPage () {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <p>This page does not exist</p>
      <p><a href="/" className="">go back home</a></p>
    </div>
  )
}

export default ErrorPage;