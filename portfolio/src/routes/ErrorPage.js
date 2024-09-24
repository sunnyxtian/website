import { useRouteError } from "react-router-dom";
import '../App.css';

function ErrorPage () {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>OOPS!</h1>
      <p>An error has occurred</p>
      <p>
        "
        <i>{error.statusText || error.message}</i>
        "
      </p>
      <p><a href="/" className="">go back home</a></p>
    </div>
  )
}

export default ErrorPage;