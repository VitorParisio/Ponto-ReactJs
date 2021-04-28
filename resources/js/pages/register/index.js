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
	const [logout, setLogout] = useState("");
	const [error, setError] = useState("");

	async function onRegister(){
		let items = {name, email, password, login, logout};

		if(items.name === "" || items.email === "" || items.password === "" || items.login === "" || items.logout === ""){
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
  		await setLogin("");
  		await setLogout("");
	}

    return (
       <div className={style.container}>
       		<Header />
       		<SideBar />
       		<div className={style.body}>
	       		<h1 className={style.h1}><FaRegCaretSquareRight /> Cadastrar</h1>
	       		<div className={style.error}>
      				<span>{error}</span>
	      		</div>
	       		<div className={style.inputs}>
	       			<label htmlFor="name"><b>Nome:</b></label>
				    <input type="text" name="name" className={style.input} value={name} onChange={(e) => {setName(e.target.value)}} autoComplete="off"/>
			       	<label htmlFor="email"><b>E-mail:</b></label>
		       		<input type="email" name="email" className={style.input} value={email} onChange={(e) => {setEmail(e.target.value)}} autoComplete="off"/>
					<label htmlFor="password"><b>Senha:</b></label>
		       		<input type="password" name="password" className={style.input} value={password} onChange={(e) => {setPassword(e.target.value)}} />
       			</div>
       			<div className={style.login_logout}>
       				<div className={style.login}>
	       				<label htmlFor="login"><b>Horário de Chegada:</b></label>
		       			<select className={style.input__select} size="5" value={login} onChange={(e) => {setLogin(e.target.value)}}>
				            <option value="">Selecione</option>
				            <option value="000000">00:00</option>
				            <option value="010000">01:00</option>
				            <option value="020000">02:00</option>
				            <option value="030000">03:00</option>
				            <option value="040000">04:00</option>
				            <option value="050000">05:00</option>
				            <option value="060000">06:00</option>
				            <option value="070000">07:00</option>
				            <option value="080000">08:00</option>
				            <option value="090000">09:00</option>
				            <option value="100000">10:00</option>
				            <option value="110000">11:00</option>
				            <option value="120000">12:00</option>
				            <option value="130000">13:00</option>
				            <option value="140000">14:00</option>
				            <option value="150000">15:00</option>
				            <option value="160000">16:00</option>
				            <option value="170000">17:00</option>
				            <option value="180000">18:00</option>
				            <option value="190000">19:00</option>
				            <option value="200000">20:00</option>
				            <option value="210000">21:00</option>
				            <option value="220000">22:00</option>
				            <option value="230000">23:00</option>
				         </select>
			         </div>	
			         <div className={style.logout}>
	       				<label htmlFor="logout"><b>Horário de Saída:</b></label>
		       			<select className={style.input__select} size="5" value={logout} onChange={(e) => {setLogout(e.target.value)}}>
				            <option value="">Selecione</option>
				            <option value="000000">00:00</option>
				            <option value="010000">01:00</option>
				            <option value="020000">02:00</option>
				            <option value="030000">03:00</option>
				            <option value="040000">04:00</option>
				            <option value="050000">05:00</option>
				            <option value="060000">06:00</option>
				            <option value="070000">07:00</option>
				            <option value="080000">08:00</option>
				            <option value="090000">09:00</option>
				            <option value="100000">10:00</option>
				            <option value="110000">11:00</option>
				            <option value="120000">12:00</option>
				            <option value="130000">13:00</option>
				            <option value="140000">14:00</option>
				            <option value="150000">15:00</option>
				            <option value="160000">16:00</option>
				            <option value="170000">17:00</option>
				            <option value="180000">18:00</option>
				            <option value="190000">19:00</option>
				            <option value="200000">20:00</option>
				            <option value="210000">21:00</option>
				            <option value="220000">22:00</option>
				            <option value="230000">23:00</option>
				         </select>
			         </div>	
	       		</div>	
      			<div className={style.btn}>
      				<button className={style.btn_register} onClick={onRegister}>Cadastrar</button>
      			</div>
	      	</div>
       </div>
    );
}

export default Register;