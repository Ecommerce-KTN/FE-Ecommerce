import React, { useState, useRef, useEffect } from 'react';
import ProductImage from './ProductImage';
import Header from './Header';
import Shipping from './Shipping';
import Category from './Category';
import Pricing from './Pricing';
import Button from '@mui/joy/Button';
import Description from './Description';
import Box from '@mui/joy/Box';

function CreateProduct ( { closeAddingProduct } )
{
  const width = useRef( window.innerWidth ).current;
  const [ productName, setProductName ] = useState( '' );
  const [ description, setDescription ] = useState( '' );
  const [ isAddingProduct, setIsAddingProduct ] = useState( false );

  // Handle changes from Description component
  const handleDescriptionChange = ( newDescription ) =>
  {
    setDescription( newDescription );
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
    setIsAddingProduct( isValidProductName && isValidDescription );
  }, [ isValidProductName, isValidDescription ] ); // Added dependencies here

  // Submit handler
  const handleSubmit = () =>
  {

    console.log( 'Product Name:', productName );
    console.log( 'Description:', description );

  };

  return (
    <div style={ { display: "flex", flexDirection: "column", width: width, paddingLeft: "3rem", paddingRight: "3rem", backgroundColor: "white", height: '100%', overflow: 'auto' } }>
      <div style={ { marginTop: 20 } }>
        <Header closeAddingProduct={ () => closeAddingProduct } />
      </div>
      <div style={ { display: "flex", flexDirection: "row", backgroundColor: "white", gap: 20 } }>
        <div style={ { width: "48%" } }>
          <div>
            <h3>Description</h3>
            <div style={ { border: "1px solid #d9d9d9", padding: "10px", borderRadius: "5px" } }>
              <Description
                onDescriptionChange={ handleDescriptionChange }
                onProductNameChange={ handleProductNameChange }
              />
            </div>
          </div>
          <Category />
        </div>
        <div style={ { width: "48%" } }>
          <div>
            <h3>Product Images</h3>
            <ProductImage />
          </div>
          <div>
            <h3>Shipping and Delivery</h3>
            <div style={ { border: "1px solid #d9d9d9" } }>
              <Shipping />
            </div>
          </div>
          <div>
            <h3>Pricing</h3>
            <div style={ { border: "1px solid #d9d9d9", paddingTop: "30px" } }>
              <Pricing values />
            </div>
          </div>
          <div style={ { marginTop: '20px' } }>
            <Box sx={ { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' } }>
              <Button variant="outlined" color="neutral">Discard</Button>
              <Box sx={ { display: 'flex', gap: 3 } }>
                <Button variant="outlined">Schedule</Button>
                <Button
                  variant="solid"
                  type="button"
                  disabled={ !isAddingProduct }
                  onClick={ handleSubmit }
                >
                  Add Product
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
