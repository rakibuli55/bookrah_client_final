import { useState } from "react";
import Dropzone from "react-dropzone";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCloudUploadOutline } from "react-icons/io5";

const GalleryPhotoUploader = ({ value, onChange }) => {
  const [previews, setPreviews] = useState(
    value ? value.map((file) => URL.createObjectURL(file)) : []
  );

  const handleDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.filter(
      (file) => file.size <= 2 * 1024 * 1024
    );

    if (newFiles.length !== acceptedFiles.length) {
      toast.error("Some files exceed 2 MB and were not uploaded.");
    }

    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    onChange([...value, ...newFiles]);
    setPreviews([...previews, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    onChange(newFiles);

    const newPreviews = [...previews];
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
  };

  return (
    <div className="flex c-lg:flex-row c-xsm:flex-col gap-6">
      <div className="c-lg:w-[60%]">
        <Dropzone
          onDrop={handleDrop}
          accept={{
            "image/svg+xml": [".svg"],
            "image/png": [".png"],
            "image/jpeg": [".jpg", ".jpeg"],
          }}
          maxFiles={10}
          multiple={true}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              {...getRootProps()}
              className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <IoCloudUploadOutline size={"23"} />
                  </div>
                  <p className="text-sm text-primary">Drop the files here...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                    <IoCloudUploadOutline size={"23"} />
                  </div>
                  <div className="text-sm mb-1">
                    <span className="text-primary font-medium">
                      Click to upload
                    </span>
                    <span className="text-gray-600"> or drag and drop</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    SVG, PNG, JPG (max: 2 MB each)
                  </div>
                </div>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      {previews && (
        <div className="c-lg:w-[40%] flex flex-wrap c-xxxl:gap-5 c-lg:gap-4 c-sm:gap-4 c-xsm:gap-3">
          {previews?.map((preview, index) => (
            <div
              key={index}
              className="relative c-xxxl:w-24 c-xxxl:h-24 c-lg:w-16 c-lg:h-16 c-sm:w-16 c-sm:h-16 c-xsm:w-16 c-xsm:h-16"
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={preview}
                alt={`preview-${index}`}
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 p-[2px] cursor-pointer bg-red-300 text-white rounded-full hover:bg-red-600 transition-colors"
                title="Remove image"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPhotoUploader;
