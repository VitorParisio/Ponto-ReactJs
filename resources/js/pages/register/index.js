import React, {useState} from 'react';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';
import style from './style.module.css';
import { FaRegCaretSquareRight } from 'react-icons/fa';

function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function onRegister(){
		let items = {name, email, password};
		
		let res = await fetch("http://localhost:8000/api/user", {
			method:"POST",
			body:JSON.stringify(items),
			headers:{
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			}
		})

			res= await res.json()	
			alert('Usuário cadastrado com sucesso!')
			clear();
	}

	const clear = async () =>{
		await setName("");
  		await setEmail("");
  		await setPassword("");
	}

    return (
       <div className={style.container}>
       		<Header />
       		<SideBar />
       		<div className={style.body}>
	       		<h1 className={style.h1}><FaRegCaretSquareRight /> Cadastrar</h1>
		       		<div className={style.inputs}>
		       			<label htmlFor="name"><b>Nome:</b></label>
				       	<input type="text" className={style.input} value={name} onChange={(e) => {setName(e.target.value)}} />
				       	<label htmlFor="email"><b>E-mail:</b></label>
				       	<input type="email" className={style.input} value={email} onChange={(e) => {setEmail(e.target.value)}} />
				       	<label htmlFor="password"><b>Senha:</b></label>
				       	<input type="password" className={style.input} value={password} onChange={(e) => {setPassword(e.target.value)}} />
	      			</div>
	      			<div className={style.btn}>
	      				<button className={style.btn_register} onClick={onRegister}>Cadastrar</button>
	      			</div>
	      	</div>
       </div>
    );
}

export default Register;