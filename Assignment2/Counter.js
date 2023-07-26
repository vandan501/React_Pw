import React, { useState } from 'react';
import './Counter.css'

function Counter()
{
    //declared the or we can say that initialized the value of the x with 0
    const [x, setX] = useState(0);

  const Increment = () => {
    setX(x + 1);
  };

  const Decrement = () => {
    setX(x - 1);
  };
    return(
<>
<div className="Counter">
<div className="ans">{x}</div>
<div className="buttonContainer">

<button onClick={Increment}>Increment</button>
<button onClick={Decrement}>Decrement</button>
</div>
</div>

</>

)
}
export default Counter;

