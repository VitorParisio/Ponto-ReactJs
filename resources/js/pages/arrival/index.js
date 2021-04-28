import React, {useState, useEffect, lazy, Suspense} from 'react';
import style from './style.module.css';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';
const TableArrival = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../../components/tablearrival")), 3000);
  });
});

function Arrival(props) {
	const {params} = props.match;
    return (
    	<div className={style.container}>
	    	<Header/>
			   <SideBar />
       	<div className={style.body}>
	        <Suspense fallback={<span>Aguarde...</span>}>
   			    <TableArrival params = {params}/>
			     </Suspense>	
	      </div>
      </div>
    );
}

export default Arrival;
