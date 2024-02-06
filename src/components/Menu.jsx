import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul>
        <li>
          <Link to="/HomePage">Home /</Link>
        </li>
        <li>
          <Link to="/Tareas">Tareas /</Link>
        </li>
        <li>
          <Link to="/SobreNosotros">Sobre-Nosotros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;









/*import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav  className="menu">
      <ul>
        <li>
          <Link to="/HomePage"><button>Home</button> </Link> 
        </li>
        <li>
          <Link to="/Tareas"><button>Tareas</button></Link> 
        </li>
        <li>
          <Link to="/SobreNosotros"><button>Sobre Nosotros</button></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;*/

