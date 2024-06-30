import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mt-3">
      <div className="navbar-start">
        <Link to="/">
        <h2 className=" text-2xl font-bold">
          Book <span className="text-success">Vibe</span>
        </h2>
        </Link>
      </div>
      <div className="navbar-center lg:flex gap-10">
        <NavLink
         to="/"
         className={({isActive}) => isActive ? "text-success font-bold" : "font-bold"}
         >Home</NavLink>
        <NavLink
         to="/bookslist"
         className={({isActive}) => isActive ? "text-success font-bold" : "font-bold"}
         >Listed Books</NavLink>
        <NavLink
         to="/book"
         className={({isActive}) => isActive ? "text-success font-bold" : "font-bold"}
         >Pages to Read</NavLink>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn btn-success text-white px-7">Sign In</button>
        <button className="btn btn-active btn-accent text-white px-7 mr-3">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
