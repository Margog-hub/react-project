import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import  Typography  from '@mui/material/Typography';

const TodoItem = (props) => {
  const  todo = props.todo
  const handleDeleteTodo = ()=> props.handleDeleteTodo(todo._id)
  const handleDoneTodo = () => props.handleDoneTodo(todo._id)
  return (
    <div>
        <Card sx={{ minWidth: 275, backgroundColor: todo.isDone ? '#fff010'  : undefined}} >
      <CardContent>
        <Typography gutterBottom >
         {todo.title}
        </Typography>
        <Typography variant="body2">
         {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox checked={todo.isDone} onChange ={handleDoneTodo} />
        <Button size="small">Редактировать</Button>
         <Button size="small" onClick ={handleDeleteTodo} sx ={{backgroundColor: 'red', color: 'white'}}>Удалить</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default TodoItem