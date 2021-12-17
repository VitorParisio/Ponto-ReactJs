import React, {useState, useEffect} from 'react';
import style from './style.module.css';
import { Link } from "react-router-dom";


function AccountData(props) {
	const [accountData, setAccountData] = useState([]);
	const {id} = props.params

	useEffect(()=>{
		getAccountData();
	}, [])

	async function getAccountData(){
		await fetch('http://localhost:8000/api/account/'+id)
			.then(result =>result.json())
			.then(json => setAccountData(json))
	}
	
	return (
		 <div className={style.container}>
		 {console.log(accountData)}
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
				{accountData.map((user, index) =>(
					<tr key={index}>
						<td>{user.name}</td> 
						
					</tr>
					))}
				</tbody>
			</table>
        </div>
	)
}

export default AccountData;
