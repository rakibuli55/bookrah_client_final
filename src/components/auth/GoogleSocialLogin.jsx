import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleSocialLogin = () => {
  return (
    <GoogleLogin
      size="large"
      logo_alignment="center"
      onSuccess={(credentialResponse) => {
        const token = credentialResponse?.credential;
        const decoded = jwtDecode(token);
        console.log(decoded);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleSocialLogin;
