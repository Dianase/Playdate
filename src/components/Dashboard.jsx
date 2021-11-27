import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { dashboardData } from "../dashData.js";
import * as BsIcons from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai"
import "../styles/dash.css";


export default function Dashboard() {
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  console.log(showSidebar);

  

  return (
    <>
    <div>
      <div className="dash">
        <Link to="#" className="menu-bars">
          <AiOutlineMenu onClick={(e) => showSidebar()} />
        </Link>
      </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={(e) => showSidebar()}>
          <li className="nav-toggle">
            <Link to="#" className="menu-bars">
              <BsIcons.BsFillArrowLeftCircleFill />
            </Link>
          </li>
          {dashboardData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
