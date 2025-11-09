import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";
import MembersList from "@/pages/business/dashboard/staffEmployees/MembersList";
import TeamMbembersHeader from "@/components/business/dashboard/staffsEmployees/TeamMembers/TeamMembersHeader";

const TeamMembersPage = () => {
  return (
    <div>
      <DashCommonWrapper>
        <TeamMbembersHeader />
        <MembersList />
      </DashCommonWrapper>
    </div>
  );
};

export default TeamMembersPage;
