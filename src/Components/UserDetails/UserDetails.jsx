import { useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';


const UserDetails = () => {
    const user=useLoaderData();
    const {name,email,phone}=user;
    return (
        <div>
            <h2>details: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};
UserDetails.propTypes = {
    user: PropTypes.object.isRequired
};
export default UserDetails;