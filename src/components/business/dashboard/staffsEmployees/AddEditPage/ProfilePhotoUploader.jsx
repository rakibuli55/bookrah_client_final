import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineUploadFile } from "react-icons/md";

const ProfilePhotoUploader = ({ register, errors }) => {
  const defaultAvatar =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const [preview, setPreview] = useState(defaultAvatar);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="c-lg:h-[120px] c-md:h-[90px] c-lg:w-[120px] c-md:w-[90px] c-xsm:h-[90px] c-xsm:w-[90px]">
      <div>
        <input
          type="file"
          id="uploader"
          className="hidden"
          onChange={handleFileChange}
          {...register("profileAvatar", { required: "Upload a avatar" })}
        />
        <label
          htmlFor="uploader"
          className="block w-full h-full cursor-pointer bg-red-50 rounded-full relative border border-primary"
        >
          <img
            src={preview}
            className="w-full h-full object-cover rounded-full"
            alt="avatar"
          />
          <p className="h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center absolute bottom-2 right-0">
            <MdOutlineUploadFile />
          </p>
        </label>
      </div>
      {errors.profileAvatar && (
        <p className="error-message">{errors.profileAvatar.message}</p>
      )}
    </div>
  );
};

export default ProfilePhotoUploader;
