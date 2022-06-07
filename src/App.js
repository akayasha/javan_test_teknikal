import React,{Component} from 'react';
import Content from './Content';
import store from './store';
import './App.css';

class App extends Component{

  render(){
    return(
      <div>
        <Content store={store} />
      </div>
    )
  }
}



export default App;
