import React from 'react';
import {increment,decrement} from './actions'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const counter=useSelector(state=>state.counter);
  //const counter=useSelector(state=>state.counter);
  const dispatch=useDispatch();  
  const btnStyle={
        width: '59px',
        height: '43px',
        fontSize: '28px',
  }
  return (
    <div className="App" style={{ borderRadius:'20px',width:'300px',backgroundColor:'yellow',position:'relative',left:'491px',top: '115px' }}>
      
      <div style={{ padding:'20px',    position: 'relative',left: '49px'}}>
      <h3>React Redux Application</h3>
      <h1>Counter {counter}</h1>
      <button style={ btnStyle } onClick={ ()=>dispatch(increment()) }>+</button>
      <button style={ btnStyle } onClick={ ()=>dispatch(decrement()) }>-</button>
    </div></div>
  );
}

export default App;
