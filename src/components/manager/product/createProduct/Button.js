import React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

function button() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Button variant="outlined" color="neutral">Discard</Button>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button variant="outlined">Schedule</Button>
          <Button variant="solid" type="submit">Add Product</Button>
        </Box>
      </Box>
    </>
  );
}

export default button;

