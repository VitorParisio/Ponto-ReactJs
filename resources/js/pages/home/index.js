import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';
import style from './style.module.css';	
import axios from 'axios';

function Home() {
	const [users, setUsers] = useState([])

	const [id] = useState(localStorage.getItem('id'));
	
	useEffect(()=>{ 
		getData();
	
	},[])

	const getData = async ()=>{
		const response = await axios.get("http://localhost:8000/api/user/"+id)
		let data = response.data
		setUsers(data)

		return users
	}
	
    return (

     <div className={style.container}>
    
     	<Header />
		<SideBar />
		<div className={style.body}>
			<h1 className={style.h1}>Olá, {users.name}!</h1>
		</div>
     </div>
    );
}

export default Home;