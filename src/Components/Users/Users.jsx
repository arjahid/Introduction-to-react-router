import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = () => {
  const users = useLoaderData();
  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
    padding: '10px',
    backgroundColor: '#f4f4f4'
  }

  return (
    <div>
      <h1>Users: {users.length}</h1>
      <ul>
       <div style={style}>
       {
        users.map(user=><User key={user.id}user={user}></User>)
       }
       </div>
      </ul>
    </div>
  );
};

export default Users;