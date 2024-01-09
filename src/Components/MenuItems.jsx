import React from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <a href={items.url}>{items.title}</a>

          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
