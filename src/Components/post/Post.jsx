import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Post = ({post}) => {
    const userStyle={
        border:'1px solid purple',
        padding:'20px',
        margin:'20px',
        
    }
    const {id}=post;
    return (
        <div style={userStyle}>
            
            <h2>Id:{id}</h2>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object.isRequired
};
export default Post;