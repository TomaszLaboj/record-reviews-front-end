import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import Title from "./Title";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
                <Title />
            </NavLink>
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