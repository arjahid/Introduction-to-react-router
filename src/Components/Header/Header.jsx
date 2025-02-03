import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
           
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="contact">Contact</a>
                <Outlet></Outlet>
            </nav>
            <h2>I am from home</h2>
        </div>
    );
};

export default Header;