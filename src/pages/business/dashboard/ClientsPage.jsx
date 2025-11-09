import ClientsHeader from "@/components/business/dashboard/clientsPage/ClientsHeader";
import ClientsTable from "@/components/business/dashboard/clientsPage/ClientsTable";
import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";

const ClientsPage = () => {
  return (
    <div>
      <DashCommonWrapper>
        <ClientsHeader />
        <ClientsTable />
      </DashCommonWrapper>
    </div>
  );
};

export default ClientsPage;
