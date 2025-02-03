
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Users from "./Components/Users/Users";

// Loader Function for Users
// const userLoader = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (!res.ok) {
//     throw new Error("Failed to fetch users");
//   }
//   return res.json();
// };

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      { path: "users", element: <Users />, loader:()=>fetch("https://jsonplaceholder.typicode.com/users")  },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
