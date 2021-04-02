import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';
import style from './style.module.css';	
import axios from 'axios';

function Home() {
	const [users, setUsers] = useState([])

	useEffect(()=>{ 
		getUser();
	
	},[])

	async function getUser(){
		let response = localStorage.getItem('userData')
		let json = JSON.parse(response)
		setUsers(json)
	}
	
    return (
     <div className={style.container}>
    
     	<Header />
		<SideBar />
		<div className={style.body}>
			<h1 className={style.h1}>Olá, {users.name} {users.email}!</h1>
		</div>
     </div>
    );
}

export default Home;