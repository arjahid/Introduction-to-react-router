import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const User = ({user}) => {
    const {id,name, email, phone,} = user;
    const navigate=useNavigate();
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
      const btn = {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        paddingLeft: '10px', // Added left padding
        borderRadius: '5px',
        cursor: 'pointer'
      };
      
      const handleShowDetails=()=>{
navigate(`/user/${id}`)
      }
      
    return (
        
        <div style={titleStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
             <Link to={`/user/${id}`}>Show Details</Link>
             <br />
           <button style={btn} onClick={handleShowDetails}>Click me</button>
             
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired
};
export default User;