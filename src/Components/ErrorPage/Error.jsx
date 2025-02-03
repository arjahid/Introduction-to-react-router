import { useRouteError } from "react-router-dom";


const Error = () => {
    const error=useRouteError();
    return (
        <div>
            <h2>Ops Error</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status===404 && <p>Page not found</p>
            }
        </div>
    );
};

export default Error;