import React, { useState } from 'react';

function ChangeState() {
  const [count, setCount] = useState(0); // initialize count with 0

  function change() {
    setCount(count + 1); // increase count by 1
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={change}>Click Here</button>
    </div>
  );
}

export default ChangeState;
