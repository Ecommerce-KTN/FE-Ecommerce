import React, { useState } from "react";
import Dropdown from "./Dropdown";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import restrictAlphabets from "./RestrictAlphabets";

function PackageSize({ props }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, width: "13ch" }} variant="outlined">
        <InputLabel
          shrink
          htmlFor=""
          sx={{
            top: "-17px",
            left: "-13px",
            fontSize: "18px",
          }}
        >
          {props}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">in</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          sx={{
            "& .MuiInputBase-input": {
              padding: "8px",
            },
          }}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={(e) => restrictAlphabets(e, inputValue)}
        />
      </FormControl>
    </>
  );
}

function Shipping() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [idWeight, setIDWeight] = useState(1);
  const optionsWeight = [
    { label: "kg", id: 1 },
    { label: "pound", id: 2 },
  ];

  function selectIDWeight(e) {
    setIDWeight(e.target.value);
  }

  const [idLength, setIDLength] = useState(1);
  const optionsLength = [
    { label: "in", id: 1 },
    { label: "cm", id: 2 },
    { label: "m", id: 3 },
  ];

  function selectIDLength(e) {
    setIDLength(e.target.value);
  }

  return (
    <>
      <div
        style={{ padding: "10px", width: "25rem", paddingTop: "25px" }}
      >
        {/*<input type="text" style={{border: "none", outline: "none"}}></input>*/}
        <FormControl sx={{ m: 1, width: "43ch" }} variant="outlined">
          <InputLabel
            shrink
            sx={{
              top: "-17px",
              left: "-13px",
              fontSize: "18px",
            }}
          >
            Items Weight
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                <Dropdown options={optionsWeight} />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            sx={{
              "& .MuiInputBase-input": {
                padding: "8px",
              },

              boxShadow: "0px 0px 1.5px rgba(0,0,0,0.5)",
              backgroundColor: "white",
            }}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={(e) => restrictAlphabets(e, inputValue)}
          />
        </FormControl>
      </div>

      <div style={{paddingLeft: "10px"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            paddingLeft: "10px",
            paddingRight: "15px"
          }}
        >
          <p style={{marginTop: "9px"}}>Package Size</p>
          <Dropdown options={optionsLength} />
        </div>
        <PackageSize props={"Length"} />
        <PackageSize props={"Breadth"} />
        <PackageSize props={"Width"} />
      </div>
    </>
  );
}

export default Shipping;
