import Header from '@/shared/customer/Header'
import Sidebar from '@/shared/customer/Sidebar'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const CustomerDashboardLayout = () => {
    // sidebar toggle
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);


    return (
        <div className='w-full flex'>
            <Sidebar open={open} toggle={toggle} />
            <div className='w-full h-screen flex flex-col'>
                <Header open={open} toggle={toggle} />
                <main className='w-full h-full c-xxl:p-6 p-3 overflow-y-auto overflow-x-hidden bg-[#F4F1EC]'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default CustomerDashboardLayout