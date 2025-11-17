import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthTitle from "../../../components/auth/AuthTitle";
import Fieldset from "../../../components/auth/Fieldset";
import TelephoneCodeDropdown from "../../../components/auth/TelephoneCodeDropdown";
import PrimaryButton from "../../../components/common/PrimaryButton";

const BusinessSignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    control,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/auth/signup/otp-verification?role=professional");
  };
  // manually trigger validation for confirm pass if fill with fake filler
  useEffect(() => {
    if (getValues("password") && getValues("confirmPassword")) {
      trigger("confirmPassword");
    }
  }, [getValues("password"), getValues("confirmPassword")]);

  return (
    <div>
      <AuthTitle
        title="Create a professional account"
        subTitle="You're almost there! Create your new account "
        className={"text-center"}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name area  */}
        <div className="grid c-md:grid-cols-2 items-start c-md:gap-3 c-xsm:gap-4">
          <Fieldset
            label="First Name"
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            register={register}
            requiredMessage="First name is required"
            required={{ value: true, message: "First name is required" }}
            errors={errors}
          />
          <Fieldset
            label="Last Name"
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            register={register}
            requiredMessage="Last name is required"
            required={{ value: true, message: "Last name is required" }}
            errors={errors}
          />
        </div>
        {/* mobile number  */}
        <div className="mobile-number-feild mt-5">
          <label htmlFor="phone">Mobile Number</label>
          <div className="flex items-start gap-3">
            <div className="w-[23%]">
              <TelephoneCodeDropdown control={control} name={"dial_code"} />
            </div>
            <div className="w-[77%]">
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
        {/* email  */}
        <div className="mt-5">
          <Fieldset
            label="Email Address"
            type="email"
            id="email"
            placeholder="Enter your email"
            register={register}
            requiredMessage="Email is required"
            required={{ value: true, message: "Email is required" }}
            errors={errors}
          />
        </div>
        {/* city  */}
        <div className="mt-5">
          <Fieldset
            label="City"
            type="text"
            id="city"
            placeholder="Enter your city"
            register={register}
            requiredMessage="City is required"
            required={{ value: true, message: "City is required" }}
            errors={errors}
          />
        </div>
        {/* Password field  */}
        <div className="mt-5">
          <Fieldset
            label="Password"
            type="password"
            id="password"
            placeholder="Enter a password"
            register={register}
            requiredMessage="Password is required"
            errors={errors}
            confirmPasswordId="confirmPassword"
          />
        </div>

        {/* Confirm Password field */}
        <div className="mt-5">
          <Fieldset
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            placeholder="Retype password"
            register={register}
            requiredMessage="Confirm password is required"
            errors={errors}
            password={getValues("password")}
          />
        </div>
        {/* privacy policy  */}
        <div className="mt-5 font-satoshi custom-checkbox">
          <div>
            <input
              type="checkbox"
              id="policy"
              name="policy"
              {...register("policy", {
                required: "Terms and policy is required",
              })}
            />
            <label htmlFor="policy" className="c-xxl:text-base c-xsm:text-sm c-xsm:block business-signIn-checkbox">
              I agree to the <Link to={"/"}>Privacy Policy</Link>,{" "}
              <Link to={"/"}>Terms of Service</Link> and{" "}
              <Link to={"/"}>Terms of Business</Link>.
            </label>
          </div>
          {errors.policy && (
            <p className="error-message">{errors.policy.message}</p>
          )}
        </div>
        {/* Submit Button */}
        <div>
          <PrimaryButton
            className={"text-center w-full mt-5"}
            text={"Create an account"}
          />
        </div>
      </form>
    </div>
  );
};

export default BusinessSignUpPage;
