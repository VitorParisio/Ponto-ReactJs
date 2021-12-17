import React, {useState, useEffect} from 'react';
import style from './style.module.css';
import { FaUserCircle } from 'react-icons/fa';
import {Link, useHistory} from 'react-router-dom';

function Header(props) {
	const [name, setName] = useState(props.search);
	const [admin, setAdmin] = useState([]);
	const history = useHistory();

	useEffect(()=>{ 
		getUserAdmin();
	
	},[])

	async function getUserAdmin(){
		let response = localStorage.getItem('userData');
		let json = JSON.parse(response);
		setAdmin(json);
	}

	const getLogout = () => {
		localStorage.clear();
		history.push('/');
	}
	
    return (
        <div>
	        <div className={style.header}>
	        	<div>
            		<Link to="/" className={style.logo}>QR-Smart</Link>
          		</div>	
		      	<section className={style.user}>
		      		<div className={style.item}><a href="#" className={style.item_link}><FaUserCircle size={20}/>{admin.name} {admin.lastname}</a></div>
	      			<div className={style.subitem}>
		      			<div className={style.subitem_link}><a href="#">Minha conta</a></div>
		      			<div className={style.subitem_link}><Link to="/reload" onClick={getLogout}>Sair</Link></div>
		      		</div>
				</section>
	         </div>
        </div>
    );
}

export default Header;
