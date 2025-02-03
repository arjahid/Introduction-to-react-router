import { useLoaderData } from "react-router-dom";


const ShowMore = () => {
    const user=useLoaderData();
    const {title,body}=user;
    return (
        <div>
            <h2>show more</h2>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default ShowMore;