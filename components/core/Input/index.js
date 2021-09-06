import { useState } from "react";
import uniqueId from "lodash/uniqueId";

const Input = ({ label, ...props }) => {
  const [id] = useState(() => uniqueId(label));

  return (
    <div className="relative w-full mt-6">
      <input
        id={id}
        className="control-label text-sm block w-full appearance-none focus:outline-none border-b bg-transparent"
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute top-0 transform -translate-y-4 text-xs uppercase w-full smooth"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
