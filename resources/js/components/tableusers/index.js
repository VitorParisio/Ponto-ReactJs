import React, {useState, useEffect} from 'react';
import style from './style.module.css';
import { Link, useHistory  } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

function TableUsers() {
	const [usersHome, setUsersHome] = useState([]);
	const history = useHistory();

	useEffect(()=>{
		getUsersHome();
	},[])

	async function getUsersHome(){
		await fetch('http://10.0.0.109:8000/api/user')
			.then(result => result.json())
			.then(json => setUsersHome(json));
	}

	async function getDelete($id){
		await fetch('http://10.0.0.109:8000/api/user/'+ $id,{
			method:'DELETE'
		})

		return true
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
					<td><a href="#"><FaEdit /></a></td>
					<td><Link to="/home/reload" style={{border:"none"}} onClick={() => getDelete(`${person.id}`)}><FaTrash /></Link></td>
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
