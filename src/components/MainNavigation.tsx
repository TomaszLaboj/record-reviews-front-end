import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/current-review" end>
              Current Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/archives">Archives</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;