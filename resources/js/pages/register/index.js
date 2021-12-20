import React, {useState} from 'react';
import Header from '../../components/header';
import SideBar from '../../components/sidebar';
import style from './style.module.css';
import { FaRegCaretSquareRight, FaGrinAlt, FaPlayCircle } from 'react-icons/fa';

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
	const [message, setMessage] 	   = useState(false);
	const [success, setSuccess] 	   = useState("Colaborador adicionado com sucesso!");
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

				clear();
				return success;
			}
			
		});			
	}

	const close = async () =>{
		await setSuccess("");
		await setMessage(false);
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
   		{ loading  ? <div className={style.spinner}>
       					<div className={style.lds_dual_ring}></div>
       				</div> : 
   		<div className={style.body}>
   			{ message && <div>
	   						<div className={style.pop_up}></div>
	      					<div className={style.success}>
	      						<h3>{success}</h3>
	      						<h4><FaGrinAlt /></h4>
	      						<button className="btn btn-success" onClick={close}>Ok</button>
	      					</div>
      					</div>}
      		<div className={style.title}>
				<span className={style.title_text}><FaPlayCircle /> Adicionar</span>				
			</div>  
       		<div className={style.form_register}>
       			<h5 className={style.title_register}>Definições</h5>
       			<div className={style.definitions}>
	       			<label htmlFor="name" className={style.label_register}><b>Nome:</b>
				    	<input type="text" name="name" maxLength="15" className={style.input_register} value={name} onChange={(e) => {setName(e.target.value)}} autoComplete="off"/>
				    	<span>{error.name}</span>
			       	</label>
			       	<label htmlFor="lastname" className={style.label_register}><b>Sobrenome:</b>
		       			<input type="text" name="lastname" maxLength="15" className={style.input_register} value={lastname} onChange={(e) => {setLastName(e.target.value)}} autoComplete="off"/>
			       		<span>{error.lastname}</span>
			       	</label>
			       	<label htmlFor="office" className={style.label_register}><b>Cargo:</b>
		       			<input type="text" name="office" maxLength="15" className={style.input_register} value={office} onChange={(e) => {setOffice(e.target.value)}} autoComplete="off"/>
		       			<span>{error.office}</span>
			       	</label>
			       	<label htmlFor="email" className={style.label_register}><b>E-mail:</b>
		       			<input type="email" name="email" maxLength="25" className={style.input_register} value={email} onChange={(e) => {setEmail(e.target.value)}} autoComplete="off"/>
						<span>{error.email}</span>
					</label>
				</div>
   				<h5 className={style.title_register}>Jornada de trabalho</h5>
   				<div className={style.journey}>
   					<label htmlFor="schedule"><b>Horário:</b>
	       				<div className={style.schedule}>
		       				<input type="time" className={style.login} name="login" value={login} onChange={(e) => {setLogin(e.target.value)}}/>
		       				<span>{error.login}</span>
		       				ATÉ
		       				<input type="time" className={style.logout} name="logout" value={logout} onChange={(e) => {setLogout(e.target.value)}}/>
		       				<span>{error.logout}</span>
				        </div>	
			         </label>
			         <label htmlFor="interrupt"><b>Intervalo:</b>
       					<div className={style.interrupt}>
		       				<input type="time" className={style.away} name="away" value={away} onChange={(e) => {setAway(e.target.value)}}/>
		       				<span>{error.away}</span>
		       				ATÉ
		       				<input type="time" className={style.returned} name="returned" value={returned} onChange={(e) => {setReturned(e.target.value)}}/>
		       				<span>{error.returned}</span>
				        </div>	
			         </label>
       			</div>
       			<h5 className={style.title_register}>Acesso ao sistema</h5>
       			<div className={style.type_access}>
       				<div className={style.access}>
		       			<label htmlFor="inlog" className={style.label_register}><b>Login:</b>
			       			<input type="text" name="inlog" maxLength="15" className={style.input_register} value={inlog} onChange={(e) => {setInlog(e.target.value)}} autoComplete="off" />
			       			<span>{error.inlog}</span>
	       				</label>
	       				<label htmlFor="password" className={style.label_register}><b>Senha:</b>
			       			<input type="password" name="password" className={style.input_register} value={password} onChange={(e) => {setPassword(e.target.value)}} />
			       			<span>{error.password}</span>
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