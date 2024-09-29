import Dropzone from "react-dropzone";

const VariantImage = ({ files, setFiles }) => {
  const MAX_FILES = 5;

  const handleDrop = (key, acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      alert(
        "Some files were rejected. Only images (.jpg, .jpeg, .png) are allowed."
      );
      return;
    }

    if (files[key].length + acceptedFiles.length > MAX_FILES) {
      alert(`You can only upload up to ${MAX_FILES} images.`);
      return;
    }

    setFiles((prevState) => ({
      ...prevState,
      [key]: [
        ...prevState[key], // Keep the previous files
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ],
    }));
  };

  const handleDelete = (key, name) => {
    setFiles((prevState) => ({
      ...prevState,
      [key]: prevState[key].filter((file) => file.name !== name),
    }));
  };
  // console.log("files", files);

  return (
    <div>
      {Object.keys(files).map((key) => (
        <div key={key} className="flex gap-10 w-full justify-between my-4">
          <div className="w-1/4">
            <p className="border px-6 py-2 w-full rounded-md">{key}</p>
          </div>
          <div className="w-3/4 border h-[130px] p-4 flex gap-4">
            <Dropzone
              onDrop={(acceptedFiles, rejectedFiles) =>
                handleDrop(key, acceptedFiles, rejectedFiles)
              }
              multiple
              accept={{
                "image/png": [".png"],
                "image/jpeg": [".jpeg"],
                "image/jpg": [".jpg"],
              }}
              maxFiles={MAX_FILES}
              maxSize={10 * 1024 * 1024}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div
                  {...getRootProps()}
                  className="border border-dashed	 w-1/5 h-full cursor-pointer"
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <div className="flex items-center gap-5 justify-center text-gray-500 h-full">
                      <span className="px-2 text-gray-500">Add +</span>
                    </div>
                  )}
                </div>
              )}
            </Dropzone>

            {files[key].length > 0 &&
              files[key].map((image, index) => (
                <div className="border w-1/5 h-full relative">
                  <img
                    src={image.preview}
                    className="object-cover w-full h-full rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleDelete(key, image.name)}
                    className="absolute top-0 right-0 py-2 px-3 bg-gray-200 text-sm rounded-full hover:bg-gray-500 hover:text-white"
                  >
                    X
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariantImage;
