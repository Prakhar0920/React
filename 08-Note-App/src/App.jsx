import { X } from 'lucide-react';
import React from 'react'
import { useState } from 'react';

const App = () => {

   const [title, setTitle] = useState('');
   const [details, setDetails] = useState('');

   const [tasks, setTasks] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();
    const copyTasks = [...tasks]; 
    copyTasks.push({title, details});
    setTasks(copyTasks);

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
       const copyTasks = [...tasks];
       copyTasks.splice(idx, 1);
       setTasks(copyTasks);
    }



  return (
    <div className='h-screen lg:flex bg-black text-white' >
      <form onSubmit={(e) =>{
        submitHandler(e)
      }} className='flex flex-col lg:w-1/2  gap-4 items-start p-10 '> 
         <h1 className='text-3xl font-bold'>Add Notes</h1>
         <input 
           type ="text" 
           placeholder = 'Enter Notes Heading' 
           className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
           value={title}
           onChange={(e)=>{
            setTitle(e.target.value)
           }}
        />
        <textarea
          className='px-5 w-full font-medium   h-32 py-2 flex items-start flex-row    border-2  outline-none rounded' 
          type='text'
          placeholder = 'Write Details Here' 
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className='bg-white active:bg-gray-800 w-full font-medium  text-black px-5 py-2 outline-none rounded '>Add Notes</button>
       
       
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-[90%] justify-start'>
            {tasks.map(function(elem, idx){
              return <div key={idx} className='flex justify-between flex-col items-start relative  h-52 w-42 rounded-2xl text-black py- px-4 bg-cover  bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUN0oLXzayuiMIKQBWCLmnhOvogweQrJ8PFg&s)]'>
               <div>
                 <h3 className='leading-tight text-lg font-bold py-3'>{elem.title}</h3>
                 <p className='mt-3 leading-tight text-xs font-semibold text-gray-500'>{elem.details}</p>
               </div>
               <button onClick={()=>{
                deleteNote(idx);
               }}  className=' w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-white text-xs rounded font-bold'>Delete</button>
               
              </div>
            })}
             

          
        </div> 

       
      </div>
    </div>
  )
}

export default App
