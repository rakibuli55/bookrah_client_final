import { clearUser } from "@/redux/features/auth/UserInfoSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAxiosSecure = () => {
  const token = useSelector((state) => state.userInfo.token);
  const dispatch = useDispatch();

  const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          dispatch(clearUser());
          window.reload();
        }
      }
    );

    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [axiosSecure, token]);

  return axiosSecure;
};

export default useAxiosSecure;
