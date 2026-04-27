import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';



function RegisterForm(props) {
  const [data, setData] = useState('')
  const [pass, setPass] = useState('')

  const handleChangeLogin = (e) => {
    setData(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value)
  }

  return (
         <Stack sx={{ width: "550px" }} gap={2}>
          <Typography variant="h4" gutterBottom sx={{color:"green", textAlign: "center"}}>
            Регистрация в сервисе
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{textAlign: "center"}}>
            Есть учетка?
          </Typography>
          <Button variant="text" onClick ={props.handleLogin}>
           Войти
          </Button>
          <TextField id="login" label="login" variant="standard" onChange={handleChangeLogin} value={data} />
          <TextField id="password" label="Password" variant="standard" type="password" onChange={handleChangePass} value={pass} />
          <Button variant="contained" 
          // onClick={handleRegister}
          > Регистрация
          </Button>
        </Stack>
  )
}

export default RegisterForm