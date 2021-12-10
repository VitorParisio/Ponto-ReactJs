import React, {useState, useEffect} from 'react';
import style from './style.module.css';
import { Link } from "react-router-dom";
import { FaRegCaretSquareRight } from 'react-icons/fa';

function TableArrival(props) {
	const [userArrival, setUserArrival] = useState([]);
	const {id} = props.params

	useEffect(()=>{
		getUserArrival();
	}, [])

	async function getUserArrival(){
		await fetch('http://localhost:8000/api/arrival/'+id)
			.then(result =>result.json())
			.then(json => setUserArrival(json))
	}
	
    return (
        <div className={style.container}>
        	<h1 className={style.h1}><FaRegCaretSquareRight /> Entrada</h1>
	        <table className={style.table}>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Entrada</th>
						<th>Data</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
				{userArrival.map((user, index) =>(
					<tr key={index}>
						<td>{user.name}</td> 
						<td>{user.input}</td>
						<td>{user.date}</td>
						<td>{user.status}</td>
					</tr>
					))}
				</tbody>
			</table>
        </div>
    );
}

export default TableArrival;
