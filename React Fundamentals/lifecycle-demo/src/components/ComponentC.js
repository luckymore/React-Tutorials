import React, { useEffect, useState } from 'react'

const ComponentC = () => {
  const [count, setCount] = useState(0)
  const [, setError] = useState(null)

  useEffect(() => {
    try {
      if (count > 0) throw new Error('count > 0')
    } catch (e) {
      setError(() => { throw e })
    }
  }, [count]) 

  const onClick = () => {
    setCount(1)
    // throw new Error('onClick')
  }

  return (
    <div>
      <h2>Function Component C</h2>
      <button onClick={onClick}>make error</button>
    </div>
  );
}
export default ComponentC
