import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";
import ProfileDetails from "@/components/business/dashboard/staffsEmployees/AddEditPage/ProfileDetails";
import ProfilePhotoUploader from "@/components/business/dashboard/staffsEmployees/AddEditPage/ProfilePhotoUploader";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddNewMemberProfilePage = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

     // manually trigger validation for confirm pass if fill with fake filler
    useEffect(() => {
      if (getValues("password") && getValues("confirmPassword")) {
        trigger("confirmPassword");
      }
    }, [getValues("password"), getValues("confirmPassword")]);

  return (
    <div>
      <DashCommonWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfilePhotoUploader register={register} errors={errors} />
          <ProfileDetails register={register} errors={errors} control={control} getValues={getValues}  />
        </form>
      </DashCommonWrapper>
    </div>
  );
};

export default AddNewMemberProfilePage;
