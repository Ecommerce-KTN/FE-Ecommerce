import React, {useState} from 'react'
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

function Dropdown({options}) {
  return(
    <FormControl>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: '',
            id: 'uncontrolled-native',
          }}
        >
          {options.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </NativeSelect>
      </FormControl>
  );
}

export default Dropdown;
