import React, {useState} from 'react';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';
import style from './style.module.css';
import { FaRegCaretSquareRight } from 'react-icons/fa';

function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, setLogin] = useState("");
	const [error, setError] = useState("");

	async function onRegister(){
		let items = {name, email, password, login};

		if(items.name === "" || items.email === "" || items.password === "", items.login === ""){
			setError("Preencha todos os campos.");
			setInterval(()=>{
				setError("");
			}, 3000)
			return false;
		}else if(!items.email.includes("@")){
			setError("E-mail inválido!");
			setInterval(()=>{
				setError("");
			}, 3000)
			return false;
		}

		let res = await fetch("http://localhost:8000/api/user", {
			method:'POST',
			headers:{
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			},
			body:JSON.stringify(items)
		})

		res= await res.json();

		alert('Usuário cadastrado com sucesso!');
		await clear();	
	}

	const clear = async () =>{
		await setName("");
  		await setEmail("");
  		await setPassword("");
  		await setLogin("00:00");
	}

    return (
       <div className={style.container}>
       		<Header />
       		<SideBar />
       		<div className={style.body}>
	       		<h1 className={style.h1}><FaRegCaretSquareRight /> Cadastrar</h1>
		       		<div className={style.inputs}>
		       			<label htmlFor="name"><b>Nome:</b></label>
					       	<input type="text" name="name" className={style.input} value={name} onChange={(e) => {setName(e.target.value)}} />
				       	<label htmlFor="email"><b>E-mail:</b></label>
				       		<input type="email" name="email" className={style.input} value={email} onChange={(e) => {setEmail(e.target.value)}} />
						<label htmlFor="password"><b>Senha:</b></label>
				       		<input type="password" name="password" className={style.input} value={password} onChange={(e) => {setPassword(e.target.value)}} />
				       	<label htmlFor="login"><b>Horário de chegada:</b></label>
			       			<input type="text" name="login" className={style.input} value={login} onChange={(e) => {setLogin(e.target.value)}} />	
	      			</div>
	      			<div className={style.btn}>
	      				<button className={style.btn_register} onClick={onRegister}>Cadastrar</button>
	      			</div>
	      			<div className={style.error}>
	      				<span>{error}</span>
	      			</div>
	      	</div>
       </div>
    );
}

export default Register;