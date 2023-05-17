import React, { useState } from 'react'
import {Button, Stack, ToggleButton, ToggleButtonGroup} from '@mui/material';
function MuiButton() {
  const [format, changeFormat]=useState<string>('null')

  const handleChange = (e: React.MouseEvent<HTMLElement>, updateFormate: string) => { 
    changeFormat(updateFormate)
    console.log(updateFormate)
  }
  return (
    <div>
      <Stack direction={'column'} spacing={2}>
        <Stack direction='row' spacing={2}>
          <Button variant='text'>text</Button>
          <Button variant='contained'>contained</Button>
          <Button variant='outlined'>outlined</Button>
        </Stack>
        <Stack direction='row' spacing={2}>
          <Button variant='text' color='error'>text</Button>
          <Button variant='contained' color='secondary'>contained</Button>
          <Button variant='outlined'>outlined</Button>
        </Stack>  
        <Stack display="block" direction='row' spacing={2}>
          <Button variant='text' color='error'>text</Button>
          <Button variant='contained' color='secondary'>contained</Button>
          <Button variant='outlined'>outlined</Button>
        </Stack>   
        <ToggleButtonGroup
        value={format} onChange={handleChange} exclusive> 
          <ToggleButton value="bold" >
            bold
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      
    </div>

  )
}

export default MuiButton
