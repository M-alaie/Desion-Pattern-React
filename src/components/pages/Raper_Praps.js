import React from 'react'
import Counter1 from "../renderProps/Counter1"
import Counter2 from "../renderProps/Counter1"
import WrapperComponent from "../renderProps/Wrapper"

const Raper_Praps = (props) => {

  return (
    <div>
      <WrapperComponent render={(count,incCount)=>{
       return <Counter1 count={count} incCount={incCount} />
        
      }}></WrapperComponent>
        <WrapperComponent render={(count,incCount)=>{
       return <Counter2 count={count} incCount={incCount} />
      
      }}></WrapperComponent>
    </div>
  )
}

export default Raper_Praps