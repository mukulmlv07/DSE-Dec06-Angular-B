import { Stack, TextField } from '@mui/material';
import React from 'react'

const MuiTextField = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction={"row"} spacing={2}>
          <TextField label="Name" variant='filled' />
          <TextField label="Name" variant='outlined'/>
          <TextField label="Name" variant='standard' required disabled/>
          

        </Stack>
      </Stack>
    </div>
  )
}

export default MuiTextField
