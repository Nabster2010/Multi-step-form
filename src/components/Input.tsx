import classNames from "classnames";
import React, { useId } from "react";

const Input = (props: any) => {
  const { name, label, placeholder, value, onChange, error, type } = props;
  const id = useId();
  return (
    <div className="mt-4 text-sm  relative text-MarineBlue">
      <label htmlFor="email" className="text-xs">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        id={id.toString()}
        placeholder={placeholder}
        className={classNames(
          "w-full border border-LightGray bg-white  mt-2 py-3 px-4 rounded-md  focus:outline-none  focus:border-PurplishBlue",
          error && "border-StrawberryRed  "
        )}
      />
      {error && (
        <span className="absolute top-1 font-medium right-0 text-StrawberryRed text-xs">
          This field is required
        </span>
      )}
    </div>
  );
};

export default Input;
