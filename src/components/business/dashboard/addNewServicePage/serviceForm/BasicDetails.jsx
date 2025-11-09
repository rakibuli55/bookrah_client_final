import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const BasicDetails = ({ register, control, errors }) => {
  return (
    <div>
      <h4 className="title--sm !font-bold">Basic details</h4>
      <div>
        {/* menu category  */}
        <div className="mt-5">
          <div>
            <label htmlFor="category" className="common-input-label">
              category
            </label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Please select a category" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full c-md:!h-[52px] c-xsm:!h-[42px] c-md:px-6 c-xsm:px-4 border-auth-input-border text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-auth-input-border cursor-pointer">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="haircut-styling">
                      Haircut & Styling
                    </SelectItem>
                    <SelectItem value="hair-wash">
                      Hair Wash & Styling
                    </SelectItem>
                    <SelectItem value="children-cut">Children's Cut</SelectItem>
                    <SelectItem value="facial-wash">Facial Wash</SelectItem>
                    <SelectItem value="facial-makeup">
                      Facial Wash and Makeup
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          {errors.category && (
            <p className="error-message">{errors.category.message}</p>
          )}
        </div>
        {/* menu sub category  */}
        <div className="mt-5">
          <div>
            <label htmlFor="subcategory" className="common-input-label">
              sub category
            </label>
            <Controller
              name="subCategory"
              control={control}
              rules={{ required: "Please select a sub category" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full c-md:!h-[52px] c-xsm:!h-[42px] c-md:px-6 c-xsm:px-4 border-auth-input-border text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-auth-input-border cursor-pointer">
                    <SelectValue placeholder="Select sub category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="haircut-styling">
                      Haircut & Styling
                    </SelectItem>
                    <SelectItem value="hair-wash">
                      Hair Wash & Styling
                    </SelectItem>
                    <SelectItem value="children-cut">Children's Cut</SelectItem>
                    <SelectItem value="facial-wash">Facial Wash</SelectItem>
                    <SelectItem value="facial-makeup">
                      Facial Wash and Makeup
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          {errors.subCategory && (
            <p className="error-message">{errors.subCategory.message}</p>
          )}
        </div>
        {/* title  */}
        <div className="mt-5">
          <div>
            <label htmlFor="title" className="common-input-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter your service name"
              className="common-input-style !border-auth-input-border"
              {...register("title", {
                required: "Please enter a service title",
              })}
            />
          </div>
          {errors.title && (
            <p className="error-message">{errors.title.message}</p>
          )}
        </div>
        {/* description  */}
        <div className="mt-5">
          <div>
            <label htmlFor="description" className="common-input-label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Add short description"
              className="common-input-style !border-auth-input-border h-[141px] resize-none"
              {...register("description", {
                required: "Please enter a service description",
              })}
            ></textarea>
          </div>
          {errors.description && (
            <p className="error-message">{errors.description.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
