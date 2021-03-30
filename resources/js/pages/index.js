import React, {lazy, Suspense}  from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './register';
import Login from './login';

const Home = lazy(()=> import('./home'));

function Index() {
    return (
    	<Router>
	    	<div>
		       <Switch>
		       		<Route exact path="/">
			       		<Login />	
			       	</Route>
			       	<Route exact path="/home">
			       			<Suspense fallback={<div>Carregando pagina...</div>}>
			       				<Home />
			       			</Suspense>	
			       	</Route>
			       	<Route exact path="/register">
				       	<Register />
				    </Route>
		       </Switch>	
		     </div>  
      	</Router>
    );
}

export default Index;