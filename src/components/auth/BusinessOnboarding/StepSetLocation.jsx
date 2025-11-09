import { useSelector } from "react-redux";
import AuthTitle from "../AuthTitle";
import LocationMaps from "./StepLocation/LocationMaps";
import LocationSearch from "./StepLocation/LocationSearch";
import StepOverflowWrapper from "./StepOverflowWrapper";

const StepSetLocation = ({ register, errors, setValue, trigger }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const selectedLocation = useSelector(
    (state) => state.onboardStep.selectedLocation
  );

  return (
    <div>
      <AuthTitle
        className="text-center"
        title="Set your location address"
        subTitle="Add your business location so your clients can easily find you."
      />
      <StepOverflowWrapper
        className={"c-lg:w-[700px] onboarding-location-wrapper c-lg:pr-4"}
      >
        <LocationSearch
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
        />

        {selectedLocation && (
          <LocationMaps
            containerStyle={containerStyle}
            selectedLocation={selectedLocation}
            setValue={setValue}
          />
        )}
      </StepOverflowWrapper>
    </div>
  );
};

export default StepSetLocation;
