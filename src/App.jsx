import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, addValue, sub } from './Slicer'

function App() {
  const [count, setCount] = useState(0)

  const data = useSelector((a) => {
    return a.showData.value;
  })

  const dispatch = useDispatch();

  return (
    <>
       <div className='App'>
        <h1>Counter App</h1>
        <h2>Counter : {data}</h2>
        <button onClick={() => dispatch(add())} className='btn'>Add +</button>
        <button onClick={() => dispatch(sub())} className='btn'>Sub -</button>
        <button onClick={() => dispatch(addValue(10))} className='btn'>Add with value(10)</button>
       </div>
    </>
  )
}

export default App
