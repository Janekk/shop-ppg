const Select = ({ label, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-xs uppercase">{label}</label>
      <select
        className="border-b border-black bg-transparent outline-none w-full"
        {...props}
      >
        <option />
        <option>IL</option>
        <option>IL</option>
        <option>NY</option>
        <option>NV</option>
        <option>FL</option>
      </select>
    </div>
  );
};

export default Select;
