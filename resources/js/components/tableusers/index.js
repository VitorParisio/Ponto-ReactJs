import React, {useState, useEffect} from 'react';
import style from './style.module.css';
import { Link, useHistory  } from "react-router-dom";
import { FaSearch, 
		 FaInfoCircle, 
		 FaTrashAlt, 
		 FaUserCircle, 
		 FaRegEdit,
		 FaAngleRight } from 'react-icons/fa';
import Pagination from "react-js-pagination";

function TableUsers() {
	const [data, setData] 				 = useState([]);
	const [current_page, setCurrentPage] = useState(0);
	const [per_page, setPerPage]		 = useState(0);
	const [total, setTotal]				 = useState(0);
	const [noUser, setNoUser]		     = useState("");

	const history = useHistory();
	
	useEffect(()=>{
		getUsersHome();
	},[])

	async function getUsersHome(current_page)
	{	
		await fetch(`http://localhost:8000/api/user?page=${current_page}`)
			.then(result => result.json())
			.then(json => { 
				if (json.data.length === 0)
				{	
					setNoUser(json.data.length);

					return noUser;

				} else if (json.data.length >= 1)
				{
					setData(json.data);
					setCurrentPage(json.current_page);
					setPerPage(json.per_page);
					setTotal(json.total);
				}
			});	
	}

	async function getDelete($id)
	{
		await fetch('http://localhost:8000/api/user/'+ $id,
		{
			method:'DELETE'
		})

		return;
	}

	function listUsers() 
	{	
		let no_user = <div className={style.nouser}>
							<h4>Base de dados sem registro(s)!</h4>
							<button className="btn btn-success"><Link to="/register" style={{color:"#FFF", fontFamily:"Arial", fontWeight: "bold", fontSize: "15px"}}>+ Adicionar</Link></button>
					  </div>

		let user_data = <section className={style.users}>
						{data.map(person =>(
						<div className={style.user} key={person.id}>
							<div className={style.items_user}>
								<div className={style.item1}>
									<FaUserCircle size={40} />
								</div>
								<div className={style.item2}>
									<h4>{person.name} {person.lastname}</h4>
									<h5>{person.office}</h5>
								</div>
							</div>
							<div className={style.actions}>
								<div><Link to={`account/${person.id}`} style={{border:"none", color:"green"}} title="Informações"><FaInfoCircle size={20}/></Link></div>
								<div><FaRegEdit size={20}/></div>
								<div><Link to="/home/reload" style={{border:"none" , color:"red"}} onClick={() => getDelete(`${person.id}`)} title="Excluir"><FaTrashAlt size={20}/></Link></div>
							</div>
						</div>
					))}
				</section>

		return (
			<div className={style.list}>
				<section className={style.title}>
					<h3><FaAngleRight size={15}/> Colaboradores</h3>
					<input type="text" placeholder="Colaborador(a)..." />
					<span className={style.icon_search}><FaSearch /></span>				
				</section>  
				{noUser === 0 ? no_user : user_data}
				<section className={style.pagination}>
			        <Pagination
			          activePage = {current_page}
			          itemsCountPerPage={per_page}
			          totalItemsCount={total}
			          itemClass="page-item"
					  linkClass="page-link"
			          onChange={(pageNumber) => getUsersHome(pageNumber)}
			        />
		      </section>
			</div>
		);
	}

    return (
        <div>
	       {listUsers()}
        </div>
    );
}

export default TableUsers;
