import Fieldset from "@/components/auth/Fieldset";
import TelephoneCodeDropdown from "@/components/auth/TelephoneCodeDropdown";
import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useForm } from "react-hook-form";

function AddEditMemberEcontact() {
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
      <DashCommonWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name area  */}
          <div className="grid c-md:grid-cols-2 items-start gap-5">
            <Fieldset
              label="Full Name"
              type="text"
              id="full_name"
              placeholder="e.g. Saklain"
              register={register}
              required={{ value: true, message: "Full name is required" }}
              errors={errors}
            />
            <Fieldset
              label="Relationship"
              type="text"
              id="relationship"
              placeholder="e.g. Parent"
              register={register}
              required={{ value: true, message: "Relationship is required" }}
              errors={errors}
            />
          </div>
          {/* email  */}
          <div className="grid c-md:grid-cols-2 items-start gap-5 mt-5 c-md:pb-8 c-xsm:pb-6">
            <Fieldset
              label="Email Address"
              type="email"
              id="email"
              placeholder="example+1@domain.com"
              register={register}
              requiredMessage="Email is required"
              required={{ value: true, message: "Email is required" }}
              errors={errors}
            />
            {/* mobile number  */}
            <div className="mobile-number-feild">
              <label htmlFor="phone">Mobile Number</label>
              <div className="flex items-start gap-3">
                <div className="c-xxl:w-[18%] c-lg:w-[25%] c-xsm:w-[25%]">
                  <TelephoneCodeDropdown control={control} name={"dial_code"} />
                </div>
                <div className="c-xxl:w-[82%] c-lg:w-[75%] c-xsm:w-[75%]">
                  <input
                    className={`input focus:outline-none border border-primary focus:border-primary w-full ${
                      errors?.phone ? "!border-red-500" : ""
                    }`}
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your mobile number"
                    {...register("phone", {
                      required: "Mobile number is required",
                    })}
                  />
                </div>
              </div>
              {errors?.phone && (
                <p className="error-message">{errors.phone.message}</p>
              )}
            </div>
          </div>
          {/* submit btn  */}
          <div className="c-md:pt-8 c-xsm:pt-6 border-t border-input text-right">
            <PrimaryButton type="submit" text="Save" className="c-md:!py-2 c-xsm:!py-[10px] c-md:text-base c-xsm:text-sm" />
          </div>
        </form>
      </DashCommonWrapper>
    </div>
  );
}

export default AddEditMemberEcontact;
