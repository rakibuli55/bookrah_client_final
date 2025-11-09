import banner_image from '@/assets/images/dashboard_banner.png'
const DashboardBanner = () => {
    return (
        <div className='w-full px-6 py-14 lg:p-20 overflow-x-hidden rounded-primary relative'>
            <img src={banner_image} alt="" className='w-full h-full object-cover absolute inset-0 ' />
            <div className='flex flex-col gap-2 lg:gap-3 text-white relative z-10 '>
                <p className='lg:text-3xl text-xl '>Good Morning, Sakib 👋</p>
                <h2 className='lg:text-5xl text-2xl md:text-3xl font-bold'>Welcome to your dashboard</h2>
            </div>
        </div>
    )
}

export default DashboardBanner