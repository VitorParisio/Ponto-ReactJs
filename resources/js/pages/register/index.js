import React, {useState} from 'react';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';
import style from './style.module.css';
import axios from 'axios';
import { FaRegCaretSquareRight } from 'react-icons/fa';

function Register() {
	const [name, setName] 	           = useState("");
	const [lastname, setLastName]      = useState("");
	const [email, setEmail] 	       = useState("");
	const [password, setPassword] 	   = useState("");
	const [login, setLogin] 	 	   = useState("");
	const [logout, setLogout] 		   = useState("");
	const [returned, setReturned] 	   = useState("");
	const [away, setAway] 			   = useState("");
	const [office, setOffice] 		   = useState("");
	const [type_access, setTypeAccess] = useState(0);
	const [inlog, setInlog]            = useState("");
	const [loading, setLoading]        = useState(false);
	const [message, setMessage] 	   = useState();
	const [success, setSuccess] 	   = useState("");
	const [error, setError] 	  	   = useState([]);
	
	async function onRegister(){
		setLoading(true);
		let items = {name, lastname, email, password, login, 
					logout, returned, away, office, 
					type_access, inlog};

		await fetch("http://localhost:8000/api/user", {
			method:'POST',
			headers:{
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			},
			body:JSON.stringify(items)

		}).then(result => {
			return result.json();
			
		}).then((json) => {
			if (json.hasOwnProperty('errors')){
				setError(json.errors);
				setLoading(false);
				return error;
			} else {
				setLoading(false);
				setMessage(true);
				setError([]);
				setSuccess(json.success);
				setTimeout(()=>{
					setSuccess("");
					setMessage(false);
				}, 5000);

				clear();
				return success;
			}
			
		});
		
				
	}

	const clear = async () =>{
		await setName("");
		await setLastName("");
  		await setEmail("");
  		await setPassword("");
  		await setLogin("");
  		await setLogout("");
  		await setReturned("");
  		await setAway("");
  		await setTypeAccess(0);
  		await setOffice("");
  		await setInlog("");	
  		await setLoading(false);
	}

    return (
       <div className={style.container}>
   		<Header />
   		<SideBar />
   		{ message ? <div className={style.success}>
  						<span>{success}</span>
      				</div> : ''}
   		{ loading  ? <div className={style.spinner}>
       					<div className={style.lds_dual_ring}></div>
       				</div> : 
   		<div className={style.body}>
       		<div className={style.form_register}>
       			<h5 className={style.title_register}>Definições</h5>
       			<label htmlFor="name" className={style.label_register}><b>Nome:</b>
			    	<input type="text" name="name" className={style.input_register} value={name} onChange={(e) => {setName(e.target.value)}} autoComplete="off"/>
			    	<span>{error.name}</span>
		       	</label>
		       	<label htmlFor="lastname" className={style.label_register}><b>Sobrenome:</b>
	       			<input type="text" name="lastname" className={style.input_register} value={lastname} onChange={(e) => {setLastName(e.target.value)}} autoComplete="off"/>
		       		<span>{error.lastname}</span>
		       	</label>
		       	<label htmlFor="office" className={style.label_register}><b>Cargo:</b>
	       			<input type="text" name="office" className={style.input_register} value={office} onChange={(e) => {setOffice(e.target.value)}} autoComplete="off"/>
	       			<span>{error.office}</span>
		       	</label>
		       	<label htmlFor="email" className={style.label_register}><b>E-mail:</b>
	       			<input type="email" name="email" className={style.input_register} value={email} onChange={(e) => {setEmail(e.target.value)}} autoComplete="off"/>
					<span>{error.email}</span>
				</label>
   				<h5 className={style.title_register}>Jornada de trabalho</h5>
   				<div className={style.journey}>
   					<label htmlFor="schedule"><b>Horário:</b>
	       				<div className={style.schedule}>
		       				<input type="time" className={style.login} name="login" value={login} onChange={(e) => {setLogin(e.target.value)}}/>
		       				ATÉ
		       				<input type="time" className={style.logout} name="logout" value={logout} onChange={(e) => {setLogout(e.target.value)}}/>
				        </div>	
			         </label>
			         <label htmlFor="interrupt"><b>Intervalo:</b>
       					<div className={style.interrupt}>
		       				<input type="time" className={style.away} name="away" value={away} onChange={(e) => {setAway(e.target.value)}}/>
		       				ATÉ
		       				<input type="time" className={style.returned} name="returned" value={returned} onChange={(e) => {setReturned(e.target.value)}}/>
				        </div>	
			         </label>
       			</div>
       			<h5 className={style.title_register}>Acesso ao sistema</h5>
       			<div className={style.type_access}>
       				<div className={style.access}>
		       			<label htmlFor="inlog" className={style.label_register}><b>Login:</b>
			       			<input type="text" name="inlog" className={style.input_register} value={inlog} onChange={(e) => {setInlog(e.target.value)}} autoComplete="off" />
	       				</label>
	       				<label htmlFor="password" className={style.label_register}><b>Senha:</b>
			       			<input type="password" name="password" className={style.input_register} value={password} onChange={(e) => {setPassword(e.target.value)}} />
	       				</label>
	       			</div>
	       			<div className={style.permition}>
	       				<label htmlFor="type_access" className={style.label_register}><p><b>Liberar acesso ao sistema?</b></p>
	       					<b>SIM</b><input type="radio" name="type_access" value="1" checked={type_access === "1"} onChange={(e) => {setTypeAccess(e.target.value)}} /><br/>
	       					<b>NÃO</b><input type="radio" name="type_access" value="0" checked={type_access === "0"} onChange={(e) => {setTypeAccess(e.target.value)}} checked />
	       				</label>
	       			</div>
       			</div>
	       		<div className={style.btns}>
      				<input type="button" value="Salvar" className="btn btn-primary" onClick={onRegister} />
      				<input className="btn btn-secondary" onClick={clear} type="reset" value="Cancel" />
      			</div>
       		</div>
	     </div>}
       </div>
    );
}

export default Register;