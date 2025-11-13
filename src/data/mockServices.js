
import professional_1 from '../assets/images/professional_1.png';
import professional_2 from '../assets/images/professional_2.png';

export const mockProfessionals = [
  {
    id: 1,
    name: 'John Doe',
    image: professional_1,
    rating: 4.8,
    totalReviews: 120,
    specialization: 'Hair Stylist',
    duration: '30 min',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: professional_2,
    rating: 4.7,
    totalReviews: 95,
    specialization: 'Massage Therapist',
    duration: '1 hr',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    image: professional_2,
    rating: 4.9,
    totalReviews: 150,
    specialization: 'Nail Technician',
    duration: '45 min',
  },
  {
    id: 4,
    name: 'Michael Brown',
    image: professional_1,
    rating: 4.6,
    totalReviews: 80,
    specialization: 'Esthetician',
    duration: '1 hr, 30 min',
  },
  {
    id: 5,
    name: 'Sarah Lee',
    image: professional_2,
    rating: 4.7,
    totalReviews: 110,
    specialization: 'Makeup Artist',
    duration: '2 hr',
  },
  {
    id: 6,
    name: 'David Kim',
    image: professional_1,
    rating: 4.8,
    totalReviews: 90,
    specialization: 'Facial Therapist',
    duration: '1 hr, 15 min',
  },
  {
    id: 7,
    name: 'Olivia Davis',
    image: professional_2,
    rating: 4.9,
    totalReviews: 130,
    specialization: 'Tattoo Artist',
    duration: '2 hr, 30 min',
  }
]
// Mock service data for testing carousel functionality
export const mockServices = [
  {
    id: 1,
    name: 'The Tattooed Lady',
    image:
      'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5.0,
    totalReviews: 2013,
    location: '12639 Fremont Avenue, Zimmerman',
    category: 'Tattooing & piercing',
    path: '/business/tattoo-piercing',
  },
  {
    id: 2,
    name: 'Sakada',
    image:
      'https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    totalReviews: 43,
    location: '14525 Highway 7, Minnetonka',
    category: 'Beauty Salon',
    path: '/business/beauty-salon',
  },
  {
    id: 3,
    name: 'Gold and Ash Hair Salon',
    image:
      'https://plus.unsplash.com/premium_photo-1669675936197-e06a30857ac3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5.0,
    totalReviews: 1472,
    location: '120 West Northwest Highway, Palatine',
    category: 'Hair Salon',
    path: '/business/hair-salon',
  },
  {
    id: 4,
    name: 'Escape Uptown',
    image:
      'https://images.unsplash.com/photo-1630595271375-5073a6c0638b?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5.0,
    totalReviews: 626,
    location: '61 Erie Parkway, Erie',
    category: 'Beauty Salon',
    path: '/business/beauty-salon',
  },
  {
    id: 5,
    name: 'Luxe Nail Studio',
    image:
      'https://images.unsplash.com/photo-1690749138086-7422f71dc159?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    totalReviews: 892,
    location: '245 Main Street, Downtown',
    category: 'Nails',
    path: '/business/nails',
  },
  {
    id: 6,
    name: 'Brow & Lash Studio',
    image:
      'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    totalReviews: 1245,
    location: '789 Beauty Lane, Uptown',
    category: 'Eyebrows & Lashes',
    path: '/business/eyebrows-lashes',
  },
  {
    id: 7,
    name: 'Smooth Skin Clinic',
    image: 'https://images.pexels.com/photos/9468564/pexels-photo-9468564.jpeg',
    rating: 4.7,
    totalReviews: 567,
    location: '456 Wellness Drive, Medical District',
    category: 'Hair Removal',
    path: '/business/hair-removal',
  },
  {
    id: 8,
    name: 'Glow Facial Spa',
    image:
      'https://plus.unsplash.com/premium_photo-1679750866818-50ae796e60db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    totalReviews: 1034,
    location: '321 Spa Boulevard, Wellness Center',
    category: 'Facials & Skincare',
    path: '/business/facials-skincare',
  },
  {
    id: 9,
    name: 'Makeup Artistry Studio',
    image:
      'https://images.unsplash.com/photo-1733145818828-645fc7499ca5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    totalReviews: 756,
    location: '654 Artisan Street, Creative District',
    category: 'Makeup',
    path: '/business/makeup',
  },
  {
    id: 10,
    name: 'Tranquil Massage Therapy',
    image:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    totalReviews: 1456,
    location: '987 Relaxation Road, Peaceful Valley',
    category: 'Massage',
    path: '/business/massage',
  },
  {
    id: 11,
    name: 'Elite Medical Spa',
    image:
      'https://plus.unsplash.com/premium_photo-1674841252391-efd5fe8266d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    totalReviews: 2341,
    location: '123 Medical Plaza, Health District',
    category: 'Medical',
    path: '/business/medical',
  },
  {
    id: 12,
    name: 'FitLife Recovery Center',
    image:
      'https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    totalReviews: 678,
    location: '456 Fitness Avenue, Sports Complex',
    category: 'Fitness & Recovery',
    path: '/business/fitness-recovery',
  },
  {
    id: 13,
    name: 'Pawfect Grooming',
    image:
      'https://plus.unsplash.com/premium_photo-1663036401821-d60fe33f066f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    totalReviews: 892,
    location: '789 Pet Care Lane, Animal District',
    category: 'Pet Grooming',
    path: '/business/pet-grooming',
  },
  {
    id: 14,
    name: 'Golden Glow Tanning',
    image:
      'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    totalReviews: 445,
    location: '321 Tan Boulevard, Beach District',
    category: 'Tanning Studio',
    path: '/business/tanning-studio',
  },
  {
    id: 15,
    name: 'Classic Cuts Barbershop',
    image:
      'https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    totalReviews: 1123,
    location: '567 Barber Street, Traditional Quarter',
    category: 'Barbering',
    path: '/business/barbering',
  },
  {
    id: 16,
    name: 'Zen Wellness Retreat',
    image:
      'https://images.unsplash.com/photo-1630595271375-5073a6c0638b?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    totalReviews: 1876,
    location: '890 Serenity Way, Mountain View',
    category: 'Spa & Wellness',
    path: '/business/spa-wellness',
  },
];
// Function to get services by category for different sections
export const getServicesByLocation = () => mockServices.slice(0, 8);
export const getRecommendedServices = () => mockServices.slice(4, 12);
export const getNewToBookrahServices = () => mockServices.slice(6, 12);



