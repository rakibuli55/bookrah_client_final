const getEventStatusColor = (status) => {
  const statusColors = {
    "Setup and Rehearsal": "#EDEDED",
    Meeting: "#f3f3f3", 
    Event: "#FFFAEE", 
    "Task Deadlines": "#FFF4DB",
  };
  return statusColors[status] || "#6B7280";
};

export default getEventStatusColor;
