import React, {useState} from 'react'

const Counter = () => {

    const [count,setCount] = useState(0);
    
    const decrease = () => {
        setCount(count-1)
    }

    const increase = () =>{
        setCount(count+1)
    }
  return (
    <div className='App'>
        <div className='Count'>
            <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
            <div className='button__wrapper'>
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
            </div>

        </div>

    </div>
  )
}

export default Counter