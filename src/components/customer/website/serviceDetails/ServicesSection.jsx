import { useState } from 'react';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    "MAN'S HAIR SERVICE",
    "WOMEN'S HAIR SERVICE",
    'Unfurl Keratin',
    'DAOL luxury treatment',
    'Treatment magic(Cut not in...',
  ];

  const services = [
    {
      id: 1,
      name: "[MAN's] cut",
      description: 'lorem upsam diller',
      price: 'P1,000',
      category: "MAN'S HAIR SERVICE",
    },
    {
      id: 2,
      name: "[WOMEN's] cut",
      description: 'lorem upsam diller',
      price: 'P1,500',
      category: "WOMEN'S HAIR SERVICE",
    },
    {
      id: 3,
      name: "[MAN's] down perm (side)",
      description: 'lorem upsam diller',
      price: 'P1,000',
      category: "MAN'S HAIR SERVICE",
    },
    {
      id: 4,
      name: 'Premium Head Spa',
      description: 'lorem upsam diller',
      price: 'P4,000',
      category: 'DAOL luxury treatment',
    },
  ];

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-yellow-400 text-gray-900'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services list */}
      <div className="space-y-4">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-900">
                {service.price}
              </span>
              <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 text-blue-600 hover:underline font-medium">
        See All
      </button>
    </div>
  );
};

export default ServicesSection;
