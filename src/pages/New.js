import React from "react";
import { MenuList } from "../Helper/data";
import MenuItem from "../components/Layout";
import "../styles/New.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="new">
      <h1 className="menuTitle">Items</h1>
      <Link to="/food">
          <button> Donate Now! </button>
        </Link>
          

      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;