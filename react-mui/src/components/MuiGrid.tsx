import { Box, Grid } from '@mui/material';
import React from 'react'

const MuiGrid = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sm={3} md={1}><Box bgcolor={'primary.light'}>item 1</Box> </Grid>
        <Grid item xs={12}><Box bgcolor={'primary.light'}>item 2</Box> </Grid>
        <Grid item ><Box bgcolor={'primary.light'}>item 3</Box> </Grid>
        <Grid item ><Box bgcolor={'primary.light'}>item 4</Box> </Grid>

      </Grid>
    </div>
  )
}

export default MuiGrid
