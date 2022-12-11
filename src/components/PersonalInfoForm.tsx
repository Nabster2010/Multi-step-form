import { useDataContext } from "../contexts/context";
import Input from "./Input";

const PersonalInfoForm = () => {
  const { errors, personalInfo, handleChange } = useDataContext();

  return (
    <>
      <div>
        <h1 className="font-bold text-MarineBlue md:text-3xl text-2xl ">
          Personal info
        </h1>
        <p className="mt-3 text-CoolGray">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <Input
        label="Name"
        error={errors.name}
        name="name"
        type="text"
        value={personalInfo.name}
        onChange={handleChange}
        placeholder={"e.g.Stephen King"}
      />
      <Input
        label="Email Address"
        error={errors.email}
        name="email"
        type="email"
        value={personalInfo.email}
        onChange={handleChange}
        placeholder="e.g.Stephen@lorem.com"
      />
      <Input
        label="Phone Number"
        error={errors.phone}
        name="phone"
        type="tel"
        value={personalInfo.phone}
        onChange={handleChange}
        placeholder="e.g. +123 456 789"
      />
    </>
  );
};

export default PersonalInfoForm;
