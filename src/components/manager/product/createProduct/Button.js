import react from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

function button(){
  return(
    <>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Button variant="outlined" color="neutral">Discard</Button>
        <Button variant="outlined">Schedule</Button>
        <Button variant="solid">Add Product</Button>
      </Box>
    </>
  )
}
export default button;