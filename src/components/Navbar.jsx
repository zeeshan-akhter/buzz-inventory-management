import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import StorageIcon from "@mui/icons-material/Storage";

const Navbar = () => {
  const isActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "#00A9FF" : "",
  });

  return (
    <ul>
      <li>
        <NavLink to="/" style={isActiveStyle} className="nav-items">
          Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/sales" style={isActiveStyle} className="nav-items">
          Sales
        </NavLink>
      </li>
      <li>
        <NavLink to="/reports" style={isActiveStyle} className="nav-items">
          Reports
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://github.com/zeeshan-akhter/buzz-inventory-management/"
          target="_blank"
          className="nav-items"
          style={{ color: "#00A9FF" }}
          title="GitHub"
        >
          <GitHubIcon />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://replit.com/@zeeshanakhter/buzzinventorymanagementapi"
          target="_blank"
          className="nav-items"
          style={{ color: "#00A9FF" }}
          title="Replit"
        >
          <StorageIcon />
        </NavLink>
      </li>
    </ul>
  );
};

export { Navbar };
