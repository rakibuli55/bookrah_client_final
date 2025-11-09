import { GoogleMap, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { onEditLocation } from "../../../../redux/features/business/OnboardStepSlice";

const LocationMaps = ({ containerStyle, selectedLocation, setValue }) => {
  const dispatch = useDispatch();
  const selectedAddress = useSelector(
    (state) => state.onboardStep.selectedAddress
  );

  const handleEditLocation = () => {
    dispatch(onEditLocation());
    setValue("location", null);
  };

  return (
    <div className="mt-4">
      {/* edit portion  */}
      <div className="mb-4 flex items-start justify-between">
        <div className="max-w-[370px]">
          <p className="text-heading font-medium">Business Address</p>
          <div className="mt-3 text-paragraph font-medium">
            <p>{selectedAddress?.name}</p>
            <p>{selectedAddress?.formatted_address}</p>
          </div>
        </div>
        <button
          type="button"
          className={`py-3 px-6 border border-heading rounded-[32px] text-sm font-medium duration-200 ease-in-out hover:bg-primary cursor-pointer`}
          onClick={handleEditLocation}
        >
          Edit
        </button>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation}
        zoom={15}
      >
        <Marker position={selectedLocation} />
      </GoogleMap>
    </div>
  );
};

export default LocationMaps;
