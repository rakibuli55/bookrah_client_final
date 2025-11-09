import { useState } from "react";
import OnboardingStepForm from "./OnboardingStepForm";

const BusinessOnboarding = () => {
  const [stepNumber, setStepNumber] = useState(1);

  const steps = [
    "Account Set Up",
    "Select Categories",
    "Team Info",
    "Location Details",
    "Target Audience",
    "Social Media Links",
  ];

  const handleNextStep = () => {
    if (stepNumber < 6) {
      setStepNumber((prev) => prev + 1);
    }
  };
  const handlePrevStep = () => {
    if (stepNumber > 1) {
      setStepNumber((prev) => prev - 1);
    }
  };

  return (
    <div>
      {/* steps  */}
      <div className="steps-wrapper flex items-start gap-4">
        {steps?.map((step, index) => (
          <div
            key={step + index}
            className={`step ${index + 1 === stepNumber ? "active-step" : ""} ${
              index + 1 < stepNumber ? "completed-step" : ""
            }`}
          >
            <p className="w-full h-[2px] bg-steps-line step-line duration-200 ease"></p>
            <span className="text-[#B7B7B7] font-bold c-md:inline-block c-xsm:hidden mt-3 step-name duration-200 ease c-lg:text-base c-xsm:text-[12px]">
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* step form  */}
      <OnboardingStepForm
        currentStep={stepNumber}
        onNext={handleNextStep}
        onPrev={handlePrevStep}
      />
    </div>
  );
};

export default BusinessOnboarding;
