import react from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

function Reuse({props, width}){
  return (
    <>
      <FormControl sx={{ m: 1, width: {width}}} variant="outlined">
      <InputLabel shrink htmlFor="" sx={{
        top: '-14px',
        left: '-13px',
        fontSize: '18px',
      }}>{props}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-weight"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
          sx={{
            '& .MuiInputBase-input': {
              padding: '8px', 
            },
          }}
        />
      </FormControl>
    </>
  )
}

function Pricing() {
  return(
    <>
      <Reuse props={"MRRP Price"} width={"20ch"}/>
      <Reuse props={"Sale Price"} width={"20ch"}/>
      <Reuse props={"Sale Price"} width={"42ch"}/>
    </>
  )
}

export default Pricing;