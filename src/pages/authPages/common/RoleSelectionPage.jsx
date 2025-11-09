import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import customerIcon from '../../../assets/icon/customer.svg';
import professionalIcon from '../../../assets/icon/professional.svg';
import AuthTitle from '../../../components/auth/AuthTitle';
import PrimaryButton from '../../../components/common/PrimaryButton';

const RoleSelectionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('role', data?.role || null);
    if (data.role) {
      navigate(
        `/auth/${
          data.role === 'customer' ? 'customer-signup' : 'business-signup'
        }`
      );
    }
  };

  return (
    <div>
      <AuthTitle
        title="Join as a Customer or Professionals"
        subTitle="Welcome Back, Please select witch role as you join."
        className={'text-center'}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* customer  */}
        <div className="role-select-box">
          <input
            type="radio"
            name="role"
            id="customer"
            value="customer"
            {...register('role', { required: true })}
          />
          <label
            htmlFor="customer"
            className={`${errors.role ? '!border-red-500' : ''}`}
          >
            <img src={customerIcon} alt="customerIcon" />
            <h4>Bookrah for Customer </h4>
            <p>Book salons and spas near you</p>
          </label>
        </div>
        {/* professional  */}
        <div className="role-select-box c-md:mt-6 c-xsm:mt-4">
          <input
            type="radio"
            name="role"
            id="professional"
            value="professional"
            {...register('role', { required: true })}
          />
          <label
            htmlFor="professional"
            className={`${errors.role ? '!border-red-500' : ''}`}
          >
            <img src={professionalIcon} alt="customerIcon" />
            <h4>Bookrah for Professionals</h4>
            <p>Manage and grow your business</p>
          </label>
        </div>
        <div className="c-md:mt-10 c-xsm:mt-8">
          <PrimaryButton
            className={'w-full block'}
            text={'Create Account'}
            type={'submit'}
          />
        </div>
      </form>
      <p className="c-lg:text-[20px] c-md:text-[18px] c-xsm:text-base font-bold text-center c-md:mt-10 c-xsm:mt-6">
        <span>Already have an account? </span>
        <Link to={'/auth/sign-in'} className="text-primary">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RoleSelectionPage;
