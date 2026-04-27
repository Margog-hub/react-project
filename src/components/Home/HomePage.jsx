import React from 'react';
import  Typography  from '@mui/material/Typography';

function HomePage(props) {
  return (
    <div>
      <Typography>{props.username}</Typography>
    </div>
  )
}

export default HomePage