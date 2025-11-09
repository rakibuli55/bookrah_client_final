import PrimaryButton from "@/components/common/PrimaryButton";
import { useForm } from "react-hook-form";
import SettingsTabTitle from "../common/SettingsTabTitle";

const PasswordSettings = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const newPassword = watch("new_password");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* title  */}
      <SettingsTabTitle
        title="Password"
        desc="Please enter your current password to change your password."
      />
      <div>
        {/* Current password*  */}
        <div className="business-settings-common-input-box">
          {/* label-box  */}
          <div className="label-box">Current password*</div>
          {/* input-box  */}
          <div className="input-box">
            <div className="c-md:w-[70%]">
              <input
                type="password"
                name="current_password"
                placeholder="Enter current password"
                className="common-input-style border-auth-input-border"
                {...register("current_password", {
                  required: "Please your current password",
                })}
              />
              {errors.current_password && (
                <p className="error-message">
                  {errors.current_password.message}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* New password*  */}
        <div className="business-settings-common-input-box">
          {/* label-box  */}
          <div className="label-box">New password*</div>
          {/* input-box  */}
          <div className="input-box">
            <div className="c-md:w-[70%]">
              <input
                type="password"
                name="new_password"
                placeholder="Enter current password"
                className="common-input-style border-auth-input-border"
                {...register("new_password", {
                  required: "Please your new password",
                })}
              />
              {errors.new_password && (
                <p className="error-message">{errors.new_password.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* Confirm new password*  */}
        <div className="business-settings-common-input-box">
          {/* label-box  */}
          <div className="label-box">Confirm new password*</div>
          {/* input-box  */}
          <div className="input-box">
            <div className="c-md:w-[70%]">
              <input
                type="password"
                name="confirm_new_password"
                placeholder="Enter current password"
                className="common-input-style border-auth-input-border"
                {...register("confirm_new_password", {
                  required: "Please confirm your new password",
                  validate: (value) =>
                    value === newPassword || "Passwords don't match",
                })}
              />
              {errors.confirm_new_password && (
                <p className="error-message">
                  {errors.confirm_new_password.message}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* submit btn  */}
        <div className="mt-4 w-fit ml-auto">
          <PrimaryButton
            type={"submit"}
            text={"Update password"}
            className={"px-4 c-md:!py-2 c-xsm:!py-2 c-md:text-base c-xsm:text-sm text-white"}
          />
        </div>
      </div>
    </form>
  );
};

export default PasswordSettings;
