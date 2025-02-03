import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";

import PropTypes from 'prop-types';

const Posts = () => {
    
    const posts=useLoaderData()
    
    const style={
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'5px',
        padding:'10px',
        backgroundColor:'#f4f4f4',
        
    }
    return (
        <div>
            <h2>posts :{posts.length}</h2>
            <div style={style}>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};
Posts.propTypes = {
    posts: PropTypes.array.isRequired
}
export default Posts;