import React, {Component} from 'react';
import './style/App.css'
import Form from './component/form';
import *as serviceWorker  from './serviceWorker';



class App extends React.Component{
  
  render() {
    return (
      <div>
        {}

        <Form/>
      
      
        
      </div>
    );
  }

}


export default App;
serviceWorker.register();