import { Link, useRouteError } from "react-router-dom";
import Error from "../../assets/sponsors/404.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center">
      <h1 className="text-7xl text-red-300 text-center">Oops!</h1>
      <img
        className="mx-auto max-w-sm lg:max-w-md max-h-md px-6 mt-6 mb-6"
        src={Error}
        alt=""
      />
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="flex justify-center">
        <Link to="/">
          <button className="p-4 bg-custom-main text-black font-extrabold">
            GO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
