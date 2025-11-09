import AddNewServiceHeader from "@/components/business/dashboard/addNewServicePage/AddNewServiceHeader";
import AddServiceForm from "@/components/business/dashboard/addNewServicePage/AddServiceForm";
import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";
import { useForm } from "react-hook-form";

const AddNewService = () => {
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DashCommonWrapper>
          <AddNewServiceHeader />
          <AddServiceForm
            register={register}
            control={control}
            errors={errors}
          />
        </DashCommonWrapper>
      </form>
    </div>
  );
};

export default AddNewService;
