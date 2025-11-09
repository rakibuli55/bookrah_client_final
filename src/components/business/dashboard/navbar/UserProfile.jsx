import TextTruncate from '@/utils/TextTruncate';
import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <Link to={'/'} className='flex items-center c-md:gap-3'>
      <img className='c-md:min-w-10 c-md:min-h-10 c-md:max-w-10 c-md:max-h-10 c-xsm:min-w-10 c-xsm:min-h-10 c-xsm:max-w-10 c-xsm:max-h-10 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
      <div className='c-md:block c-xsm:hidden'>
        <p className='text-base text-heading font-bold'>{TextTruncate('Orlando Laurentius', 2)}</p>
        <span className='text-sm text-paragraph'>Admin</span>
      </div>
    </Link>
  );
};

export default UserProfile;