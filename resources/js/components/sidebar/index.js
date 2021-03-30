import React from 'react';
import style from './style.module.css';
import {SideBarData} from './sidebardata';
import {useHistory} from 'react-router-dom'; 

function SideBar() {
	const history = useHistory();
    return (
       <div className={style.sidebar}>
   			<ul className={style.sidebar__list}>
       			{SideBarData.map((val, key) =>{
       				return(
       					<li 
       					  key={key} 
       					  onClick={()=>{
       					  	if(val.title === "Home"){
       					  		history.push('./home');
       					  	}
       					  	if(val.title === "Cadastrar")
       					  		history.push('/register');
       					  }}
       					  className={style.row}
       					 >
       					  <div className={style.icon}>{val.icon}</div><div className={style.title}>{val.title}</div>
       					</li>
       				)
       			})}
   			</ul>	
	    </div>   
    );
}

export default SideBar;