export const mockAppointments = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Daal Salon - Asena",
    date: "Saturday, September 20",
    time: "10:00–10:05 AM ",
    price: "$120",
    items: "1 item",
    duration: "35 mins duration",
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Daal Salon - Asena",
    date: "Saturday, September 20",
    time: "10:00–10:05 AM ",
    price: "$120",
    items: "1 item",
    duration: "35 mins duration",
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Daal Salon - Asena",
    date: "Saturday, September 20",
    time: "10:00–10:05 AM ",
    price: "$120",
    items: "1 item",
    duration: "55 mins duration",
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Daal Salon - Asena",
    date: "Saturday, September 20",
    time: "10:00–10:05 AM ",
    price: "$120",
    items: "1 item",
    duration: "35 mins duration",
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1630595271375-5073a6c0638b?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Daal Salon - Asena",
    date: "Saturday, September 20",
    time: "10:00–10:05 AM ",
    price: "$120",
    items: "1 item",
    duration: "35 mins duration",
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Daal Salon - Asena",
    date: "Saturday, September 20",
    time: "10:00–10:05 AM ",
    price: "$120",
    items: "1 item",
    duration: "35 mins duration",
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1630595271375-5073a6c0638b?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Daal Salon - Asena",
    date: "Saturday, September 20",
    time: "10:00–10:05 AM ",
    price: "$120",
    items: "1 item",
    duration: "25 mins duration",
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Daal Salon - Asena",
    date: "Saturday, September 20",
    time: "10:00–10:05 AM ",
    price: "$120",
    items: "1 item",
    duration: "35 mins duration",
  },
];


export const addressList = [
  {
    id: 1,
    type: "home",
    title: "Home",
    subtitle: "Add a home address",
    icon: "FaHome", // optional - use react-icons
  },
  {
    id: 2,
    type: "work",
    title: "Work",
    subtitle: "Add a work address",
    icon: "FaBriefcase",
  },
  {
    id: 3,
    type: "other",
    title: "Other",
    subtitle: "Add another address",
    icon: "FaMapMarkerAlt",
  },
];