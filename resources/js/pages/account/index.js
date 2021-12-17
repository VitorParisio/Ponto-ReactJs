import React, {useState, useEffect, lazy, Suspense} from 'react';
import style from './style.module.css';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';

const AccountData = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../../components/accountdata")), 3000);
  });
});

function Account(props) {
	const {params} = props.match;
	
    return (
    	<div className={style.container}>
	    	
  			<SideBar />
         		<div className={style.body}>
    	        <Suspense fallback={<span>Aguarde...</span>}>
       				 <AccountData params = {params}/>
              </Suspense> 
            </div>
      </div>
    );
}

export default Account;
