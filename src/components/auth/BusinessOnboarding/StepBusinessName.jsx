import AuthTitle from "../AuthTitle";
import Fieldset from "../Fieldset";

const StepBusinessName = ({ register, errors }) => {
  return (
    <div className="c-lg:w-[672px] mx-auto">
      {/* title  */}
      <AuthTitle
        className="text-center"
        title="What's your business name?"
        subTitle="This is the brand name your clients will see. Your billing and legal name can be
added later."
      />
      <div>
        <Fieldset
          label="Business Name"
          type="text"
          id="business_name"
          placeholder="Enter your business name"
          register={register}
          required={{ value: true, message: "Business name is required" }}
          errors={errors}
        />
      </div>
      <div className="mt-5">
        <Fieldset
          label="Website (Optional)"
          type="text"
          id="website"
          placeholder="www.businessurl.com"
          register={register}
          required={{ value: false, message: "Business name is required" }}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default StepBusinessName;
