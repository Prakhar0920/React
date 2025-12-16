import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div id='right' className='h-full w-2/3 p-6 gap-10 flex flex-nowrap overflow-x-auto '>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx+1 } img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent
