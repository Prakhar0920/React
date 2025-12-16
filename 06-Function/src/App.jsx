import React from 'react'


const App = () => {
  function btnclicked(){
    console.log("Button Clicked");
  }

  function greetUser(name){
    console.log("Hello, " + name);
  }
  return (
    <div>
      <button onClick={btnclicked}>Click here</button>
      <input onChange={function(elem){
        console.log(elem.target.value);
        greetUser(elem.target.value); 
      }} type="text" placeholder='Enter name' />
    </div>
  )
}

export default App
