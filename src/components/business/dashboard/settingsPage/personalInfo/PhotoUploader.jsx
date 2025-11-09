import { useState } from "react";
import Dropzone from "react-dropzone";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCloudUploadOutline } from "react-icons/io5";

const PhotoUploader = ({ onChange }) => {
  const [preview, setPreview] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("File size exceeds 2 MB. Please upload a smaller file.");
      return;
    }

    if (file) {
      onChange(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setPreview(null);
    onChange(null);
  };

  return (
    <div className="flex c-lg:flex-row c-xsm:flex-col c-lg:gap-6 c-xsm:gap-4">
      <div className="c-lg:w-[60%]">
        <Dropzone
          onDrop={handleDrop}
          accept={{
            "image/svg+xml": [".svg"],
            "image/png": [".png"],
            "image/jpeg": [".jpg", ".jpeg"],
          }}
          maxFiles={1}
          multiple={false}
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
                  <p className="text-sm text-primary">Drop the file here ...</p>
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
                    SVG, PNG, JPG or GIF (max: 2 MB)
                  </div>
                </div>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      {preview && (
        <div className="c-lg:w-[40%]">
          {preview && (
            <div className="relative c-xxxl:h-24 c-xxxl:w-24 c-lg:w-16 c-lg:h-16 c-sm:w-16 c-sm:h-16 c-xsm:w-16 c-xsm:h-16">
              <img
                className=" w-full h-full object-cover rounded-full"
                src={preview}
                alt="preview"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-[3px] cursor-pointer bg-red-300 text-white rounded-full hover:bg-red-600 transition-colors"
                title="Remove image"
              >
                <AiOutlineDelete size={14} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
