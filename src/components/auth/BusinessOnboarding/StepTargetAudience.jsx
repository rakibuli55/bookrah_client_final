import AuthTitle from "../AuthTitle";
import StepOverflowWrapper from "./StepOverflowWrapper";

const StepTargetAudience = ({ register, errors }) => {
  const targetAudienceOptions = ["Women", "Men", "Children", "Everyone"];
  return (
    <div>
      <AuthTitle
        className="text-center"
        title="Specify target audience"
        subTitle="This will Indicate clearly the business is for whome"
      />
      <StepOverflowWrapper className={"c-md:w-[624px]"}>
        {targetAudienceOptions?.map((audience, index) => (
          <div className="custom-radio-option mt-5 first:mt-0 c-md:pr-4" key={index}>
            <input
              className="hidden"
              type="radio"
              name="team_size"
              value={audience}
              id={`audience-${index}`}
              {...register("audience", {
                required: "Please select a audience type.",
              })}
            />
            <label
              htmlFor={`audience-${index}`}
              className={`relative c-lg:p-6 c-md:p-4 c-xsm:p-3 border border-auth-input-border rounded-[10px] block font-satoshi cursor-pointer duration-200 ease-in-out ${
                errors.audience ? "!border-red-500" : ""
              }`}
            >
              {audience}
            </label>
          </div>
        ))}
      </StepOverflowWrapper>
      {/* error  */}
      <div className="w-[624px] mx-auto">
        {errors.audience && (
          <p className="error-message">{errors.audience.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepTargetAudience;
