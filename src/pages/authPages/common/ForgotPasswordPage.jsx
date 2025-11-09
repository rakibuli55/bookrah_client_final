import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthTitle from '../../../components/auth/AuthTitle';
import Fieldset from '../../../components/auth/Fieldset';
import PrimaryButton from '../../../components/common/PrimaryButton';

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email') || '';

  useEffect(() => {
    reset({ email });
  }, [email, reset]);

  const onSubmit = (data) => {
    console.log('Forgot password data:', data);

    // Here you would typically call your API to send OTP
    // For now, we'll just navigate to the OTP verification page
    navigate('/auth/forgot-password/otp-verification', {
      state: { email: data.email },
    });
  };
  return (
    <div>
      <AuthTitle
        title="Forgot Password"
        subTitle={
          <>
            Remember Password?{' '}
            <Link to={'/auth/sign-in'} className="text-primary">
              Sign In
            </Link>
          </>
        }
        className={'text-center mt-[160px]'}
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

        <div className="mt-8">
          <PrimaryButton
            className={'text-center w-full '}
            text={'Submit Now'}
            type={'submit'}
          />
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
