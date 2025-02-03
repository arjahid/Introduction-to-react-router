import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post=useLoaderData()
    const {title,body,id}=post;
    return (
        <div>
            <h2>Post details about : {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;