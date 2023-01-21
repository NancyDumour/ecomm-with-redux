import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='ui fixed menu' style={{ height: "55px" }}>
      <div className='ui container center'>
        <h1>
          <Link exact to='/'>
            Redux Ecomm App
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
