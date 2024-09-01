import { Button } from '@mui/material'
import React, { useState } from 'react'
import CreateProduct from './createProduct/CreateProduct';

function ProductList ()
{
  const [ isAddingProduct, setIsAddingProduct ] = useState( false );

  if ( isAddingProduct )
  {
    return <CreateProduct closeAddingProduct={ () => setIsAddingProduct( false ) } />;
  }
  return (
    <div>Product List
      <Button variant="contained" color="primary" onClick={ () => setIsAddingProduct( true ) }>Add Product</Button>
    </div>

  )
}

export default ProductList