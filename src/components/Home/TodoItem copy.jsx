import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const TodoItem = (props) => {
  const todo = props.todo
  const handleDeleteTodo = () => props.handleDeleteTodo(todo._id)
  const handleDoneTodo = () => props.handleDoneTodo(todo._id)

  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState(todo.title || '')
  const [description, setDesctiprion] = useState(todo.description || '')

  const handleChangeTitle = (e) => { setTitle(e.target.value) }
  const handleChangeDescription = (e) => { setDesctiprion(e.target.value) }

  const toggleEdit = () => {
    setIsEdit(!isEdit)
    if(isEdit)
      props.handleUpdateTodo(todo._id, title, description)
  }

  return (
    <div>
      <Card sx={{ minWidth: 275, backgroundColor: todo.isDone ? '#fdf36c' : undefined }} >
        <CardContent>
          <Stack >
            {
              isEdit ? <TextField size="small" label="Заголовок" value={title} onChange={handleChangeTitle} /> :
                <Typography gutterBottom >
                  {todo.title}
                </Typography>
            }

            {
              isEdit ? <TextField size="small" label="Описание" value={description} onChange={handleChangeDescription} /> :
                <Typography variant="body2">
                  {todo.description}
                </Typography>
            }
          </Stack>
        </CardContent>
        <CardActions>
          <Checkbox checked={todo.isDone} onChange={handleDoneTodo} />
          <Button size="small" onClick={toggleEdit}> {isEdit ? "Сохранить" : 'Редактировать'}</Button>
          <Button size="small" onClick={handleDeleteTodo} sx={{ backgroundColor: 'red', color: 'white' }}>Удалить</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default TodoItem