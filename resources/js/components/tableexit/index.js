import React, {useState, useEffect} from 'react';
import style from './style.module.css';
import { Link } from "react-router-dom";
import { FaRegCaretSquareRight } from 'react-icons/fa';

function TableExit(props) {
	const [userExit, setUserExit] = useState([]);
	const {id} = props.params

	useEffect(()=>{
		getUserExit();
	}, [])

	async function getUserExit(){
		await fetch('http://10.0.0.109:8000/api/exit/'+id)
			.then(result =>result.json())
			.then(json => setUserExit(json))
	}
	
    return (
        <div className={style.container}>
        	<h1 className={style.h1}><FaRegCaretSquareRight /> Relatório-Saída</h1>
	        <table className={style.table}>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Saída</th>
						<th>Data</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
				{userExit.map((user, index) =>(
					<tr key={index}>
						<td>{user.name}</td> 
						<td>{user.output}</td>
						<td>{user.date}</td>
						<td>{user.status}</td>
					</tr>
					))}
				</tbody>
			</table>
        </div>
    );
}

export default TableExit;
