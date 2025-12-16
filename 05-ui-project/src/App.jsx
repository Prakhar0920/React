import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1676588085396-3ad020b1d7e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro:'',
      tag:'Underbanked'
    }
  ]


  return (
    <div >
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
