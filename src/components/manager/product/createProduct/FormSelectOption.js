import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

function FormSelectOption() {
  return (
    <FormControl>
      <FormLabel>Product Category</FormLabel>
      <Select
        placeholder="Select a pet…"
        indicator={<KeyboardArrowDown />}
        sx={{
          width: 240,
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: {
              transform: "rotate(-180deg)",
            },
          },
        }}
      >
        <Option value="">Clothes</Option>
        <Option value="">Jeans</Option>
        <Option value="">Shose</Option>
        
      </Select>
    </FormControl>
  )
}

export default FormSelectOption;