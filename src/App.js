import React from 'react';
import Button from "./Component/Button"
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {addCounter,reduceCounter} from "./Redux/action"

function App(){
  const count = useSelector(state=>state.count)
  const dipsatch = useDispatch()

  return (
    <div className="App">
        <h1>Count:</h1>
        <h1 data-testid="counter">{count}</h1>

        <Button label="ADD" onClick={()=>dipsatch(addCounter(1))} />
        <Button label="REDUCE" onClick={()=>dipsatch(reduceCounter(1))} />
    </div>
  )
}

export default App;
