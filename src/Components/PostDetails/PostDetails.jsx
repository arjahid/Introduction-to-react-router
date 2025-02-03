import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const navigate=useNavigate();
    const post=useLoaderData()
    const {title,body,id}=post;
    const handel=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Post details about : {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handel}>Go back</button>
        </div>
    );
};

export default PostDetails;