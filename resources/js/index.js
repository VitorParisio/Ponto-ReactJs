import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';

function Index(){ 
	
    return (
      <div>	
        <Pages />
      </div> 

    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
