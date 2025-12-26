import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../api/useAxiosPublic";

const login = async (axiosPublic, payload) => {
  const response = await axiosPublic.post("/login", payload);
  return response.data;
};

const useLogin = () => {
  const axiosPublic = useAxiosPublic();

  return useMutation({
    mutationFn: (payload) => login(axiosPublic, payload),
  });
};

export default useLogin;
