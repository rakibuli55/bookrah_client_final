import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthTitle from '../../../components/auth/AuthTitle';
import Fieldset from '../../../components/auth/Fieldset';
import PrimaryButton from '../../../components/common/PrimaryButton';

const ResetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const verified = location.state?.verified || false;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  // Redirect if not verified or no email
  useEffect(() => {
    if (!email || !verified) {
      navigate('/auth/forgot-password');
    }
  }, [email, verified, navigate]);

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      return;
    }

    setIsLoading(true);

    try {
      // Here you would call your API to reset the password
      console.log('Resetting password for:', email);
      console.log('New password:', data.password);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success('Password reset successfully. Please sign in to continue.');
      navigate('/auth/sign-in');
    } catch (error) {
      console.error('Password reset failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!email || !verified) {
    return null; // Will redirect in useEffect
  }

  return (
    <div>
      <AuthTitle
        title="Reset Password"
        subTitle="No worries, enter your new password and confirm it to reset your password"
        className={'text-center mt-[120px]'}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Fieldset
          label="New Password"
          type="password"
          id="password"
          placeholder="Enter your new password"
          register={register}
          requiredMessage="Password is required"
          required={{
            value: true,
            message: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
          errors={errors}
        />

        <Fieldset
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          password={password}
          placeholder="Confirm your new password"
          register={register}
          requiredMessage="Please confirm your password"
          required={{
            value: true,
            message: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          }}
          errors={errors}
        />

        <div className="mt-8">
          <PrimaryButton
            className={'text-center w-full'}
            text={isLoading ? 'Submitting...' : 'Submit Now'}
            type={'submit'}
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
