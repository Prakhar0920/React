import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {

    console.log(props.company);
  return (
     <div className="card">
        <div>
            <div className="top">
          <img src= {props.logo} alt="" />
          <button>Save <Bookmark /><Bookmark size={12} color='#fafafa' strokeWidth={1.25}/></button>
        </div>
        <div className="center">
          <h1>{props.company} <span>5 days ago</span></h1>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>
      <div className="bottom">
          <div>
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
   
  )
}

export default Card
