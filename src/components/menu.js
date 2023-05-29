import { Link } from "react-router-dom";
import "./Menu.css";
export function Menu() {
  return (
    <nav>
      <ul>
        <li>Welcome to Task Management!</li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/tasks_api">Tasks with API</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}
