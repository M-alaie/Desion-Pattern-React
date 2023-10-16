import React from 'react'

const Counter1 = ({count,incCount}) => {
  return (
   <>
   <button style={{color:'red'}} onClick={incCount}>{count}</button>
   </>
  )
}

export default Counter1