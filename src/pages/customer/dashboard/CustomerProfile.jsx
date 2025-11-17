import Fieldset from '@/components/auth/Fieldset';
import PrimaryButton from '@/components/common/PrimaryButton';
import AvatarChange from '@/components/customer/dashboard/AvatarChange'
import { addressList } from '@/data/mockServices';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaHome, FaBriefcase, FaMapMarkerAlt, FaPlus } from "react-icons/fa";


const CustomerProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const icons = {
    FaHome: <FaHome />,
    FaBriefcase: <FaBriefcase />,
    FaMapMarkerAlt: <FaMapMarkerAlt />,
  };

  const onSubmit = (data) => {
    console.log(data);

  };

  // main render
  return (
    <div className='w-full flex md:flex-row flex-col justify-between items-start gap-4 xl:gap-8'>
      {/* profile details */}
      <div className='w-full p-4 xl:p-6 bg-white rounded-2xl shadow-2xs flex flex-col justify-start'>
        <p className='md:text-2xl text-xl font-medium'>Profile</p>
        {/* avatar and name */}
        <div className='w-full md:mt-7 mt-2 flex flex-col justify-center items-center gap-4 md:gap-6'>
          <AvatarChange />
          <p className='md:text-3xl text-lg font-semibold text-center'>John Doe</p>
        </div>
        {/* form */}
        <form className='w-full lg:mt-14 mt-2 flex flex-col justify-start gap-2 md:gap-4' onSubmit={handleSubmit(onSubmit)}>
          <Fieldset
            label="First Name"
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            register={register}
            requiredMessage="First name is required"
            required={{ value: true, message: 'First name is required' }}
            errors={errors}
          />
          <Fieldset
            label="Last Name"
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            register={register}
            requiredMessage="Last name is required"
            required={{ value: true, message: 'Last name is required' }}
            errors={errors}
          />
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
          <Fieldset
            label="Mobile Number"
            type="tel"
            id="mobile"
            placeholder="Enter your mobile number"
            register={register}
            requiredMessage="Mobile number is required"
            required={{ value: true, message: 'Mobile number is required' }}
            errors={errors}
          />
          <Fieldset
            label="Date of Birth"
            type="date"
            id="date_of_birth"
            placeholder="Enter your date of birth"
            register={register}
            requiredMessage="Date of birth is required"
            required={{ value: true, message: 'Date of birth is required' }}
            errors={errors}
          />
          <Fieldset
            label="Gender"
            type="text"
            id="gender"
            placeholder="Enter your gender"
            register={register}
            requiredMessage="Gender is required"
            required={{ value: true, message: 'Gender is required' }}
            errors={errors}
          />
          <PrimaryButton
            className={'text-center text-base md:mt-4 p-2 mt-3 w-full'}
            text={'Update Profile'}
          />
        </form>
      </div>
      {/* Addresses list */}
      <div className='w-full p-4 xl:p-6 bg-white rounded-2xl shadow-2xs flex flex-col justify-start gap-3 md:gap-4 '>
        {addressList.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-4 md:p-8 bg-white rounded-xl  border border-gray-200"
          >
            <div className="md:size-10 size-8  flex items-center justify-center rounded-full bg-primary text-heading text-sm md:text-lg">
              {icons[item.icon]}
            </div>
            <div>
              <p className="font-medium text-sm md:text-xl">{item.title}</p>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
        {/* add more */}
        <button className='flex mt-4 cursor-pointer w-fit py-3 px-6 border rounded-full border-[#D3D3D3] justify-center items-center gap-4'>
          <FaPlus />
          <p className='text-sm font-medium'>Add more</p>
        </button>
      </div>
    </div>
  )
}

export default CustomerProfile