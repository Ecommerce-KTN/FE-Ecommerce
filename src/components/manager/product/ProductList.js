import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CreateProduct from './createProduct/CreateProduct';
import ProductCard from './ProductCard';
import axios from 'axios';

function ProductList ()
{
  const [ products, setProducts ] = useState( [] );
  const [ isAddingProduct, setIsAddingProduct ] = useState( false );
  const [ isLoading, setIsLoading ] = useState( true ); // Loading state

  useEffect( () =>
  {
    const getAllProducts = async () =>
    {
      try
      {
        const response = await axios.get( 'http://localhost:8080/api/v1/products' );

        const products = response.data;

        console.log( 'Fetched products:', products );

        // Cập nhật state với dữ liệu đã lấy về
        setProducts( products );

      } catch ( error )
      {
        console.error( 'Error fetching products:', error.message );
      } finally
      {
        // Sau khi hoàn thành (dù thành công hay thất bại), tắt trạng thái loading
        setIsLoading( false );
      }
    };

    getAllProducts();
  }, [] ); // Sử dụng dependency là mảng rỗng để chỉ chạy useEffect một lần khi component được mount

  if ( isAddingProduct )
  {
    return <CreateProduct closeAddingProduct={ () => setIsAddingProduct( false ) } />;
  }

  return (
    <div style={ { display: 'flex', flexDirection: 'column', overflow: 'auto', width: '100%', height: '100%' } }>
      <div style={ { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '82%', marginTop: '30px', alignItems: 'center', marginLeft: '50px', paddingLeft: '30px' } }>
        <h3>Product List</h3>
        <Button variant="contained" color="primary" onClick={ () => setIsAddingProduct( true ) }>Add Product</Button>
      </div>
      { isLoading ? (
        <p>Loading...</p> // Hiển thị loading khi đang tải dữ liệu
      ) : (
        products.map( product => ( // Hiển thị tất cả sản phẩm
          <ProductCard
            key={ product.id }
            product={ {
              name: product.name,
              image: product.primaryImage,
              category: product.parentCategoryName,
              price: product.price,
              quantity: product.quantity
            } }
          />
        ) )
      ) }
    </div>
  );
}

export default ProductList;
