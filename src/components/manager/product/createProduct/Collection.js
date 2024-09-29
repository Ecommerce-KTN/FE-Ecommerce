import { useState, useEffect } from "react";
import Select, { components } from "react-select";

// const collections = [
//   { value: "living-room", label: "Living Room Collection" },
//   { value: "bedroom", label: "Bedroom Collection" },
//   { value: "dining-room", label: "Dining Room Collection" },
//   { value: "office", label: "Office Furniture Collection" },
//   { value: "outdoor", label: "Outdoor Furniture Collection" },
// ];

const CheckboxOption = (props) => {
  return (
    <components.Option {...props}>
      <input
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null} // Ngăn không cho checkbox tự thay đổi
        style={{ marginRight: 8 }}
      />
      {props.label}
    </components.Option>
  );
};

const Collections = ({ onCollectionChange }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const getCollections = async () => {
      try {
        const response = await fetch(
          "https://be-ecommerce-gaa8.onrender.com/api/v1/collections"
        );
        const data = await response.json();
        const options = data.data.map((collection) => ({
          value: collection.id,
          label: collection.name,
        }));
        setCollections(options);
      } catch (error) {
        console.log(error);
      }
    };
    getCollections();
  }, []);

  const [selectOptions, setSelectOptions] = useState([]);

  const handleChangeCollection = (selectedOptions) => {
    setSelectOptions(selectedOptions); // Cập nhật giá trị khi người dùng chọn
  };

  const [optionValues, setOptionValues] = useState([]);

  useEffect(() => {
    if (selectOptions && selectOptions.length > 0) {
      setOptionValues(selectOptions.map((item) => item.value));
    } else {
      setOptionValues([]);
    }
  }, [selectOptions]);

  useEffect(() => {
    onCollectionChange(optionValues);
  }, [optionValues]);

  // console.log("options", optionValues);

  return (
    <div className="mt-5">
      <h3 className="font-bold mb-2 text-lg mt-5">Collection</h3>
      <Select
        options={collections}
        value={selectOptions}
        onChange={handleChangeCollection}
        isMulti
        closeMenuOnSelect={false} // Để dropdown không đóng khi chọn
        hideSelectedOptions={false} // Hiển thị checkbox cho các tùy chọn đã chọn
        components={{ Option: CheckboxOption }} // Sử dụng custom option với checkbox
      />
    </div>
  );
};

export default Collections;
