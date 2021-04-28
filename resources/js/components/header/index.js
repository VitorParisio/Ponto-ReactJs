import React, {useState, useEffect} from 'react';
import style from './style.module.css';
import {Link} from 'react-router-dom';

function Header(props) {
	const [name, setName] = useState(props.search);
	
    return (
        <div>
	        <nav className={style.header}>
	          <div className={style.logo}>
	          	<Link to="/home" className={style.link}>Dashboard</Link>
	          </div>
	          <div>
	          	<input className={style.input__search} type="search" placeholder="Pesquisar..." />
	          </div>
		      <div className={style.logout}>
		      	<Link to="/logout" className={style.link}>Sair</Link>
		      </div>
	         </nav>
        </div>
    );
}

export default Header;
