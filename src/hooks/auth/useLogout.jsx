import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../api/useAxiosSecure";

const logout = async (axiosSecure) => {
  const res = await axiosSecure.post("/logout");
  return res.data;
};

const useLogout = () => {
  const axiosSecure = useAxiosSecure();
  return useMutation({
    mutationFn: () => logout(axiosSecure),
  });
};

export default useLogout;
