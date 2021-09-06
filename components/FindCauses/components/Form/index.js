import { useState } from "react";
import Button from "../../../core/Button";
import Input from "../../../core/Input";
import Select from "../../../core/Select";

const INITIAL_FORM = {
  title: "",
  state: "",
  city: "",
  zipCode: "",
};

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = ({ target: { value, name } }) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleClick = () => onSubmit(form);

  return (
    <div className="flex flex-col w-800px gap-10">
      <Input onChange={handleChange} name="title" label="Search for a Cause" />
      <div className="flex items-end justify-evenly gap-5">
        <Select onChange={handleChange} name="state" label="State" />
        <Input onChange={handleChange} name="city" label="City" />
        <Input onChange={handleChange} name="zipCode" label="Zip Code" />
        <Button onClick={handleClick} className="px-9 py-4">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Form;
