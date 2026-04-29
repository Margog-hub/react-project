import React, {useState}  from 'react';
import  Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';


  const todo ={
    _id: '234jhg',
    title: "Подстричься",
    description: "Сходить в парихмахерскую",
    isDone: true,
  } 

function HomePage(props) {
const [todos, setTodos] = useState([todo])

const handleAddTodo = (title, description) => {
  const newTodo ={
     _id: Date.now().toString(),
    title: title,
    description: description,
    isDone: false,
  }
  setTodos([newTodo, ...todos])
}
  return (
    <div>
      <Typography>{props.username}</Typography>
      <AddTodo addTodo = {handleAddTodo} />
     
      {
        todos.map((item) => {
          return  <TodoItem  key ={item._id} todo={item} />
        })
      }
    
    </div>
  )
}

export default HomePage