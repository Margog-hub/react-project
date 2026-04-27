import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSnackbar } from 'notistack'

function LoginForm(props) {
  const [data, setData] = useState('')
  const [pass, setPass] = useState('')
  const { enqueueSnackbar } = useSnackbar()

  
  const handleChangeLogin = (e) => {
    setData(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value)
  }

  const handleLoginClick =() => {
    if(data === 'admin' && pass ==='123') {
      props.setUser({name: data})
      enqueueSnackbar('Добро пожаловать, ' + data,{ variant : 'success'} )
    } else {
      enqueueSnackbar('Неверные данные или ошибка сервере', {variant : 'error'})
    }
  }

  return (
  
        <Stack sx={{ width: "550px" }} gap={2}>
          <Typography variant="h4" gutterBottom sx={{color:"green", textAlign: "center"}}>
            Вход в сервис
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{textAlign: "center"}}>
            Нет учетной записи?
          </Typography>
          <Button variant="text" onClick ={props.handleRegister}>
            Зарегестрироваться
          </Button>
          <TextField id="login" label="login" variant="standard" onChange={handleChangeLogin} value={data} />
          <TextField id="password" label="Password" variant="standard" type="password" onChange={handleChangePass} value={pass} />
          <Button variant="contained" onClick={handleLoginClick}>
            Войти
          </Button>
        </Stack> 
  )
}

export default LoginForm