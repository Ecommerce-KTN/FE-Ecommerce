// Shipping.js
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import restrictAlphabets from "./RestrictAlphabets";

// Define options
const weightOptions = [
  { label: "kg", id: 1 },
  { label: "pound", id: 2 },
];

const lengthOptions = [
  { label: "in", id: 1 },
  { label: "cm", id: 2 },
  { label: "m", id: 3 },
];

function Shipping ( { onWeightChange, onLengthChange, onWidthChange, onBreadthChange, onUnitOfWeightChange, onUnitOfLengthChange } )
{
  const [ unitOfWeight, setUnitOfWeight ] = useState( weightOptions[ 0 ] );
  const [ unitOfLength, setUnitOfLength ] = useState( lengthOptions[ 0 ] );
  const [ weight, setWeight ] = useState( "" );
  const [ length, setLength ] = useState( "" );
  const [ breadth, setBreadth ] = useState( "" );
  const [ width, setWidth ] = useState( "" );

  const handleDropdownChange = ( setter ) => ( unit ) =>
  {
    setter( unit );
  };

  const handleInputChange = ( setter ) => ( event ) =>
  {
    setter( event.target.value );
    console.log( event.target.value );
  };

  return (
    <div style={ { padding: "10px", paddingTop: "25px" } }>
      <FormControl sx={ { m: 2, width: "94%" } } variant="outlined">
        <InputLabel
          shrink
          sx={ {
            top: "-17px",
            left: "-13px",
            fontSize: "18px",
          } }
        >
          Items Weight
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={
            <InputAdornment style={ { width: "110px" } } position="end">
              <Dropdown
                options={ weightOptions }
                selected={ unitOfWeight }
                onChange={
                  ( unit ) =>
                  {
                    setUnitOfWeight( unit );
                    onUnitOfWeightChange( unit );
                  }
                }
              />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={ {
            "aria-label": "weight",
          } }
          sx={ {
            "& .MuiInputBase-input": {
              padding: "8px",
            },
            boxShadow: "0px 0px 1.5px rgba(0,0,0,0.5)",
            backgroundColor: "white",
          } }
          value={ weight }
          onChange={
            ( e ) =>
            {
              setWeight( e.target.value );
              onWeightChange( e.target.value );
            }
          }
          onKeyDown={ ( e ) => restrictAlphabets( e, weight ) }
        />
      </FormControl>

      <div style={ { paddingLeft: "10px" } }>
        <div
          style={ {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            paddingLeft: "10px",
            paddingRight: "15px",
            marginRight: '6px'
          } }
        >
          <p style={ { marginTop: "9px" } }>Package Size</p>
          <Dropdown
            options={ lengthOptions }
            selected={ unitOfLength }
            onChange={
              ( unit ) => 
              {
                setUnitOfLength( unit );
                onUnitOfLengthChange( unit );
              }
            }
          />
        </div>
        <div>
          { [ "Length", "Breadth", "Width" ].map( ( dimension ) => (
            <FormControl
              key={ dimension }
              sx={ { m: 1, width: "29.5%" } }
              variant="outlined"
            >
              <InputLabel
                shrink
                htmlFor=""
                sx={ {
                  top: "-17px",
                  left: "-13px",
                  fontSize: "18px",
                } }
              >
                { dimension }
              </InputLabel>
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    { unitOfLength.label }
                  </InputAdornment>
                }
                aria-describedby={ `outlined-${ dimension.toLowerCase() }-helper-text` }
                inputProps={ {
                  "aria-label": dimension.toLowerCase(),
                } }
                sx={ {
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                } }
                value={
                  dimension === "Length"
                    ? length
                    : dimension === "Breadth"
                      ? breadth
                      : width
                }
                onChange={
                  ( e ) =>
                  {
                    if ( dimension === "Length" )
                    {
                      setLength( e.target.value );
                      onLengthChange( e.target.value );
                    }
                    else if ( dimension === "Breadth" )
                    {
                      setBreadth( e.target.value );
                      onBreadthChange( e.target.value );
                    }
                    else
                    {
                      setWidth( e.target.value );
                      onWidthChange( e.target.value );
                    }
                  }

                }
                onKeyDown={ ( e ) =>
                  restrictAlphabets(
                    e,
                    dimension === "Length"
                      ? length
                      : dimension === "Breadth"
                        ? breadth
                        : width
                  )
                }
              />
            </FormControl>
          ) ) }
        </div>
      </div>
    </div>
  );
}

export default Shipping;
