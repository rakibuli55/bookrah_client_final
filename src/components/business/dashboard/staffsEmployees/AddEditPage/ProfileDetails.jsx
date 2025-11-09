import Fieldset from "@/components/auth/Fieldset";
import TelephoneCodeDropdown from "@/components/auth/TelephoneCodeDropdown";
import PrimaryButton from "@/components/common/PrimaryButton";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const ProfileDetails = ({ register, errors, control, getValues }) => {

  return (
    <div className="mt-8 font-satoshi">
      <div className="c-md:pb-10 c-xsm:pb-6">
        {/* name area  */}
        <div className="grid c-md:grid-cols-2 c-md:items-start gap-5">
          <Fieldset
            label="Frist Name"
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
        {/* email  */}
        <div className="grid c-md:grid-cols-2 c-md:items-start gap-5 mt-5">
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
            <div className="flex items-start c-md:gap-3 c-xsm:gap-2">
              <div className="c-xxl:w-[18%] c-lg:w-[22%] c-xsm:w-[30%]">
                <TelephoneCodeDropdown control={control} name={"dial_code"} />
              </div>
              <div className="c-xxl:w-[82%] c-lg:w-[78%] c-xsm:w-[70%]">
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
        {/* additional phone & city  */}
        <div className="grid c-md:grid-cols-2 c-md:items-start gap-5 mt-5">
          {/* mobile number  */}
          <div className="mobile-number-feild">
            <label htmlFor="additional_phone">Aditional Mobile Number</label>
            <div className="flex items-start c-md:gap-3 c-xsm:gap-2">
              <div className="c-xxl:w-[18%] c-lg:w-[22%] c-xsm:w-[30%]">
                <TelephoneCodeDropdown
                  control={control}
                  name={"additional_dial_code"}
                />
              </div>
              <div className="c-xxl:w-[82%] c-lg:w-[78%] c-xsm:w-[70%]">
                <input
                  className={`input focus:outline-none border border-primary focus:border-primary w-full ${
                    errors?.additional_phone ? "!border-red-500" : ""
                  }`}
                  type="number"
                  name="additional_phone"
                  id="additional_phone"
                  placeholder="Enter your additional mobile number"
                  {...register("additional_phone", {
                    required: "Additional phone number is required",
                  })}
                />
              </div>
            </div>
            {errors?.additional_phone && (
              <p className="error-message">{errors.additional_phone.message}</p>
            )}
          </div>
          <Fieldset
            label="City"
            type="text"
            id="city"
            placeholder="e.g. newyork"
            register={register}
            requiredMessage="City is required"
            required={{ value: true, message: "City is required" }}
            errors={errors}
          />
        </div>
        {/* gender & birthday  */}
        <div className="grid c-md:grid-cols-2 c-md:items-start gap-5 mt-5">
          <div className="fieldset">
            {/* gender  */}
            <div>
              <label htmlFor="gender">Gender</label>
              <Controller
                name="gender"
                control={control}
                rules={{ required: "Please select your gender" }}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={`c-md:!h-[52px] c-xsm:!h-[42px] w-full c-md:px-6 c-xsm:px-3 focus:ring-0 focus-visible:ring-0 focus-visible:border-primary ${
                        errors.gender
                          ? "border-red-500"
                          : "border-primary"
                      }`}
                    >
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            {errors.gender && (
              <p className="error-message">{errors.gender.message}</p>
            )}
          </div>
          <Fieldset
            label="Birthday"
            type="date"
            id="birthday"
            placeholder="Select birthday"
            register={register}
            requiredMessage="Birthday is required"
            required={{ value: true, message: "Birthday is required" }}
            errors={errors}
          />
        </div>
        {/* passwords  */}
        <div className="grid c-md:grid-cols-2 c-md:items-start gap-5 mt-5">
          <Fieldset
            label="Password"
            type="password"
            id="password"
            placeholder="Set password"
            register={register}
            required={{ value: true, message: "Password is required" }}
            errors={errors}
          />
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
        {/* job title  */}
        <div className="mt-5">
          <Fieldset
            label="Job Title"
            type="text"
            id="job_title"
            placeholder="Enter job title"
            register={register}
            required={{ value: true, message: "Job title is required" }}
            errors={errors}
          />
        </div>
      </div>

      {/* work details  */}
      <div className="c-md:py-8 c-xsm:py-6 border-t border-input">
        {/* title  */}
        <div>
          <h3 className="title--sm !font-bold">Work Details</h3>
          <p className="text-sm text-paragraph">
            Manage your team members start date, and employment details
          </p>
        </div>
        {/* start & end date  */}
        <div className="grid c-md:grid-cols-2 c-md:items-start gap-5 mt-5">
          <Fieldset
            label="Start"
            type="date"
            id="start_date"
            placeholder="Select start date"
            register={register}
            required={{ value: true, message: "Start date required" }}
            errors={errors}
          />
          <Fieldset
            label="End"
            type="date"
            id="end_date"
            placeholder="Select end date"
            register={register}
            required={{ value: true, message: "End date required" }}
            errors={errors}
          />
        </div>
        {/* employe type & team member id  */}
        <div className="grid c-md:grid-cols-2 c-md:items-start gap-5 mt-5">
          <div className="fieldset">
            <label htmlFor="employment_type">Employment type</label>
            <Controller
              name="employment_type"
              control={control}
              rules={{ required: "Please select employment type" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={`c-md:!h-[52px] c-xsm:!h-[42px] w-full c-md:px-6 c-xsm:px-3 focus:ring-0 focus-visible:ring-0 focus-visible:border-primary ${
                      errors.employment_type
                        ? "border-red-500"
                        : "border-primary"
                    }`}
                  >
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.employment_type && (
              <p className="error-message">{errors.employment_type.message}</p>
            )}
          </div>
          <Fieldset
            label="Team member ID"
            type="text"
            id="team_member_id"
            placeholder="eg:danial@123"
            register={register}
            required={{ value: true, message: "Team Member id is required" }}
            errors={errors}
          />
        </div>
        {/* additional note  */}
        <div className="mt-5 fieldset">
          <label htmlFor="additional_note">Additional Note</label>
          <textarea
            name="additional_note"
            id="additional_note"
            placeholder="Add a private note only viewable in the team member list"
            {...register("additional_note")}
            className="c-md:p-6 c-xsm:p-3 c-xsm:text-sm rounded-[10px] border border-primary w-full resize-none h-[152px] focus:outline-0"
          ></textarea>
        </div>
      </div>

      {/* submit btn  */}
      <div className="c-md:pt-8 c-xsm:pt-6 border-t border-input text-right">
        <PrimaryButton type="submit" text="Save" className="c-md:!py-2 c-xsm:!py-[10px] c-md:text-base c-xsm:text-sm" />
      </div>
    </div>
  );
};

export default ProfileDetails;
