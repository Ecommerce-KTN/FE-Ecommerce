// Dropdown.js
import React from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

function Dropdown ( { options, onChange, selected } )
{
  return (
    <FormControl>
      <NativeSelect
        value={ selected.id }
        onChange={ ( e ) => onChange( options.find( option => option.id === +e.target.value ) ) }
        inputProps={ {
          name: '',
          id: 'uncontrolled-native',
        } }
        sx={ {
          '&::before, &::after': {
            display: 'none',
          },
        } }
      >
        { options.map( ( option ) => (
          <option key={ option.id } value={ option.id }>
            { option.label }
          </option>
        ) ) }
      </NativeSelect>
    </FormControl>
  );
}

export default Dropdown;
