import React , {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Description} from '@mui/icons-material';

const AddTodo = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDesctiprion] = useState('')

  const handleChangeTitle =(e)=> { setTitle(e.target.value)}
  const handleChangeDescription =(e)=> { setDesctiprion(e.target.value)}

  const handleAddTodo =()=> {
    props.addTodo(title, description)
    reset()
  }

  const reset = () => {
    setTitle('')
    setDesctiprion('')
  }
  return (
    <div>
        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Добавление нового дела
        </AccordionSummary>
        <AccordionDetails>
         <Stack spacing={2}>
          <TextField size="small" label="Заголовок" value={title} onChange={handleChangeTitle}/>
          <TextField size="small" label="Описание" value={description} onChange={handleChangeDescription}/>
         </Stack>
        </AccordionDetails>
         <AccordionActions>
          <Button onClick={reset}>Cбросить</Button>
          <Button onClick={handleAddTodo}>Добавить</Button>
        </AccordionActions>
      </Accordion>
    </div>
  )
}

export default AddTodo