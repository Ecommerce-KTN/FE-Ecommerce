import React, { useState, useRef } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Star as StarIcon, Delete as DeleteIcon, Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';

function ProductImage ( { onImagesChange, onPrimaryImageChange } )
{
  const inputRef = useRef( null );
  const [ openForm, setOpenForm ] = useState( false );
  const [ primaryImage, setPrimaryImage ] = useState( null );
  const [ selectedImage, setSelectedImage ] = useState( null );
  const [ images, setImages ] = useState( [] );
  const [ imageFiles, setImageFiles ] = useState( [] );

  const clickToUpload = () =>
  {
    inputRef.current.click();
  };

  const handleRemoveImage = ( image ) =>
  {
    const updatedImages = images.filter( ( img ) => img !== image );
    const updatedImageFiles = imageFiles.filter( ( img ) => img !== image );
    setImages( updatedImages );
    setImageFiles( updatedImageFiles );
    onImagesChange( updatedImageFiles );
    if ( primaryImage === image )
    {
      setPrimaryImage( null );
      onPrimaryImageChange( null );
    }
  };

  const handleFileChange = ( event ) =>
  {
    const target = event.target;
    const files = target.files;

    if ( files && files.length > 0 )
    {
      const file = files[ 0 ];
      const imageUrl = URL.createObjectURL( file );
      const updatedImages = [ ...images, imageUrl ];
      const updatedImageFiles = [ ...imageFiles, file ];

      setImages( updatedImages );
      setImageFiles( updatedImageFiles );
      onImagesChange( updatedImageFiles );

      if ( !primaryImage )
      {
        setPrimaryImage( imageUrl );
        onPrimaryImageChange( file );
      }
    }
  };

  const handleSelectImage = ( image ) =>
  {
    setSelectedImage( image );
  };

  const handleReplaceClick = () =>
  {
    setOpenForm( true );
  };

  const handleCloseForm = () =>
  {
    setOpenForm( false );
    setSelectedImage( null ); // Reset selected image when closing the dialog
  };

  const handleChoosePrimary = () =>
  {
    if ( selectedImage && selectedImage !== primaryImage )
    {
      const selectedImageFile = imageFiles[ images.indexOf( selectedImage ) ];
      setPrimaryImage( selectedImage );
      onPrimaryImageChange( selectedImageFile );
      setSelectedImage( null );
    }
    handleCloseForm();
  };

  return (
    <>
      <div
        style={ {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '15px',
          border: '1px solid #d9d9d9',
          borderRadius: '5px',
        } }
      >
        <div
          onClick={ clickToUpload }
          style={ {
            backgroundColor: '#efeff5',
            width: '8.5rem',
            height: '8.5rem',
            border: '2px solid #8080ff',
            borderStyle: 'dashed',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          } }
        >
          <p style={ { fontSize: 'small', margin: 0 } }>
            Click to upload or drag and drop
          </p>
          <input type="file" ref={ inputRef } style={ { display: 'none' } } onChange={ handleFileChange } />
        </div>

        { images.length > 0 && (
          <div
            style={ {
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              alignItems: 'flex-start',
            } }
          >
            { primaryImage && images.includes( primaryImage ) && (
              <div
                style={ {
                  position: 'relative',
                  width: '8.5rem',
                  height: '8.5rem',
                  border: '2px solid gray',
                  borderRadius: '5px',
                  overflow: 'hidden',
                } }
              >
                <img
                  src={ primaryImage }
                  alt="Primary Image"
                  style={ { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' } }
                />
                <div
                  style={ {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'yellow',
                    borderRadius: '0 0 0 10px',
                    padding: '0.2rem',
                  } }
                >
                  <StarIcon style={ { color: 'gold' } } />
                </div>
                <div
                  style={ {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0.5rem',
                    backgroundColor: 'rgba(128, 128, 128, 0.5)',
                    borderRadius: '5px',
                  } }
                >
                  <Button
                    variant="text"
                    style={ {
                      backgroundColor: 'white',
                      color: 'black',
                      borderRadius: '10px',
                      textTransform: 'none',
                    } }
                    onClick={ handleReplaceClick }
                  >
                    Replace
                  </Button>
                </div>
              </div>
            ) }

            { images.filter( image => image !== primaryImage ).slice( 0, 1 ).map( ( image, index ) => (
              <div
                key={ index }
                style={ {
                  position: 'relative',
                  width: '8.5rem',
                  height: '8.5rem',
                  border: '2px solid gray',
                  borderRadius: '5px',
                  overflow: 'hidden',
                } }
              >
                <img
                  src={ image }
                  alt={ `Image ${ index }` }
                  style={ { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' } }
                />
                <div
                  style={ {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0.5rem',
                    backgroundColor: 'rgba(128, 128, 128, 0.5)',
                    borderRadius: '5px',
                  } }
                >
                  <Button
                    variant="text"
                    style={ {
                      backgroundColor: 'white',
                      color: 'black',
                      borderRadius: '10px',
                      textTransform: 'none',
                    } }
                    onClick={ () => handleRemoveImage( image ) }
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ) ) }

            { images.length > 2 && (
              <div
                style={ {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                } }
              >
                { images.filter( image => image !== primaryImage ).slice( 1, 3 ).map( ( image, index ) => (
                  <div
                    key={ index }
                    style={ {
                      position: 'relative',
                      width: '7rem',
                      height: '3.5rem',
                      border: '2px solid gray',
                      borderRadius: '5px',
                      overflow: 'hidden',
                    } }
                  >
                    <img
                      src={ image }
                      alt={ `Additional Image ${ index }` }
                      style={ { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' } }
                    />
                    <div
                      style={ {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '0.5rem',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        borderRadius: '5px',
                      } }
                    >
                      <Button
                        variant="text"
                        style={ {
                          backgroundColor: 'white',
                          color: 'black',
                          borderRadius: '10px',
                          textTransform: 'none',
                        } }
                        onClick={ () => handleRemoveImage( image ) }
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ) ) }
              </div>
            ) }
          </div>
        ) }
      </div>



      {/* Dialog form */ }
      <Dialog open={ openForm } onClose={ handleCloseForm } fullWidth maxWidth="lg">
        <DialogTitle>
          Manage Images
          <IconButton
            edge="end"
            color="inherit"
            onClick={ handleCloseForm }
            aria-label="close"
            style={ { position: "absolute", top: "10px", right: "10px" } }
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div style={ { display: "flex", flexDirection: "row", gap: "1rem" } }>
            {/* Primary Image */ }
            <div style={ { width: "25%" } }>
              <img
                src={ primaryImage || "" }
                alt="Primary"
                style={ { width: "100%", height: "auto", borderRadius: "5px" } }
              />
            </div>

            {/* Wireframe Images */ }
            <div
              style={ {
                width: "73%",
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "0.5rem",
              } }
            >
              { images.map( ( image, index ) => (
                <div
                  key={ index }
                  style={ {
                    position: "relative",
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "5px",
                    overflow: "hidden",
                    border: selectedImage === image ? "2px solid #007bff" : "none",
                  } }
                >
                  { primaryImage === image && (
                    <div
                      style={ {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        backgroundColor: "yellow",
                        borderRadius: "0 0 0 10px",
                        padding: "0.2rem",
                      } }
                    >
                      <StarIcon style={ { color: "gold" } } />
                    </div>
                  ) }
                  <img
                    src={ image }
                    alt={ `Thumbnail ${ index }` }
                    style={ {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                      cursor: "pointer",
                    } }
                    onClick={ () => handleSelectImage( image ) }
                  />
                  { primaryImage !== image && (
                    <IconButton
                      style={ {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        backgroundColor: "white",
                        borderRadius: "0 0 0 10px",
                      } }
                      onClick={ () => handleRemoveImage( image ) }
                    >
                      <DeleteIcon />
                    </IconButton>
                  ) }
                </div>
              ) ) }
              {/* Add Button */ }
              { images.length < 10 && (
                <div
                  style={ {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px dashed gray",
                    borderRadius: "5px",
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    height: "6rem",
                    width: "6rem",
                  } }
                  onClick={ () => inputRef.current.click() }
                >
                  <AddIcon style={ { fontSize: "2rem", color: "gray" } } />
                </div>
              ) }
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={ handleCloseForm } color="primary">
            Cancel
          </Button>
          <Button
            onClick={ handleChoosePrimary }
            color="primary"
            variant={ selectedImage === primaryImage || !selectedImage ? "contained" : "outlined" }
            disabled={ selectedImage === primaryImage || !selectedImage }
          >
            Choose Primary
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProductImage;
