import React from 'react';
import style from './style.module.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
	        <nav className={style.header}>
	          <div className={style.logo}>
	          	<Link to="/home" className={style.link}>Dashboard</Link>
	          </div>
		      <div className={style.logout}>
		      	<Link to="/logout" className={style.link}>Sair</Link>
		      </div>
	         </nav>
        </div>
    );
}

export default Header;
