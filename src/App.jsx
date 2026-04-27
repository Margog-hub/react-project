import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import './App.css'
import SingUpForm from './components/SingUpForm';


function App() {
  const [isLoginForm, setIsLoginForm] = useState(false)
  const [data, setData] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = () => {
    setIsLoginForm(true)

  }
  const handleRegister = () => {
    setIsLoginForm(false)
  }
  const handleChangeLogin = (e) => {
    setData(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value)
  }

  return (
    <Stack sx={{ alignItems: "center" }}>
    <SingUpForm/>
    </Stack>
  )
}

export default App
