import AuthTitle from "../AuthTitle";
import StepOverflowWrapper from "./StepOverflowWrapper";

const StepTeamSize = ({ register, errors }) => {
  const teamSizeOptions = [
    "It’s just me",
    "1-3 people",
    "3-10 people",
    "11+ people",
  ];
  return (
    <div>
      <AuthTitle
        className="text-center"
        title="What’s your team size?"
        subTitle="This will help us set up your calendar correctly."
      />
      <StepOverflowWrapper className={"c-md:w-[624px]"}>
        {teamSizeOptions?.map((size, index) => (
          <div className="custom-radio-option c-lg:mt-5 c-xsm:mt-4 first:mt-0 c-lg:pr-4" key={index}>
            <input
              className="hidden"
              type="radio"
              name="team_size"
              value={size}
              id={`size-${index}`}
              {...register("team_size", {
                required: "Please select a team size.",
              })}
            />
            <label
              htmlFor={`size-${index}`}
              className={`relative c-lg:p-6 c-md:p-4 c-xsm:p-3 border border-auth-input-border c-xsm:rounded-[8px] c-lg:rounded-[10px] block font-satoshi first:mt-0 cursor-pointer duration-200 ease-in-out ${errors.team_size ? '!border-red-500' : ''}`}
            >
              {size}
            </label>
          </div>
        ))}
      </StepOverflowWrapper>
      {/* error  */}
      <div className="c-md:w-[624px] mx-auto">
        {errors.team_size && (
          <p className="error-message">{errors.team_size.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepTeamSize;
