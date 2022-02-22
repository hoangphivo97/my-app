import React,{useState} from 'react'

const CounterTest = () => {
    const [count,setCount] = useState(0);

  return (
    <div className='App'>
        <div className='CountTest'>
            <h2 className={count > 0 ? 'btn-positive' : count < 0 ? 'btn-negative' : null}>{count}</h2>
            <div className='button_wrapper'>
                <button onClick={()=>setCount(count-1)}>-</button>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CounterTest