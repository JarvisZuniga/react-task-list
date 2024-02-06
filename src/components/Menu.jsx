import React from 'react';
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

export default Menu;

