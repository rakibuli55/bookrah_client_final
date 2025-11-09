import { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import AuthTitle from "../AuthTitle";
import StepOverflowWrapper from "./StepOverflowWrapper";
import SocialDialog from "./stepSocial/SocialDialog";
const StepSocialMedia = ({
  register,
  errors,
  fields,
  onAddField,
  onRemoveField,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const socialMediaOptions = [
    { value: "facebook", label: "Facebook" },
    { value: "twitter", label: "Twitter" },
    { value: "youtube", label: "YouTube" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "pinterest", label: "Pinterest" },
    { value: "snapchat", label: "Snapchat" },
  ];

  const handleAddFeild = () => {
    if (selectedOption) {
      const selectedLabel = socialMediaOptions.find(
        (opt) => opt.value === selectedOption
      )?.label;
      onAddField({
        platform: selectedLabel,
        value: "",
      });
      setSelectedOption("");
      setIsDialogOpen(false);
    }
  };

  return (
    <div>
      <AuthTitle
        className="text-center"
        title="Add social media"
        subTitle="Connect with your audience and showcase your business through social media links."
      />
      <StepOverflowWrapper className={"c-md:w-[624px]"}>
        <div className="space-y-0">
          {/* dynamic feilds  */}
          {fields?.map((fld, index) => (
            <div key={index} className="mt-5 first:mt-0 c-lg:pr-4 relative">
              <label
                htmlFor={`socialMediaFields.${index}.value`}
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                {fld?.platform}
              </label>
              <div className="relative">
                <input
                  id={`socialMediaFields.${index}.value`}
                  type="url"
                  className={`social-input ${
                    errors?.socialMediaFields?.[index]?.value
                      ? "border-red-500"
                      : "border-primary"
                  }`}
                  placeholder={`https://${fld?.platform.toLowerCase()}.com/yourprofile`}
                  {...register(`socialMediaFields.${index}.value`, {
                    required: `${fld?.platform} link is required`,
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message:
                        "Please enter a valid URL (must start with http:// or https://)",
                    },
                  })}
                />

                {/* remove button */}
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => onRemoveField(index)}
                    className="absolute top-1/2 -translate-y-1/2 c-md:right-5 c-xsm:right-3 text-red-500 bg-red-100 rounded-full hover:text-red-700 transition-colors c-md:p-2 c-xsm:p-[6px] cursor-pointer hover:bg-red-50"
                    title={`Remove ${fld?.platform}`}
                  >
                    <MdDeleteOutline />
                  </button>
                )}
              </div>
              {/* error message */}
              {errors?.socialMediaFields?.[index]?.value && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.socialMediaFields[index].value.message}
                </span>
              )}
            </div>
          ))}

          {/* dialog  */}
          <div className="font-satoshi">
            <SocialDialog
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
              socialMediaOptions={socialMediaOptions}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              onAddFeild={handleAddFeild}
            />
          </div>
        </div>
      </StepOverflowWrapper>
      {/* add more  */}
      <div className="c-md:w-[624px] mx-auto">
        <button
          onClick={() => setIsDialogOpen(true)}
          type="button"
          className="flex items-center gap-2 text-heading font-medium hover:text-primary transition-colors mt-5 cursor-pointer"
        >
          <p className="text-[20px]">
            <GoPlusCircle />
          </p>
          Add More
        </button>
      </div>
    </div>
  );
};

export default StepSocialMedia;
