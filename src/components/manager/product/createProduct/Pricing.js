import react, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import restrictAlphabets from './RestrictAlphabets';

function Reuse ( { props, width } )
{
  const [ inputValue, setInputValue ] = useState( "" );
  const handleChange = ( event ) =>
  {
    setInputValue( event.target.value );
  };
  return (
    <>
      <FormControl sx={ { m: 3, width: { width }, marginBottom: "20px" } } variant="outlined">
        <InputLabel shrink htmlFor="" sx={ {
          top: '-14px',
          left: '-13px',
          fontSize: '18px',
        } }>{ props }</InputLabel>
        <OutlinedInput
          id="outlined-adornment-weight"
          startAdornment={ <InputAdornment position="start">$</InputAdornment> }
          aria-describedby="outlined-weight-helper-text"
          inputProps={ {
            'aria-label': 'weight',
          } }
          sx={ {
            '& .MuiInputBase-input': {
              padding: '8px',
            },
          } }
          value={ inputValue }
          onChange={ handleChange }
          onKeyDown={ ( e ) => restrictAlphabets( e, inputValue ) }
        />
      </FormControl>
    </>
  )
}

function Pricing ()
{
  return (
    <>
      <Reuse props={ "MRRP Price" } width={ "41%" } />
      <Reuse props={ "Sale Price" } width={ "40%" } />
      <Reuse props={ "Sale Price" } width={ "90%" } />
    </>
  )
}

export default Pricing;