const SettingsTabTitle = ({ title, desc }) => {
  return (
    <div className="font-satoshi pb-5 border-b border-input">
      <h3 className="text-[18px] font-semibold text-heading">{title}</h3>
      <p className="mt-1 text-sm text-paragraph">{desc}</p>
    </div>
  );
};

export default SettingsTabTitle;
