import React, {useState} from 'react'

export default function TodoForm(props) {
 
  const [input, setInput] = useState('');

  const handleChange = e =>{
    console.log(e)
    setInput(e.target.value)
  }

  const handleSubmit = (e) =>{
    console.log(e)
    e.preventDefault();
    props.addTask({
      id:Math.floor(Math.random() *1000000),
      text:input,
      isComplete: false
    })
    setInput('')
  }


  return <form  className="todo-form" onSubmit={handleSubmit}>
   <input type="text" placeholder='Add a todo' onChange={handleChange} className="todo-input" value={input} name="text" />
   <button type="submit"  className='todo-btn'>ADD TODO</button>
  </form>
}
