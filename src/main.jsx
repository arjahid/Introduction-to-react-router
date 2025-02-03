
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";

import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/PostDetails/PostDetails";
import Error from "./Components/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<Error></Error>,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      { path: "/user/:userId",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails /> },
        {path:"/posts",
          loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
          element:<Posts></Posts>
        },

      { path: "users", element: <Users />, loader:()=>fetch("https://jsonplaceholder.typicode.com/users")  },
      {
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
