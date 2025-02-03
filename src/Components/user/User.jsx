import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const User = ({user}) => {
    const {id,name, email, phone,} = user;
    const titleStyle = {
        fontSize: '24px',
        color: '#333',
        border: '1px solid #333',
        padding: '20px',
        margin: '20px',
        borderRadius: '10px',
        width: '300px',
       backgroundColor: 'lightblue'
      };
      
    return (
        
        <div style={titleStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
             <Link to={`/user/${id}`}>Show Details</Link>
             <Link to={`'/user/${id}'`}><button>Click me</button></Link>
             
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired
};
export default User;