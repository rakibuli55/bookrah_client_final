const getStatusStyles = (status) => {
  switch (status) {
    case "Confirmed":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-blue-100 text-blue-700";
    case "Cancel":
      return "bg-red-100 text-red-700";
    case "Completed":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default getStatusStyles;
