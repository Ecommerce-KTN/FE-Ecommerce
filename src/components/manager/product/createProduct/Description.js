import react from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import InputMultiline from "./Multiline";
function Description() {
  return (
    <>
      <FormControl>
        <FormLabel>Product Name</FormLabel>
        <Input placeholder="Enter product name" />
      </FormControl>

      <FormControl>
        <FormLabel>Business Description</FormLabel>
        <InputMultiline/>
        
      </FormControl>
    </>
  );
}

export default Description;
