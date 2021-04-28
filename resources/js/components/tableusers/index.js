import React, {useState, useEffect} from 'react';
import style from './style.module.css';
import { Link } from "react-router-dom";

function TableUsers() {
	const [usersHome, setUsersHome] = useState([]);

	useEffect(()=>{
		getUsersHome();
	},[])

	async function getUsersHome(){
		await fetch('http://localhost:8000/api/user')
			.then(result => result.json())
			.then(json => setUsersHome(json));
	}

	let table =  
		<table className={style.table}>
			<thead>
				<tr>
					<th>Nome</th>
					<th>E-mail</th>
					<th colSpan="2">Horários</th>
					<th colSpan="2">Relatório</th>
					<th>Editar</th>
					<th>Excluir</th>
				</tr>
			</thead>
			<tbody>
			{usersHome.map(person =>(
				<tr key={person.id}>
					<td>{person.name}</td>
					<td>{person.email}</td>
					<td>{person.login}</td>
					<td>{person.logout}</td>
					<td><Link to={`arrival/${person.id}`}>Entrada</Link></td>
					<td><Link to={`exit/${person.id}`}>Saída</Link></td>
					<td>Editar</td>
					<td>Excluir</td>
				</tr>
				))}
			</tbody>
		</table>
	
    return (
        <div className={style.container}>
	       {table}
        </div>
    );
}

export default TableUsers;
