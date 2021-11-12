import React from "react";
import { Link } from "react-router-dom";



function FooterLink(footerItem) {
    const htmlItems = footerItem.items.map((item) => (
      <li key={item.id} className="cps_footer_item">
        <Link className="cps_footer_link" to={item.link}>
          {item.title}
        </Link>
      </li>
    ));
  
    return ( 
      
      <ul className="cps_footer_list">{htmlItems}</ul>
  
    )
  }
  
  export default FooterLink;