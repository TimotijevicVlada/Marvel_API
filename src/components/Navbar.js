import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ bookmark }) => {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/bookmark" className="link bookmarked">
        Bookmarked <span className="bookmark_num">{bookmark.length}</span>
      </Link>
    </div>
  );
};

export default Navbar;
