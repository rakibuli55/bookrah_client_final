import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const PricingAndDuration = ({ register, control, errors }) => {
  return (
    <div className="my-6">
      <h4 className="title--sm !font-bold">Pricing and duration</h4>
      <div className="grid c-md:grid-cols-3 c-xxxl:gap-7 c-md:gap-4 c-xsm:gap-0">
        {/* price type  */}
        <div className="mt-5">
          <div>
            <label htmlFor="priceType" className="common-input-label">
              Price type
            </label>
            <Controller
              name="priceType"
              control={control}
              rules={{ required: "Please select a price type" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full c-md:!h-[52px] c-xsm:!h-[42px] c-md:px-6 c-xsm:px-4 border-auth-input-border text-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 ring-offset-0 cursor-pointer">
                    <SelectValue placeholder="Fixed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fixed">Fixed</SelectItem>
                    <SelectItem value="variable">Variable</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="range">Price Range</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          {errors.priceType && (
            <p className="error-message">{errors.priceType.message}</p>
          )}
        </div>
        {/* price  */}
        <div className="mt-5">
          <div>
            <label htmlFor="price" className="common-input-label">
              price
            </label>
            <div className="relative">
              {/* currency  */}
              <p className="uppercase absolute text-base font-medium text-heading top-1/2 translate-y-[-50%] left-6">
                sar
              </p>
              <input
                type="number"
                placeholder="0.00"
                name="price"
                id="price"
                className="common-input-style !pl-[70px] border-auth-input-border"
                {...register("price", {
                  required: "Please enter service price",
                })}
              />
            </div>
          </div>
          {errors.price && (
            <p className="error-message">{errors.price.message}</p>
          )}
        </div>
        {/* duration  */}
        <div className="mt-5">
          <div>
            <label htmlFor="duration" className="common-input-label">
              duration
            </label>
            <Controller
              name="duration"
              control={control}
              rules={{ required: "Please select a duration" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full c-md:!h-[52px] c-xsm:!h-[42px] c-md:px-6 c-xsm:px-4 border-auth-input-border text-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 ring-offset-0 cursor-pointer">
                    <SelectValue placeholder="Select a duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="40">40 mins</SelectItem>
                    <SelectItem value="50">50 mins</SelectItem>
                    <SelectItem value="60">60 mins</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          {errors.duration && (
            <p className="error-message">{errors.duration.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingAndDuration;
