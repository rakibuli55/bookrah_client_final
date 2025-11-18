import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthTitle from '../../../components/auth/AuthTitle';
import PrimaryButton from '../../../components/common/PrimaryButton';

const ForgotPasswordVerifyPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const { handleSubmit } = useForm();

  // Timer for resend functionality
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Start resend timer when component mounts
  useEffect(() => {
    setResendTimer(60);
  }, []);

  // Redirect if no email is provided
  useEffect(() => {
    if (!email) {
      navigate('/auth/forgot-password');
    }
  }, [email, navigate]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(''); // Clear error when user types

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Handle paste
    if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      navigator.clipboard.readText().then((text) => {
        const pastedOtp = text.replace(/\D/g, '').slice(0, 6);
        const newOtp = [...otp];
        for (let i = 0; i < 6; i++) {
          newOtp[i] = pastedOtp[i] || '';
        }
        setOtp(newOtp);
        setError('');
      });
    }
  };

  const onSubmit = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setError('Please enter a complete 6-digit code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Here you would call your API to verify the OTP
      console.log('Verifying OTP:', otpCode, 'for email:', email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // If verification is successful, navigate to reset password page
      navigate('/auth/reset-password', {
        state: { email, verified: true },
      });
    } catch (error) {
      console.error('OTP verification failed:', error);
      setError('Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return;

    try {
      // Call API to resend OTP
      console.log('Resending OTP to:', email);
      setResendTimer(60);
      setError('');
      // You can add your resend OTP API call here
    } catch (error) {
      console.error('Failed to resend OTP:', error);
      setError('Failed to resend code. Please try again.');
    }
  };

  if (!email) {
    return null; // Will redirect in useEffect
  }

  return (
    <div>
      <AuthTitle
        title="OTP Verification"
        subTitle="Please verify your email address"
        className={'text-center mt-[120px]'}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center c-md:space-x-5 c-xsm:space-x-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="c-lg:w-16 c-md:w-13 c-lg:h-16 c-md:h-13 c-xsm:w-10 c-xsm:h-10 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <p className="text-center  text-gray-600 my-8 leading-[1.6] max-w-lg mx-auto">
          We've sent a 6-digit verification code to your email. Check your spam
          folder in case you didn't receive the code.
        </p>

        <div className="space-y-4">
          <PrimaryButton
            type="submit"
            text={isLoading ? 'Submitting...' : 'Submit'}
            className="w-[276px] mx-auto block c-lg:mb-[160px] c-md:mb-10 c-xsm:mb-7"
            disabled={isLoading || otp.join('').length !== 6}
          />

          <div className="text-center">
            <p className="text-gray-600">
              Did you not receive the email?{' '}
              {resendTimer > 0 ? (
                <span className="text-gray-400">Resend in {resendTimer}s</span>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="text-primary hover:underline font-medium"
                >
                  Resend Code
                </button>
              )}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordVerifyPage;
