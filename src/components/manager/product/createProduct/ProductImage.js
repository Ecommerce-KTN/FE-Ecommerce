import { useState, useRef } from "react";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Close as CloseIcon, Star as StarIcon, Delete as DeleteIcon, Add as AddIcon } from "@mui/icons-material";

function ProductImage ()
{
  const inputRef = useRef( null );
  const [ openForm, setOpenForm ] = useState( false );
  const [ primaryImage, setPrimaryImage ] = useState( img1 );
  const [ selectedImage, setSelectedImage ] = useState( null );
  const [ images, setImages ] = useState( [ img1, img2 ] );

  const clickToUpload = () =>
  {
    inputRef.current.click();
  };

  const handleRemoveImage = ( image ) =>
  {
    setImages( images.filter( img => img !== image ) );
    if ( image === primaryImage )
    {
      setPrimaryImage( null );
    }
  };

  const handleFileChange = ( event ) =>
  {
    const file = event.target.files[ 0 ];
    if ( file )
    {
      // Add file to images list (for demonstration, using URL.createObjectURL)
      setImages( [ ...images, URL.createObjectURL( file ) ] );
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
      setPrimaryImage( selectedImage );
      setSelectedImage( null );
    }
  };

  return (
    <>
      <div
        style={ {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingLeft: "15px",
          paddingRight: "15px",
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
        } }
      >
        <div
          onClick={ clickToUpload }
          style={ {
            backgroundColor: "#efeff5",
            width: "9rem",
            height: "9rem",
            border: "2px solid #8080ff",
            borderStyle: "dashed",
            borderRadius: "5px",
            cursor: "pointer",
            margin: '12px',
            justifyContent: "center",
            alignItems: "center",
          } }
        >
          <p
            style={ {
              textAlign: "center",
              fontSize: "small",
              marginTop: "2.5rem"
            } }
          >
            Click to upload or drag and drop
          </p>
          <input type="file" ref={ inputRef } style={ { display: "none" } } onChange={ handleFileChange } />
        </div>
        <div style={ {
          position: 'relative',
          width: '9rem',
          height: '9rem',
          border: '2px solid gray',
          borderStyle: 'inherit',
          borderRadius: '5px',
          overflow: 'hidden',
        } }>
          <img src={ primaryImage } alt="Sample" style={ { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' } } />
          <div style={ {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          } }>
            <div style={ {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            } }>
              <Button
                variant="text"
                style={ { backgroundColor: 'white', color: 'black', borderRadius: '10px', textTransform: "none" } }
                onClick={ handleReplaceClick }
              >
                Replace
              </Button>
              <Button
                variant="text"
                style={ { backgroundColor: 'white', color: 'black', borderRadius: '10px', textTransform: "none" } }
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
        <div style={ {
          width: '9rem',
          height: '9rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        } }>
          <div style={ {
            width: '100%',
            height: '50%',
            overflow: 'hidden',
            borderRadius: '5px',
          } }>
            <img src={ img2 } alt="Sample" style={ {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            } } />
          </div>
          <div style={ {
            width: '100%',
            height: '50%',
            overflow: 'hidden',
            borderRadius: '5px',
          } }>
            <img src={ img2 } alt="Sample" style={ {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            } } />
          </div>
        </div>
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
            style={ { position: 'absolute', top: 0, right: 0 } }
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div style={ { display: 'flex', flexDirection: 'row', gap: '1rem', } }>
            {/* Primary Image */ }
            <div style={ { width: '25%' } }>
              <img src={ primaryImage || img1 } alt="Primary" style={ { width: '100%', height: 'auto', borderRadius: '5px' } } />
            </div>

            {/* Wireframe Images */ }
            <div style={ {
              width: '73%',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gridTemplateRows: `repeat(${ Math.ceil( ( images.length + 1 ) / 5 ) }, 1fr)`,
              gap: '0.5rem',
              position: 'relative'
            } }>
              { images.map( ( image, index ) => (
                <div key={ index } style={ {
                  position: 'relative',
                  width: '6rem',
                  height: '6rem',
                  borderRadius: '5px',
                  overflow: 'hidden',
                  border: selectedImage === image ? '2px solid #007bff' : 'none',
                } }>
                  { primaryImage === image && (
                    <div style={ {
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: 'yellow',
                      borderRadius: '0 0 0 10px',
                      padding: '0.2rem',
                    } }>
                      <StarIcon style={ { color: 'gold' } } />
                    </div>
                  ) }
                  <img src={ image } alt={ `Thumbnail ${ index }` } style={ {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  } } onClick={ () => handleSelectImage( image ) } />
                  { primaryImage !== image && (
                    <IconButton
                      style={ {
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        backgroundColor: 'white',
                        borderRadius: '0 0 0 10px',
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
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px dashed gray',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    backgroundColor: '#f5f5f5',
                    height: '6rem',
                    width: '6rem',
                    gridColumn: 'span 1 / auto',
                    gridRow: `auto / span ${ Math.ceil( ( images.length + 1 ) / 5 ) }`
                  } }
                  onClick={ () => inputRef.current.click() }
                >
                  <AddIcon />
                </div>
              ) }
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={ handleCloseForm } color="primary">Cancel</Button>
          <Button
            onClick={ handleChoosePrimary }
            color="primary"
            disabled={ primaryImage === selectedImage }
          >
            Choose Primary
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProductImage;
