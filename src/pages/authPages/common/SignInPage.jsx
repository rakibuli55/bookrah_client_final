import { useForm } from 'react-hook-form';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import AuthTitle from '../../../components/auth/AuthTitle';
import Divider from '../../../components/auth/Divider';
import Fieldset from '../../../components/auth/Fieldset';
import GoogleSocialLogin from '../../../components/auth/GoogleSocialLogin';
import PrimaryButton from '../../../components/common/PrimaryButton';

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const role = searchParams.get('role');
  const email = watch('email');

  const onSubmit = (data) => {
    console.log(data);
    if (role === 'professional') {
      navigate('/business/onboarding');
    }
  };

  return (
    <div>
      <AuthTitle
        title="Sign In"
        subTitle="Welcome Back, Please Enter your Details to Log In."
        className={'text-center'}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset
          label="Email Address"
          type="email"
          id="email"
          placeholder="Enter your email"
          register={register}
          requiredMessage="Email is required"
          required={{ value: true, message: 'Email is required' }}
          errors={errors}
        />
        <div className="c-md:mt-8 c-xsm:mt-4">
          <Fieldset
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            register={register}
            requiredMessage="Password is required"
            errors={errors}
          />
        </div>
        <div className="text-right ">
          <Link
            className="inline-block w-fit hover:underline hover:text-primary duration-200 ease-in-out text-paragraph mt-4 c-md:mb-[46px] c-xsm:pb-8"
            to={`/auth/forgot-password${email ? `?email=${email}` : ''}`}
          >
            Forgot password ?
          </Link>
        </div>
        <div>
          <PrimaryButton
            className={'text-center w-full '}
            text={'Log In'}
            type={'submit'}
          />
        </div>
      </form>
      <Divider text={'Or'} />
      <div className="c-md:mt-10 c-xsm:mt-7">
        <GoogleSocialLogin />
      </div>
      <p className="c-lg:text-[20px] c-md:text-[18px] c-xsm:text-base font-bold text-center c-md:mt-10 c-xsm:mt-6">
        <span>Don’t have an account? </span>
        <Link to={'/auth/role-selection'} className="text-primary">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
