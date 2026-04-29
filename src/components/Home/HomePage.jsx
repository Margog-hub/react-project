import React, {useState}  from 'react';
import  Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TodoItem from './TodoItem';


  const todo ={
    _id: '234jhg',
    title: "Подстричься",
    description: "Сходить в парихмахерскую",
    isDone: true,
  } 

function HomePage(props) {
const [todos, setTodos] = useState([todo])

const handleAddTodo = () => {
  const newTodo ={
     _id: Date.now().toString( ),
    title: "Подстричься",
    description: "Сходить в парихмахерскую",
    isDone: true,
  }
  setTodos([newTodo, ...todos])
}
  return (
    <div>
      <Typography>{props.username}</Typography>
      <Button onClick ={handleAddTodo}> Добавить дело</Button>
      {
        todos.map((item) => {
          return  <TodoItem  key ={item._id} todo={item} />
        })
      }
    
    </div>
  )
}

export default HomePage