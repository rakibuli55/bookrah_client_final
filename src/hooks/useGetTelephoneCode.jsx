import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetTelephoneCode = () => {
  const { data: telephoneCode, isLoading: telephoneCodeLoading } = useQuery({
    queryKey: ["telephone-codes"],
    queryFn: async () => {
      const response = await axios.get(
        "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
      );
      return response.data;
    },
  });

  return { telephoneCode, telephoneCodeLoading };
};

export default useGetTelephoneCode;
