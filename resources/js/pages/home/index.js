import React, {useState, useEffect, Suspense, lazy} from 'react';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';
import style from './style.module.css';	
const TableUsers = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../../components/tableusers")), 3000);
  });
});

function Home() {
	const [admin, setAdmin] = useState([]);

	useEffect(()=>{ 
		getUserAdmin();
	
	},[])

	async function getUserAdmin(){
		let response = localStorage.getItem('userData');
		let json = JSON.parse(response);
		setAdmin(json);
	}

    return (
     <div className={style.container}>
     	<Header/>
		<SideBar />
		<div className={style.body}>
			<h1 className={style.h1}>Olá, {admin.name}!</h1>
			<Suspense fallback={<span>Aguarde...</span>}>
   				<TableUsers />
			</Suspense>	
		</div>
     </div>
    );
}

export default Home;