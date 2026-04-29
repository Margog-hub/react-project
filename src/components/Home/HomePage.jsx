import React from 'react';
import  Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';


function HomePage(props) {
  const todo ={
    _id: '234jhg',
    title: "Подстричься",
    description: "Сходить в парихмахерскую",
    isDone: true,
  }
  return (
    <div>
      <Typography>{props.username}</Typography>
       <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom >
         {todo.title}
        </Typography>
        <Typography variant="body2">
         {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox checked={todo.isDone} />
        <Button size="small">Редактировать</Button>
         <Button size="small" sx ={{backgroundColor: 'red', color: 'white'}}>Удалить</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default HomePage