import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import restrictAlphabets from './RestrictAlphabets';
function Reuse({ label, width, value, onChange, error, helperText }) {
  return (
    <>
      <FormControl
        sx={{ m: 3, width: width, marginBottom: "20px" }}
        variant="outlined"
        error={error} // Thêm prop error vào FormControl
      >
        <InputLabel
          shrink
          htmlFor=""
          sx={{
            top: '-14px',
            left: '-13px',
            fontSize: '18px',
          }}
        >
          {label}
        </InputLabel>
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
          value={value}
          onChange={onChange}
          onKeyDown={(e) => restrictAlphabets(e, value)}
        />
        {error && <FormHelperText>{helperText}</FormHelperText>} {/* Hiển thị thông báo lỗi */}
      </FormControl>
    </>
  );
}
function Pricing({ onPriceChange, onDiscountChange, onMRRPPriceChange }) {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [MRRPPrice, setMRRPPrice] = useState("");
  const [error, setError] = useState(false); // Trạng thái để lưu lỗi
  const handleMRRPPriceChange = (value) => {
    setMRRPPrice(value);
    onMRRPPriceChange(value);
    // Kiểm tra nếu MRRP Price lớn hơn Price
    if (parseFloat(value) > parseFloat(price)) {
      setError(true); // Đặt lỗi nếu MRRP Price lớn hơn Price
    } else {
      setError(false); // Bỏ lỗi nếu điều kiện thỏa mãn
    }
  };
  return (
    <>
      <Reuse
        label="MRRP Price"
        width="41%"
        value={MRRPPrice}
        onChange={(e) => handleMRRPPriceChange(e.target.value)}
        error={error} // Truyền trạng thái lỗi vào Reuse
        helperText="MRRP Price must be less than Price" // Thông báo lỗi
      />
      <Reuse
        label="Sale Price"
        width="40%"
        value={discount}
        onChange={(e) => {
          setDiscount(e.target.value);
          onDiscountChange(e.target.value);
        }}
      />
      <Reuse
        label="Price"
        width="90%"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
          onPriceChange(e.target.value);
        }}
      />
    </>
  );
}
export default Pricing;