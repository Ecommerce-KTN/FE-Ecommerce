import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid2";
import VariantImage from "./components/VariantImage";

// combine each color, ram and storage
const generateCombinations = (data) => {
  const combinations = [];
  const colors = data.Color && data.Color.length > 0 ? data.Color : [null];
  const rams = data.Ram && data.Ram.length > 0 ? data.Ram : [null];
  const storages =
    data.Storage && data.Storage.length > 0 ? data.Storage : [null];

  colors.forEach((color) => {
    rams.forEach((ram) => {
      storages.forEach((storage) => {
        combinations.push({
          color,
          ram,
          storage,
        });
      });
    });
  });

  return combinations;
};

const price = [
  { id: "price", label: "Price" },
  { id: "sale-price", label: "Sale Price" },
  { id: "mrsp-price", label: "MRSP Price" },
  { id: "quantity", label: "Quantity" },
];

const otherFields = ["SKU", "Quantity", "Price", "Sale Price", "MRSP Price"];
const variantOptions = ["Color", "Ram", "Storage"];

const AddVariant = ({ onClose }) => {
  const [values, setValues] = useState({});
  console.log("values", values); //{Color: ["Blue", "Red"]}

  const [selectedVariant, setSelectedVariant] = useState("");
  console.log("selectedVariant", selectedVariant); // "Color", "Ram", "Storage"

  const [selectedValues, setSelectedValues] = useState({});
  console.log("selectedValues", selectedValues); //{Blue: [image1, image2]}

  // change add image when change primary variant
  const handleVariantChange = (event) => {
    const selected = event.target.value; //(value: radio option)
    setSelectedVariant(selected);

    const newSelectedValues = values[selected] || [];

    const updatedSelectedValues = newSelectedValues.reduce((acc, value) => {
      acc[value] = [];
      return acc;
    }, {});

    setSelectedValues(updatedSelectedValues);
    console.log("Selected Variant change:", selected);
    console.log("selectedValues change", selectedValues);
  };

  //set values and change add image when change values of variant change
  const handleChange = (option, newValue) => {
    setValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        [option]: newValue,
      };

      if (option === selectedVariant) {
        const newSelectedValues = newValue.reduce((acc, value) => {
          acc[value] = [];
          return acc;
        }, {});

        setSelectedValues(newSelectedValues);
      }

      return updatedValues;
    });
  };

  const [tempPriceValues, setTempPriceValues] = useState({
    price: "",
    "sale-price": "",
    "mrsp-price": "",
    quantity: "",
  });

  const [priceValues, setPriceValues] = useState({
    price: "",
    "sale-price": "",
    "mrsp-price": "",
    quantity: "",
  });

  // save values when insert price field but not apply
  const handleTempPriceChange = (id, value) => {
    setTempPriceValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleApplyAll = () => {
    setPriceValues(tempPriceValues);
  };

  const rows = generateCombinations(values);
  console.log("row", rows); //{"color": "blue", "ram": "4g", "storage": "8g"}

  const headers = Object.keys(values).filter((key) => values[key].length > 0);
  console.log("headers", headers); //["Color","Ram", "Storage"]

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-x-auto">
      <div className="relative bg-white w-[90%] mx-auto my-5 p-10 rounded-lg shadow-lg">
        <button
          className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-300 text-white px-4 py-1 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Add Variant</h2>

        {/* Select Sections */}
        <div className="flex flex-col gap-4 items-center">
          <p className="self-start text-lg font-semibold">Primary Variant</p>
          {variantOptions.map((option) => (
            <Grid container className="w-[70%] flex items-center">
              <Grid size={1}>
                <input
                  type="radio"
                  name="variant"
                  value={option} // Giá trị của radio
                  checked={selectedVariant === option} // Kiểm tra nếu radio này đã được chọn
                  onChange={handleVariantChange} // Gọi hàm khi thay đổi
                />
              </Grid>
              <Grid size={2}>
                <p className="text-base font-semibold">{option}</p>
              </Grid>
              <Grid size={9}>
                <Autocomplete
                  size="small"
                  multiple
                  freeSolo
                  options={[]}
                  value={values[option] || []}
                  onChange={(event, newValue) => {
                    handleChange(option, newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                />
              </Grid>
            </Grid>
          ))}
        </div>

        {/* Image Upload Section */}
        <div>
          <p className="text-lg font-semibold">Variant Images</p>
          <VariantImage
            files={selectedValues}
            setFiles={setSelectedValues}
          ></VariantImage>
        </div>

        {/* product variant */}
        <div className="flex justify-between my-10">
          <div className="text-lg font-semibold">Product Variant</div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-300 text-white py-2 px-3 rounded-lg"
              onClick={handleApplyAll}
            >
              Apply for all
            </button>
          </div>
        </div>

        {/* product */}
        <div className="flex justify-between">
          {price.map((item) => (
            <div className="flex gap-3 items-center">
              <div>{item.label}</div>
              <input
                type="number"
                value={tempPriceValues[item.id]}
                onChange={(e) => handleTempPriceChange(item.id, e.target.value)}
                className="px-3 py-2 rounded-lg border-2 border-gray-200 w-7/12"
              ></input>
            </div>
          ))}
        </div>

        {/* table */}
        {Object.values(values).some((val) => val && val.length > 0) && (
          <table className="w-full border-collapse border border-gray-300 mt-8 table-fixed">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="border border-gray-300 p-2">
                    {header}
                  </th>
                ))}
                {otherFields.map((item) => (
                  <th className="border border-gray-300 p-2">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  {headers.map((header, headerIndex) => (
                    <td
                      key={headerIndex}
                      className="border border-gray-300 p-2"
                    >
                      {row[header.toLowerCase()]}{" "}
                    </td>
                  ))}

                  {otherFields.map((field, index) => (
                    <td className="border border-gray-300 p-2">
                      <TextField
                        className="w-full"
                        size="small"
                        type="number"
                        value={
                          priceValues[field.toLowerCase().replace(" ", "-")]
                        }
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* <div style={{ marginTop: "20px" }}> */}
        <div className="flex justify-end gap-4 mt-[20px]">
          <button className=" px-3 py-2 border-2 rounded-lg hover:bg-gray-300 hover:text-white">
            Discard
          </button>
          <button
            // disabled={!isAddingProduct}
            // onClick={handleSubmit}
            variant="contained"
            className="bg-blue-500 hover:bg-blue-300 text-white px-3 py-2 rounded-lg"
          >
            Add Variant
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AddVariant;
