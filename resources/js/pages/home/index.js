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
	
    return (
    <div className={style.container}>
     	<Header/>
		  <SideBar />
  		<div className={style.body}>
  			<Suspense fallback={<span>Aguarde...</span>}>
     				<TableUsers />
  			</Suspense>	
  		</div>
    </div>
    );
}

export default Home;