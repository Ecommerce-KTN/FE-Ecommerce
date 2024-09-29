import React, { useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import {
  Star as StarIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

function ProductImage({ onImagesChange, onPrimaryImageChange }) {
  const inputRef = useRef(null);
  const [openForm, setOpenForm] = useState(false);
  const [primaryImage, setPrimaryImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  // Thêm state mới để lưu file primary và các file ảnh
  const [primaryFile, setPrimaryFile] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);

  // console.log("primaryFile", primaryFile);
  // console.log("imageFiles", imageFiles);

  // console.log("images", images);

  const clickToUpload = () => {
    inputRef.current.click();
  };

  const handleRemoveImage = (image) => {
    const updatedImages = images.filter((img) => img !== image);
    const updatedFiles = imageFiles.filter(
      (file, index) => index !== images.indexOf(image)
    );
    setImages(updatedImages);
    setImageFiles(updatedFiles);
    onImagesChange(updatedFiles);
    if (primaryImage === image) {
      setPrimaryImage(null);
      setPrimaryFile(null);
      onPrimaryImageChange(null);
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const updatedImages = files.map((file) => URL.createObjectURL(file));
    const updatedFiles = [...imageFiles, ...files];

    setImages((prevImages) => [...prevImages, ...updatedImages]);
    setImageFiles(updatedFiles);

    if (!primaryImage) {
      setPrimaryImage(updatedImages[0]);
      setPrimaryFile(updatedFiles[0]);
      onPrimaryImageChange(updatedFiles[0]);
    }

    onImagesChange([...imageFiles, ...updatedFiles]);
  };

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const handleReplaceClick = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setSelectedImage(null); // Reset selected image when closing the dialog
  };

  const handleChoosePrimary = () => {
    if (selectedImage && selectedImage !== primaryImage) {
      setPrimaryImage(selectedImage);
      const selectedIndex = images.indexOf(selectedImage);
      setPrimaryFile(imageFiles[selectedIndex]); // Cập nhật primaryFile
      onPrimaryImageChange(imageFiles[selectedIndex]);
      setSelectedImage(null);
    }
    handleCloseForm();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "15px",
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
        }}
      >
        <div
          onClick={clickToUpload}
          style={{
            backgroundColor: "#efeff5",
            width: "95%",
            height: "8.5rem",
            border: "2px solid #8080ff",
            borderStyle: "dashed",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "small", margin: 0 }}>
            Click to upload or drag and drop
          </p>
          <input
            multiple
            type="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        {images.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            {primaryImage && images.includes(primaryImage) && (
              <div
                style={{
                  position: "relative",
                  width: "8.5rem",
                  height: "8.5rem",
                  border: "2px solid gray",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={primaryImage}
                  alt="Primary Image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "yellow",
                    borderRadius: "0 0 0 10px",
                    padding: "0.2rem",
                  }}
                >
                  <StarIcon style={{ color: "gold" }} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    padding: "0.5rem",
                    backgroundColor: "rgba(128, 128, 128, 0.5)",
                    borderRadius: "5px",
                  }}
                >
                  <Button
                    variant="text"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "10px",
                      textTransform: "none",
                    }}
                    onClick={handleReplaceClick}
                  >
                    Replace
                  </Button>
                </div>
              </div>
            )}

            {images
              .filter((image) => image !== primaryImage)
              .slice(0, 1)
              .map((image, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    width: "8.5rem",
                    height: "8.5rem",
                    border: "2px solid gray",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      padding: "0.5rem",
                      backgroundColor: "rgba(128, 128, 128, 0.5)",
                      borderRadius: "5px",
                    }}
                  >
                    <Button
                      variant="text"
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "10px",
                        textTransform: "none",
                      }}
                      onClick={() => handleRemoveImage(image)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

            {images.length > 2 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {images
                  .filter((image) => image !== primaryImage)
                  .slice(1, 3)
                  .map((image, index) => (
                    <div
                      key={index}
                      style={{
                        position: "relative",
                        width: "7rem",
                        height: "3.5rem",
                        border: "2px solid gray",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Additional Image ${index}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          padding: "0.5rem",
                          backgroundColor: "rgba(128, 128, 128, 0.5)",
                          borderRadius: "5px",
                        }}
                      >
                        <Button
                          variant="text"
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "10px",
                            textTransform: "none",
                          }}
                          onClick={() => handleRemoveImage(image)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Dialog form */}
      <Dialog open={openForm} onClose={handleCloseForm} fullWidth maxWidth="lg">
        <DialogTitle>
          Manage Images
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseForm}
            aria-label="close"
            style={{ position: "absolute", right: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h4>Select Primary Image</h4>
            {images.map((image) => (
              <div
                key={image}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border:
                    selectedImage === image
                      ? "2px solid blue"
                      : "2px solid transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleSelectImage(image)}
              >
                <img
                  src={image}
                  alt="Image Preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={handleChoosePrimary} disabled={!selectedImage}>
            Choose as Primary
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProductImage;
