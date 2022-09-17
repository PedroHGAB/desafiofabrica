import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/animal">Animals</Link>
          </li>
          <li>
            <Link to="/galeria">Galery</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}

export default App;
