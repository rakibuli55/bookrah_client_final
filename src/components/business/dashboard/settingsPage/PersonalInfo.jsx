import PrimaryButton from "@/components/common/PrimaryButton";
import { Controller, useForm } from "react-hook-form";
import SettingsTabTitle from "../common/SettingsTabTitle";
import GalleryPhotoUploader from "./personalInfo/GalleryPhotoUploader";
import PhotoUploader from "./personalInfo/PhotoUploader";
import RichTextEditor from "./personalInfo/RichTextEditor";

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* title  */}
      <SettingsTabTitle
        title="Personal info"
        desc="Update your photo and personal details here."
      />
      <div>
        {/* name  */}
        <div className="business-settings-common-input-box">
          {/* label-box  */}
          <div className="label-box">name</div>
          {/* input-box  */}
          <div className="input-box grid c-md:grid-cols-2 c-md:gap-6 c-xsm:gap-3">
            {/* first name  */}
            <div>
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                className="common-input-style border-auth-input-border"
                {...register("first_name", {
                  required: "Please enter first name",
                })}
              />
              {errors.first_name && (
                <p className="error-message">{errors.first_name.message}</p>
              )}
            </div>
            {/* last name  */}
            <div>
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="common-input-style border-auth-input-border"
                {...register("last_name", {
                  required: "Please enter last name",
                })}
              />
              {errors.last_name && (
                <p className="error-message">{errors.last_name.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* email  */}
        <div className="business-settings-common-input-box">
          {/* label-box  */}
          <div className="label-box">email</div>
          {/* input-box  */}
          <div className="input-box">
            {/* email  */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="common-input-style border-auth-input-border"
                {...register("email", {
                  required: "Please enter email",
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* photo  */}
        <div className="business-settings-common-input-box">
          {/* label-box  */}
          <div className="label-box">
            <p>Your photo</p>
            <p className="text-sm mt-2 text-paragraph normal-case">
              This will be displayed on your profile.
            </p>
          </div>
          {/* photo uploader  */}
          <div className="input-box">
            <Controller
              name="photo"
              control={control}
              rules={{
                required: "Please upload a photo",
              }}
              render={({ field }) => (
                <PhotoUploader onChange={field.onChange} />
              )}
            />
            {/* errors  */}
            {errors.photo && (
              <p className="error-message">{errors.photo.message}</p>
            )}
          </div>
        </div>
        {/* gallery photo  */}
        <div className="business-settings-common-input-box">
          {/* label-box  */}
          <div className="label-box">
            <p>Gallery</p>
            <p className="text-sm mt-2 text-paragraph normal-case">
              This will be displayed on your profile.
            </p>
          </div>
          {/* photo uploader  */}
          <div className="input-box">
            <Controller
              name="galleryPhoto"
              control={control}
              rules={{
                required: "Please upload minimum one photo",
              }}
              render={({ field }) => (
                <GalleryPhotoUploader
                  value={field.value || []}
                  onChange={field.onChange}
                />
              )}
            />
            {/* errors  */}
            {errors.galleryPhoto && (
              <p className="error-message">{errors.galleryPhoto.message}</p>
            )}
          </div>
        </div>
        {/* rich text editor  */}
        <div className="business-settings-common-input-box">
          {/* label-box  */}
          <div className="label-box">
            <p>Bio</p>
            <p className="text-sm mt-2 text-paragraph normal-case">
              Write a short introduction.
            </p>
          </div>
          {/* input-box  */}
          <div className="input-box c-lg:!w-[45%] c-xxl:!w-[34%]">
            <RichTextEditor />
          </div>
        </div>
        {/* submit btn  */}
        <div className="mt-4 w-fit ml-auto">
          <PrimaryButton
            type={"submit"}
            text={"Save"}
            className={"px-4 c-md:!py-2 c-xsm:!py-2 c-md:text-base c-xsm:text-sm text-white"}
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
