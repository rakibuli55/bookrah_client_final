import DashboardBanner from '@/components/customer/dashboard/DashboardBanner'
import { Link } from 'react-router-dom'
import { mockAppointments, mockServices } from '@/data/mockServices'
import ServiceCard from '@/components/common/ServiceCard'
import AppointmentCard from '@/components/customer/dashboard/ApointmentCard'
import PickDates from '@/components/customer/dashboard/PickDates'

const CustomerDashboard = () => {

    // main render
    return (
        <div className='w-full overflow-x-hidden flex flex-col font-playfair justify-start c-xxl:gap-8 gap-4 relative'>
            {/* banner */}
            <DashboardBanner />
            {/* content */}
            <div className='w-full flex lg:flex-row flex-col justify-between c-xxxl::gap-8 gap-3'>
                {/* appointments */}
                <div className='shadow-2xs w-full p-3 xl:p-6 bg-white border rounded-2xl flex flex-col justify-start gap-4 border-pricing-card-bg'>
                    <div className='w-full flex justify-between items-center gap-1'>
                        <p className='text-xl font-semibold'>Appointments</p>
                        <Link className='text-base text-primary font-medium' to={`/dashboard/appointments`}>See All</Link>
                    </div>
                    {/* list */}
                    <div className='w-full flex flex-col justify-start gap-4'>
                        {
                            mockAppointments?.slice(0, 4).map((appointment) => (
                                <AppointmentCard appointment={appointment} key={appointment.id} />
                            ))
                        }
                    </div>
                </div>
                {/* dates */}
                <PickDates />
            </div>
            {/* Favorites */}
            <div className='p-3 xl:p-6 flex flex-col justify-start lg:gap-6 gap-3 rounded-2xl border border-[#E5E5E5] bg-white shadow-2xs'>
                {/* title */}
                <div className='w-full flex justify-between items-center gap-3'>
                    <h2 className='lg:text-2xl text-xl font-medium'>Favorites Service</h2>
                    <Link className='text-base text-primary font-medium' to={`/dashboard/favorites`}>See All</Link>
                </div>
                {/* content */}
                <div className='w-full grid c-sm:grid-cols-2 grid-cols-1 lg:grid-cols-3  c-xxl:grid-cols-4 c-xxl:gap-7 gap-4'>
                    {
                        mockServices.slice(0, 4).map((service) => (
                            <ServiceCard key={service.id} isFavorite={true} service={service} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomerDashboard