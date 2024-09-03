import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import restrictAlphabets from './RestrictAlphabets';

function Reuse ( { label, width, value, onChange } )
{
  return (
    <>
      <FormControl sx={ { m: 3, width: width, marginBottom: "20px" } } variant="outlined">
        <InputLabel
          shrink
          htmlFor=""
          sx={ {
            top: '-14px',
            left: '-13px',
            fontSize: '18px',
          } }
        >
          { label }
        </InputLabel>
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
          value={ value }
          onChange={ onChange }
          onKeyDown={ ( e ) => restrictAlphabets( e, value ) }
        />
      </FormControl>
    </>
  );
}

function Pricing ( { onPriceChange, onDiscountChange, onMRRPPriceChange } )
{
  const [ price, setPrice ] = useState( "" );
  const [ discount, setDiscount ] = useState( "" );
  const [ MRRPPrice, setMRRPPrice ] = useState( "" );

  return (
    <>
      <Reuse
        label="MRRP Price"
        width="41%"
        value={ MRRPPrice }
        onChange={ ( e ) =>
        {
          setMRRPPrice( e.target.value );
          onMRRPPriceChange( e.target.value );
        } }
      />
      <Reuse
        label="Sale Price"
        width="40%"
        value={ discount }
        onChange={ ( e ) =>
        {
          setDiscount( e.target.value );
          onDiscountChange( e.target.value );
        } }
      />
      <Reuse
        label="Price"
        width="90%"
        value={ price }
        onChange={ ( e ) =>
        {
          setPrice( e.target.value );
          onPriceChange( e.target.value );
        } }
      />
    </>
  );
}

export default Pricing;
