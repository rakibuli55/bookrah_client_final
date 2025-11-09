import { Autocomplete } from "@react-google-maps/api";
import { useEffect, useRef } from "react";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import {
  onPlacedChanged,
  onSearchQuery,
} from "../../../../redux/features/business/OnboardStepSlice";

const LocationSearch = ({ register, errors, setValue, trigger }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.onboardStep.searchQuery);
  const selectedLocation = useSelector(
    (state) => state.onboardStep.selectedLocation
  );
  const autocompleteRef = useRef();
  //   handlePlaceChanged
  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    dispatch(
      onPlacedChanged({
        selectedLocation: { lat, lng },
        searchQuery: place?.name,
        selectedAddress: place,
      })
    );
    // to remove the previous validation message
    setTimeout(() => {
      trigger("location");
    }, 0);
  };
  //   onAutocompleteLoad
  const onAutocompleteLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };
  // check any value exist in location or not
  useEffect(() => {
    register("location", {
      validate: (value) => {
        if (!value || !value.lat || !value.lng) {
          return "Please select a location for your business";
        }
        return true;
      },
    });
  }, [register]);
  // check if selected location exist then stop the run validation
  useEffect(() => {
    if (selectedLocation && selectedLocation.lat && selectedLocation.lng) {
      setValue("location", selectedLocation, { shouldValidate: false });
    }
  }, [selectedLocation, setValue]);

  return (
    <div>
      <label htmlFor="location" className="location-label">
        Where is your Business located
      </label>
      <div className="relative">
        <Autocomplete
          onLoad={onAutocompleteLoad}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            id="location"
            type="text"
            placeholder="Search location"
            value={searchQuery}
            onChange={(e) => dispatch(onSearchQuery(e.target.value))}
            className={`w-full py-3 pl-10 pr-6 border border-primary c-md:rounded-[10px] c-xsm:rounded-[8px] focus:outline-none font-satoshi c-md:text-base c-xsm:text-sm ${
              errors.location ? "!border-red-500" : ""
            }`}
          />
        </Autocomplete>
        <p className="absolute top-1/2 translate-[-50%] left-6 c-md:text-[22px] c-xsm:text-[18px]">
          <SlLocationPin />
        </p>
      </div>
      {errors.location && (
        <p className="text-red-500 text-sm mt-2">{errors.location.message}</p>
      )}
    </div>
  );
};

export default LocationSearch;
