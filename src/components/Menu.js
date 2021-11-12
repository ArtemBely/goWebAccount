import React from "react";
import { Link } from "react-router-dom";
import logo from '../../public/images/logo.svg'


import "../../public/styles/style3.css"



function Menu(listItem) {
  const htmlItems = listItem.items.map((item) => (
    <li key={item.id} className="cmp_header_item">
      <Link className="cmp_header_link" to={item.link}>
        {item.title}
      </Link>
    </li>
  ));

  return ( 
    
    <ul className="cmp_header_list">{htmlItems}</ul>

  )
}

export default Menu;