import { useNavigate } from "react-router-dom";

import '../styles/components/NavBar.css';

import logo from '../styles/images/logo.png';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate('/tickets')}>➕</div>
        <div className="icon" onClick={() => navigate('/')}>🔙</div>
      </div>
    </nav>
  );
}

export default NavBar;
