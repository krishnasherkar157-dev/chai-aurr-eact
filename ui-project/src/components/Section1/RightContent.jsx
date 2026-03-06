import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {


  return (
    <div  id='right' className='h-full w-3/4  overflow-auto flex flex-nowrap gap-4 p-6'>
        {props.users.map(function(elem,idx){
          return <RightCard  key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent