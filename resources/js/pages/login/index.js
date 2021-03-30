import React, {useState} from 'react';
import style from './style.module.css';
import {useHistory} from 'react-router-dom';

function Login() {
	let history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function login(){
		let items ={email, password};

		let res = await fetch("http://localhost:8000/api/login", {
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Accept':'application/json'
			},
			body: JSON.stringify(items)
		})

		res = await res.json();
		
		if(res.token){
			localStorage.setItem('id', res.id);
			history.push('/home')
		}else{
			alert('Erro de login e/ senha!')
		}
		
	}

    return (
       <div className={style.content}>
            <div className={style.login}>
            	<h1><b>QR-Smart</b></h1>
                <h3>Acesso restrito</h3>
                <input className={style.input} onChange={e=>setEmail(e.target.value)} type="text" name="email" placeholder="Email" />
                <input className={style.input} onChange={e=>setPassword(e.target.value)} type="password" name="password" placeholder="Senha" />
                <button onClick={login} className={style.btn_login}>Entrar</button>
                <a className={style.forget_password}>esqueceu a senha?</a>
            </div>
       </div>
    );
}

export default Login;