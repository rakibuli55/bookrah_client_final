import allMembersIcon from "../../../../../assets/icon/allServiceMembers.svg";

const RequiredTeamMembers = ({ register, errors }) => {
  const teamMembers = [
    {
      id: 1,
      name: "All team members",
      total: 8,
      image: allMembersIcon,
    },
    {
      id: 2,
      name: "Sophia Lee",
      position: "Nail Technician",
      image: allMembersIcon,
    },
    {
      id: 3,
      name: "Olivia Green",
      position: "Makeup Artist",
      image:
        "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg",
    },
    {
      id: 4,
      name: "Lily Johnson",
      position: "Salon Manager",
      image:
        "https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=",
    },
    {
      id: 5,
      name: "Mia Davis",
      position: "Beauty Therapist",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&s",
    },
    {
      id: 6,
      name: "Ava Smith",
      position: "Hair Color Specialist",
      image:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    {
      id: 7,
      name: "Charlotte King",
      position: "Esthetician",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    },
    {
      id: 8,
      name: "Amelia Brown",
      position: "Waxing Specialist",
      image:
        "https://media.istockphoto.com/id/1351285381/photo/happy-young-african-american-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=e6sawVkyC7t_NTsFb13RWnLq4b9CYon4TJODpS2WU4I=",
    },
  ];
  return (
    <div>
      <div>
        <h4 className="title--sm !font-bold">Team members required</h4>
        <p className="text-sm text-paragraph mt-[6px]">
          Choose which team members will perform this service
        </p>
      </div>
      <div className="grid c-xxl:grid-cols-4 c-lg:grid-cols-3 c-md:grid-cols-2 c-xxxl:gap-7 c-md:gap-4 c-xsm:gap-3 mt-5">
        {teamMembers?.map((member, index) => (
          <div key={member?.id} className="custom-checkbox custom-checkbox-team-member relative">
            <input
              type="radio"
              name="teamMember"
              id={`member-${member.id}`}
              className=""
              {...register("teamMember", {
                required: "Please select your team member",
              })}
            />
            <label
              htmlFor={`member-${member.id}`}
              className="w-full py-3 !px-4 border border-auth-input-border rounded-[10px] cursor-pointer flex items-center gap-3"
            >
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={member?.image}
                alt={member?.name}
              />
              <div className="">
                <h4 className="text-base font-bold text-heading">
                  {member?.name}
                </h4>
                {member?.total && (
                  <p className="capitalize text-sm"> total ({member.total})</p>
                )}
                {member?.position && (
                  <p className="capitalize text-sm">{member.position}</p>
                )}
              </div>
            </label>
          </div>
        ))}
      </div>
      {errors.teamMember && (
            <p className="error-message">{errors.teamMember.message}</p>
          )}
    </div>
  );
};

export default RequiredTeamMembers;
