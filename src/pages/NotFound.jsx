import {NavLink, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
            <NavLink to="/" className="btn btn-outline-primary">
                   Volver a Home
                </NavLink>
        </div>
    );
};
export default NotFound;