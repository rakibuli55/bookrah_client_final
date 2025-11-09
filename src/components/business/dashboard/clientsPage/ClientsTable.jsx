import { GoStarFill } from "react-icons/go";

const ClientsTable = () => {
  const clients = [
    {
      id: 1,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
    {
      id: 2,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
    {
      id: 3,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
    {
      id: 4,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
    {
      id: 5,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
    {
      id: 6,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
    {
      id: 7,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
    {
      id: 8,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
    {
      id: 9,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
    {
      id: 10,
      name: "Jackson Moore",
      mobileNumber: "1234560183654",
      review: 5,
      sales: 2,
      createdAt: "2029/02/15",
    },
  ];
  const tableHeads = [
    "name",
    "mobile number",
    "review",
    "sales",
    "created at",
  ];
  return (
    <div className="py-4 px-5 bg-white rounded-[16px] mt-6">
      <div className="c-md:overflow-hidden c-xsm:overflow-x-auto default-scrollbar">
        <table className="c-md:w-full c-xsm:w-[530px] font-satoshi">
          {/* table head  */}
          <thead>
            <tr>
              {tableHeads?.map((head, index) => (
                <th
                  key={index}
                  className="text-base py-[14px] text-left font-medium text-heading capitalize"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* table row  */}
            {clients?.map((client) => (
              <tr key={client?.id} className="border-b border-auth-input-border first:border-t last:border-none">
                <td className="py-4 text-sm text-gray-900">
                  {client.name}
                </td>
                <td className="py-4 text-sm text-gray-900">
                  {client.mobileNumber}
                </td>
                <td className="flex items-center gap-[6px] py-4">
                  {Array.from({ length: client?.review }).map((_, index) => (
                    <span key={index}>
                      <GoStarFill size={14} />
                    </span>
                  ))}
                </td>
                <td className="py-4 text-sm text-gray-900">
                  {client.sales}
                </td>
                <td className="py-4 text-sm text-gray-900">
                  {client.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsTable;
