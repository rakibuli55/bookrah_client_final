import { Star } from 'lucide-react';

const TeamMembersSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ella',
      rating: 4.8,
      role: 'Stylist',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
      id: 2,
      name: 'Leo',
      rating: 5.0,
      role: 'Stylist',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
      id: 3,
      name: 'Bang',
      rating: 4.9,
      role: 'Stylist',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
      id: 4,
      name: 'JAMES',
      rating: 5.0,
      role: 'Stylist',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
      id: 5,
      name: 'JAMES',
      rating: 5.0,
      role: 'Stylist',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
      id: 6,
      name: 'Jenny',
      rating: 4.8,
      role: 'Stylist',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
      id: 7,
      name: 'J',
      rating: 5.0,
      role: 'beauty Technici...',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
      id: 8,
      name: 'Mhay',
      rating: 4.8,
      role: 'Scalp care speci...',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
      id: 9,
      name: 'CJ',
      rating: 5.0,
      role: 'Scalp Care Spec...',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Members</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            <div className="relative mb-3">
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-gray-200"
              />
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-1">
              {member.name}
            </h3>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600">{member.rating}</span>
            </div>
            <p className="text-xs text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>

      <button className="mt-6 text-blue-600 hover:underline font-medium">
        See All
      </button>
    </div>
  );
};

export default TeamMembersSection;
