import LanguageSelector from '@/components/common/LanguageSelector'
import React from 'react'
import NotificationModal from './NotificationModal'
import { AiOutlineClose } from 'react-icons/ai'
import { CgMenu } from 'react-icons/cg'

const Header = ({ open, toggle }) => {
    return (
        <header className='w-full px-3 sm:px-11 py-3.5 bg-white min-h-[72px] border-b border-[#E5E5E5] '>
            <div></div>
            <div className='flex justify-end items-center gap-4 sm:gap-7'>
                <NotificationModal />
                <LanguageSelector />
                <div className='flex justify-end items-center gap-2'>
                    <img src="https://i.pravatar.cc" alt="" className='size-10 shrink-0 rounded-full object-cover' />
                    <div className='sm:flex  hidden flex-col'>
                        <p className='text-sm font-bold text-heading'>Orlando Laurentius</p>
                        <span className='text-xs text-paragraph'>Customer</span>
                    </div>
                </div>
                <button onClick={toggle} className='size-10 cursor-pointer text-white shrink-0 xl:hidden flex justify-center items-center p-1 rounded-full bg-heading'>
                    {open ? (
                        <AiOutlineClose size={23} />
                    ) : (
                        <CgMenu size={23} />
                    )}
                </button>
            </div>
        </header>
    )
}

export default Header