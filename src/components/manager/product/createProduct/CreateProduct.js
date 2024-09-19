import React, { useState, useRef, useEffect } from 'react';
import ProductImage from './ProductImage';
import Header from './Header';
import Shipping from './Shipping';
import Category from './Category';
import Pricing from './Pricing';
import Button from '@mui/joy/Button';
import Description from './Description';
import Box from '@mui/joy/Box';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Select from "react-select";

function CreateProduct ( { closeAddingProduct } )
{
  const [ showSuccessDialog, setShowSuccessDialog ] = useState( false );

  const [ productName, setProductName ] = useState( '' );
  const [ description, setDescription ] = useState( '' );
  const [ isAddingProduct, setIsAddingProduct ] = useState( false );
  const [ category, setCategory ] = useState( '' );
  const [ subCategory, setSubCategory ] = useState( '' );
  const [ quantity, setQuantity ] = useState( 1 );
  const [ SKU, setSKU ] = useState( '' );
  const [ sellingType, setSellingType ] = useState( 'In-store selling only' );
  const [ images, setImages ] = useState( [] );
  const [ primaryImage, setPrimaryImage ] = useState( null );
  const [ weight, setWeight ] = useState( '' );
  const [ length, setLength ] = useState( '' );
  const [ width, setWidth ] = useState( '' );
  const [ breadth, setBreadth ] = useState( '' );
  const [ unitOfWeight, setUnitOfWeight ] = useState( 'kg' );
  const [ unitOfLength, setUnitOfLength ] = useState( 'cm' );
  const [ MRRPPrice, setMRRPPrice ] = useState( '' );
  const [ price, setPrice ] = useState( '' );
  const [ discount, setDiscount ] = useState( '' );
  const [selectOptions, setSelectOptions] = useState([]);
  const handleChangeCollection = (selectedOptions) => {
    setSelectOptions(selectedOptions);
  }
  // Handle changes from Description component
  const handleDescriptionChange = ( newDescription ) =>
  {
    setDescription( newDescription );
  };
  const handleCategoryOnChange = ( newCategory ) =>
  {
    setCategory( newCategory );
  };
  const handleSubCategoryOnChange = ( newSubCategory ) =>
  {
    setSubCategory( newSubCategory );
  };
  const handleQuantityOnChange = ( newQuantity ) =>
  {
    setQuantity( newQuantity );
  };
  const handleSKUOnChange = ( newSKU ) =>
  {
    setSKU( newSKU );
  };
  const handleSellingTypeOnChange = ( newSellingType ) =>
  {
    setSellingType( newSellingType );
  };
  const handleImagesOnChange = async ( newImages ) =>
  {
    setImages( newImages );
  };
  const handlePrimaryImageOnChange = ( newPrimaryImage ) =>
  {
    setPrimaryImage( newPrimaryImage );
  };
  const handleWeightOnChange = ( newWeight ) =>
  {
    setWeight( newWeight );
  };
  const handleLengthOnChange = ( newLength ) =>
  {
    setLength( newLength );
  };
  const handleWidthOnChange = ( newWidth ) =>
  {
    setWidth( newWidth );
  };
  const handleBreadthOnChange = ( newBreadth ) =>
  {
    setBreadth( newBreadth );
  };
  const handleUnitOfWeightOnChange = ( newUnitOfWeight ) =>
  {
    setUnitOfWeight( newUnitOfWeight );
  };
  const handleUnitOfLengthOnChange = ( newUnitOfLength ) =>
  {
    setUnitOfLength( newUnitOfLength );
  };
  const handleMRRPPriceOnChange = ( newMRRPPrice ) =>
  {
    setMRRPPrice( newMRRPPrice );
  };
  const handlePriceOnChange = ( newPrice ) =>
  {
    setPrice( newPrice );
  };
  const handleDiscountOnChange = ( newDiscount ) =>
  {
    setDiscount( newDiscount );
  };
  const handleProductNameChange = ( newProductName ) =>
  {
    setProductName( newProductName );
  };

  

  // Validate inputs
  const isValidProductName = productName.trim().length >= 5 && productName.trim().length <= 120;
  const isValidDescription = description.trim().length >= 200 && description.trim().length <= 1000;

  // Check if form is valid
  useEffect( () =>
  {
    setIsAddingProduct(
      isValidProductName &&
      isValidDescription &&
      price &&
      MRRPPrice &&
      discount &&
      quantity &&
      category &&
      subCategory &&
      primaryImage
    );
  }, [
    isValidProductName,
    isValidDescription,
    price,
    MRRPPrice,
    discount,
    quantity,
    category,
    subCategory,
    primaryImage,
  ] ); // Added dependencies here

  // Submit handler
  const handleSubmit = async () =>
  {
    console.log( 'primaryimage', primaryImage );

    const formData = new FormData();
    formData.append( 'name', productName );
    formData.append( 'description', description );
    formData.append( 'quantity', quantity );
    formData.append( 'sellingType', sellingType );
    formData.append( 'categoryId', category ); // Assuming category is an array of IDs
    formData.append( 'parentCategoryId', subCategory ); // Assuming subCategory is an array of IDs
    formData.append( 'costPrice', MRRPPrice );
    formData.append( 'price', price );
    formData.append( 'discountPrice', discount );

    formData.append( 'weight', weight );
    formData.append( 'length', length );
    formData.append( 'width', width );
    formData.append( 'breadth', breadth );
    formData.append( 'unitOfWeight', unitOfWeight );
    formData.append( 'unitOfLength', unitOfLength );
    formData.append( 'primaryImage', primaryImage );

    if ( images.length > 0 )
    {
      images.forEach( ( image, index ) =>
      {
        formData.append( `images[${ index }]`, image );
      } );
    }

    try
    {
      const response = await axios.post( 'http://localhost:8080/api/v1/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      } );
      console.log( 'Product added successfully!', response.data );
    } catch ( error )
    {
      console.error( 'Error adding product:', error.message );
    }

    setShowSuccessDialog( true );
    setTimeout( () =>
    {
      setShowSuccessDialog( false );
      closeAddingProduct();
    }, 3000 )
  };

  const collections = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div
      style={ {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingLeft: '3rem',
        paddingRight: '3rem',
        backgroundColor: 'white',
        height: '100%',
        overflow: 'auto',
      } }
    >
      <div style={ { marginTop: 20 } }>
        <Header closeAddingProduct={ () => closeAddingProduct } />
      </div>
      <div style={ { display: 'flex', flexDirection: 'row', backgroundColor: 'white', gap: 20 } }>
        <div style={ { width: '48%' } }>
          <div>
            <h3>Description</h3>
            <div style={ { border: '1px solid #d9d9d9', padding: '10px', borderRadius: '5px' } }>
              <Description
                onDescriptionChange={ handleDescriptionChange }
                onProductNameChange={ handleProductNameChange }
              />
            </div>
          </div>
          <Category
            onCategoryChange={ handleCategoryOnChange }
            onSubCategoryChange={ handleSubCategoryOnChange }
            onQuantityChange={ handleQuantityOnChange }
            onSKUChange={ handleSKUOnChange }
            onSellingTypeChange={ handleSellingTypeOnChange }
          />
        </div>
        <div style={ { width: '48%' } }>
          <div>
            <h3>Product Images</h3>
            <ProductImage
              onImagesChange={ handleImagesOnChange }
              onPrimaryImageChange={ handlePrimaryImageOnChange }
            />
          </div>
          <div>
            <h3>Shipping and Delivery</h3>
            <div style={ { border: '1px solid #d9d9d9' } }>
              <Shipping
                onWeightChange={ handleWeightOnChange }
                onLengthChange={ handleLengthOnChange }
                onWidthChange={ handleWidthOnChange }
                onBreadthChange={ handleBreadthOnChange }
                onUnitOfWeightChange={ handleUnitOfWeightOnChange }
                onUnitOfLengthChange={ handleUnitOfLengthOnChange }
              />
            </div>
          </div>
          <div>
            <h3>Pricing</h3>
            <div style={ { border: '1px solid #d9d9d9', paddingTop: '30px' } }>
              <Pricing
                values
                onMRRPPriceChange={ handleMRRPPriceOnChange }
                onPriceChange={ handlePriceOnChange }
                onDiscountChange={ handleDiscountOnChange }
              />
            </div>
          </div>
          {/* section collection */}
          <div>
            <Select 
            options={collections}
            value={selectOptions}
            onChange={handleChangeCollection}
            isMulti
            />
          </div>
          <div style={ { marginTop: '20px' } }>
            <Box sx={ { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' } }>
              <Button variant="outlined" color="neutral">
                Discard
              </Button>
              <Button
                disabled={ !isAddingProduct }
                onClick={ handleSubmit }
                variant="solid"
                color="primary"
              >
                Add Product
              </Button>
            </Box>
          </div>
        </div>
      </div>

      <Dialog open={ showSuccessDialog }>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>Product added successfully!</DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateProduct;