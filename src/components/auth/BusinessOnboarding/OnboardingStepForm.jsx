import { LoadScript } from "@react-google-maps/api";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import StepBusinessName from "./StepBusinessName";
import StepCategories from "./StepCategories";
import StepSetLocation from "./StepSetLocation";
import StepSocialMedia from "./StepSocialMedia";
import StepTargetAudience from "./StepTargetAudience";
import StepTeamSize from "./StepTeamSize";

const OnboardingStepForm = ({ currentStep, onNext, onPrev }) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    trigger,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      categories: [],
      socialMediaFields: [
        { platform: "Instagram", value: "" },
        { platform: "TikTok", value: "" },
      ],
    },
  });

  const navigate = useNavigate();

  const {
    fields: socialMediaFields,
    append: socialMediaFieldsAppend,
    remove: socialMediaFieldsRemove,
  } = useFieldArray({
    control,
    name: "socialMediaFields",
  });

  //   onSubmit
  const onSubmit = (data) => {
    console.log(data);
    navigate("/for-business");
  };
  // handleValidation
  const handleValidation = async () => {
    const isFormValid = await trigger();

    if (isFormValid) {
      if (currentStep === 6) {
        // On last step, submit the form
        handleSubmit(onSubmit)();
      } else {
        // On other steps, just go to next
        onNext();
      }
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoadScript
        googleMapsApiKey="AIzaSyAeL2jcdaNW7W8EYvbptsDj3GsoLkv_d3E"
        libraries={["places"]}
      >
        {/* action buttons  */}
        <div className="flex items-center justify-between mt-10">
          <button
            type="button"
            className={`c-md:py-3 c-md:px-6 c-xsm:py-[10px] c-xsm:px-4 border border-heading rounded-[32px] text-sm font-medium duration-200 ease-in-out hover:bg-primary cursor-pointer ${
              currentStep === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
            onClick={onPrev}
          >
            Back
          </button>
          <button
            type={currentStep === 7 ? "submit" : "button"}
            className="c-md:py-3 c-md:px-6 c-xsm:py-[10px] c-xsm:px-4 border border-heading rounded-[32px] text-sm font-medium duration-200 ease-in-out bg-primary hover:bg-transparent cursor-pointer"
            onClick={handleValidation}
          >
            {currentStep === 6 ? "Submit" : "Continue"}
          </button>
        </div>

        {currentStep === 1 && (
          <StepBusinessName register={register} errors={errors} />
        )}
        {currentStep === 2 && (
          <StepCategories
            register={register}
            errors={errors}
            getValues={getValues}
            setValue={setValue}
          />
        )}
        {currentStep === 3 && (
          <StepTeamSize register={register} errors={errors} />
        )}
        {currentStep === 4 && (
          <StepSetLocation
            register={register}
            errors={errors}
            setValue={setValue}
            trigger={trigger}
          />
        )}
        {currentStep === 5 && (
          <StepTargetAudience register={register} errors={errors} />
        )}
        {currentStep === 6 && (
          <StepSocialMedia
            register={register}
            errors={errors}
            fields={socialMediaFields}
            onAddField={socialMediaFieldsAppend}
            onRemoveField={socialMediaFieldsRemove}
          />
        )}
      </LoadScript>
    </form>
  );
};

export default OnboardingStepForm;
