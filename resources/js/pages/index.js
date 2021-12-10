import React, {lazy, Suspense}  from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Register from './register';
import Login from './login';
import Arrival from './arrival';
import Exit from './exit';

const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./home")), 1000);
  });
});

function Index() {
    return (
	    <div>	
	    	<Router>
			       <Switch>
			       		
				       	<Route exact path="/">
				       			<Suspense fallback={<span>Carregando página...</span>}>
				       				<Home />
				       			</Suspense>	
				       	</Route>
				       	<Route exact path="/register" component={Register} />
					 	<Route exact path="/arrival/:id" component={Arrival} /> 
					 	<Route exact path="/exit/:id" component={Exit} />
					 	<Redirect exact from='/home/reload' to='/home' />
			       </Switch>		
	      	</Router>
	    </div> 
    );
}

export default Index;