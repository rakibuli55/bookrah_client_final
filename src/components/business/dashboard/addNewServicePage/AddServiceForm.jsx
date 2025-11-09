import BasicDetails from "./serviceForm/BasicDetails";
import PricingAndDuration from "./serviceForm/PricingAndDuration";
import RequiredTeamMembers from "./serviceForm/RequiredTeamMembers";
const AddServiceForm = ({register, control, errors}) => {
  return (
    <div className="bg-white c-xxxl:p-6 c-md:p-4 c-xsm:p-3 c-md:rounded-[16px] c-xsm:rounded-[12px] mt-6 font-satoshi">
      {/* basic details  */}
      <BasicDetails register={register} control={control} errors={errors} />
      {/* pricing and duration  */}
      <PricingAndDuration
        register={register}
        control={control}
        errors={errors}
      />
      {/* required team members  */}
      <RequiredTeamMembers register={register} errors={errors} />
    </div>
  );
};

export default AddServiceForm;
