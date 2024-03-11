import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <h1>React mySql</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Tasks</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
