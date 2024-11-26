import React from 'react'
import { useState } from 'react'
import './Todo.css';

function Todolist() {
    const [tasks,settask]=useState(['do a home work','go to the gym','take a notes']);
    const [newtask,setnewtask]=useState('');
    const handelinput=(e:any)=>{
      setnewtask(e.target.value);
    }
    const add=()=>{
        if(newtask!==''){
        settask(t=>[...t,newtask]);
        setnewtask("");
        }
    }
    const delet=(index:any)=>{
    
      const  newt=tasks.filter((_,i)=> i!==index);
      settask(newt);
    }
    const mouveup=(index:any)=>{
      if (index>0){
         const update=[...tasks];
         [update[index],update[index-1]]=[update[index-1],update[index]];
        settask(update);
      }
    }


  return (
    <div className='to-do-list'>
        <h1>TO-DO-lIST</h1>
        <div className='inputtodo'>
            <input 
            type="text"
            placeholder='Enter a Task'
            value={newtask}
            onChange={handelinput}
             />
             <button onClick={add} className='addbutton'>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button onClick={()=>delet(index)} className='delet-btn'>Delet</button>
                    <button onClick={()=>mouveup(index)} className='mouve-btn'>👆</button>
                    <button className='mouve-btn'>👇</button>
                    </li>

            )}
        </ol>

    </div>
  )
}

export default Todolist