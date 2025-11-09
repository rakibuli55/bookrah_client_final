import hairIcon from "../../../assets/icon/hair.svg";
import AuthTitle from "../AuthTitle";
import StepOverflowWrapper from "./StepOverflowWrapper";

const StepCategories = ({ register, errors, getValues, setValue }) => {
  const categories = [
    {
      id: 1,
      name: "Hair & Styling",
      icon: hairIcon,
    },
    {
      id: 2,
      name: "Barbering",
      icon: hairIcon,
    },
    {
      id: 3,
      name: "Nails",
      icon: hairIcon,
    },
    {
      id: 4,
      name: "Eyebrows & Lashes",
      icon: hairIcon,
    },
    {
      id: 5,
      name: "Hair Removal",
      icon: hairIcon,
    },
    {
      id: 6,
      name: "Facials & Skincare",
      icon: hairIcon,
    },
    {
      id: 7,
      name: "Makeup",
      icon: hairIcon,
    },
    {
      id: 8,
      name: "Massage",
      icon: hairIcon,
    },
    {
      id: 9,
      name: "Spa & Wellness",
      icon: hairIcon,
    },
    {
      id: 10,
      name: "Medical",
      icon: hairIcon,
    },
    {
      id: 11,
      name: "Fitness & Recovery",
      icon: hairIcon,
    },
    {
      id: 12,
      name: "Tattoo & Piercing",
      icon: hairIcon,
    },
    {
      id: 13,
      name: "Pet Grooming",
      icon: hairIcon,
    },
    {
      id: 14,
      name: "Tanning Studio",
      icon: hairIcon,
    },
  ];

  return (
    <div>
      <div>
        {/* title  */}
        <AuthTitle
          className="text-center"
          title="Select categories that best describe your business"
          subTitle="Choose your primary and up to 3 related service type"
        />
      </div>
      <StepOverflowWrapper
        className={
          "grid c-lg:grid-cols-4 c-md:grid-cols-3 c-xxxl:gap-8 c-md:gap-4 c-xsm:gap-4 c-md:pr-4 c-xxl:w-[1200px] c-xsm:w-full mx-auto onboarding-categories-wrapper"
        }
      >
        {categories?.map((cat) => {
          const checked = (getValues("categories") || []).includes(cat.name);
          return (
            <div key={cat?.id}>
              <input
                className="hidden"
                type="checkbox"
                value={cat.name}
                {...register("categories", {
                  required: "Select at least one category",
                })}
                id={`category-${cat.id}`}
                onChange={(e) => {
                  const current = getValues("categories") || [];
                  if (e.target.checked) {
                    setValue("categories", [...current, cat.name], {
                      shouldValidate: true,
                    });
                  } else {
                    setValue(
                      "categories",
                      current.filter((c) => c !== cat.name),
                      { shouldValidate: true }
                    );
                    console.log("yes");
                  }
                }}
              />
              <label
                htmlFor={`category-${cat.id}`}
                className={`relative py-6 px-4 border border-auth-input-border rounded-[8px] block w-full cursor-pointer ${
                  errors.categories ? "!border-red-500" : ""
                }`}
              >
                <img className="h-8 w-8" src={cat?.icon} alt="icon" />
                <p className="c-lg:text-[18px] font-medium text-heading mt-4">
                  {cat.name}
                </p>
              </label>
            </div>
          );
        })}
      </StepOverflowWrapper>
      {/* errors  */}
      <div className="c-xxxl:w-[1200px] mx-auto">
        {errors.categories && (
          <p className="error-message">{errors.categories.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepCategories;
