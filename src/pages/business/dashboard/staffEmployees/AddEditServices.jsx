import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useForm } from "react-hook-form";

const services = [
  { id: "hair", name: "Hair Styling", duration: "1h" },
  { id: "balayage", name: "Balayage", duration: "2h 30min" },
  { id: "haircut", name: "Haircut", duration: "45min" },
  { id: "coloring", name: "Hair Coloring", duration: "2h" },
  { id: "blowdry", name: "Blow Dry", duration: "30min" },
  { id: "highlights", name: "Highlights", duration: "2h 15min" },
  { id: "treatment", name: "Hair Treatment", duration: "1h 30min" },
  { id: "perm", name: "Perm", duration: "3h" },
];

const AddEditServices = () => {
  const {
    register,
    handleSubmit,
    watch,setValue,
    formState: { errors },
  } = useForm();
  const selectedServices = watch("services") || [];
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      // Select all services
      setValue(
        "services",
        services.map((service) => service.id)
      );
    } else {
      // Deselect all services
      setValue("services", []);
    }
  };

  const isAllSelected =
    selectedServices.length === services.length && services.length > 0;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="font-satoshi">
      <DashCommonWrapper>
        {/* Select All Checkbox */}
        <div className="c-md:py-7 c-xsm:py-4 custom-checkbox checkbox-addsaff-services">
          <input
            type="checkbox"
            id="all-services"
            checked={isAllSelected}
            onChange={handleSelectAll}
          />
          <label htmlFor="all-services" className="font-bold text-heading">
            All Services
          </label>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {services?.map((service) => (
            <div
              key={service?.id}
              className="c-md:py-7 c-xsm:py-4 border-t border-input last:border-none  custom-checkbox checkbox-addsaff-services"
            >
              <input
                type="checkbox"
                name={service?.id}
                id={service?.id}
                value={service?.id}
                {...register("services", {
                  validate: (value) =>
                    (value && value.length > 0) ||
                    "Please select at least one service",
                })}
              />
              <label
                htmlFor={service?.id}
                className="font-semibold text-heading"
              >
                {service.name}
              </label>
            </div>
          ))}
          {errors.services && (
            <p className="error-message mb-5">{errors.services.message}</p>
          )}
          {/* submit btn  */}
          <div className="c-md:pt-8 c-xsm:pt-6 border-t border-input text-right">
            <PrimaryButton type="submit" text="Save" className="c-md:!py-2 c-xsm:!py-[10px] c-md:text-base c-xsm:text-sm" />
          </div>
        </form>
      </DashCommonWrapper>
    </div>
  );
};

export default AddEditServices;
