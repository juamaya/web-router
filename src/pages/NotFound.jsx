import {NavLink, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1 className="fs-1 m-5 fw-1">404   </h1>
       
            <p className="fs-1 m-5 fw-1">Page {error.statusText || error.message}</p>
            <NavLink to="/" className="btn btn-success text-dark fs-1 fw-2 p-5 m-5">
                   Volver a Home
                </NavLink>
        </div>
    );
};
export default NotFound;