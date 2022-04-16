import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { addFundActionCreator, withdrawFundActionCreator } from './actionCreator';

function App() {
  //1. State/Hook
  let state = useSelector((storeObject)=>{
    return storeObject;
  });

  const dispatch = useDispatch();

  //2. Function defination
  let addFund = ()=>{
    let amount = parseInt(prompt('Enter the amount to Add '));
    //alert(amount);

    // I have to dispatch action
    dispatch(addFundActionCreator(amount));
    
  }
  let withdrawFund = ()=>{
    let amount = parseInt(prompt('Enter the amount to Withdraw '));
    //alert(amount);
    // I have to dispatch action
    dispatch(withdrawFundActionCreator(amount));
  }
  return (
    <div className="App">
          <h1>Amount { state }</h1>

          <div>
            <button onClick={ ()=>{ addFund() } }>Add Fund</button>
            <button onClick={ ()=>{ withdrawFund() }}>Withdraw</button>
          </div>
    </div>
  );
}

export default App;
