import React, {useState, useEffect, lazy, Suspense} from 'react';
import style from './style.module.css';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';
const TableExit = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../../components/tableexit")), 3000);
  });
});

function Exit(props) {
	const {params} = props.match;
    return (
    	<div className={style.container}>
	    	<Header/>
			<SideBar />
       		<div className={style.body}>
	        <Suspense fallback={<span>Aguarde...</span>}>
   				<TableExit params = {params}/>
			</Suspense>	
	       	</div>
        </div>
    );
}

export default Exit;
