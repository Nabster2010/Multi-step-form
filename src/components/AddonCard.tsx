import classNames from "classnames";
import { useId } from "react";
import { useDataContext } from "../contexts/context";

type AddonCardProps = {
  id: number;
  title: string;
  desc: string;
  price: {
    monthly: number;
    yearly: number;
  };
};

const AddOnCard = ({ id, title, desc, price }: AddonCardProps) => {
  const { monthly, selectAddon, selectedAddons } = useDataContext();
  const selected = selectedAddons.includes(id);
  const uid = useId();
  return (
    <label
      htmlFor={uid}
      className={classNames(
        "border md:h-16 h-20 rounded-md p-4 flex items-center justify-between cursor-pointer",
        selected && "bg-Alabaster border-PurplishBlue"
      )}
    >
      <div className="flex items-center gap-4">
        <input
          onChange={() => selectAddon(id)}
          checked={selected}
          className="w-4 h-4 accent-PurplishBlue"
          type="checkbox"
          id={uid}
        />
        <div>
          <h2 className="text-MarineBlue font-medium">{title}</h2>
          <p className="text-xs  text-CoolGray">{desc}</p>
        </div>
      </div>
      <p className="text-PurplishBlue text-xs">
        {monthly ? `+$${price.monthly}/mo` : `+$${price.yearly}/Yr`}
      </p>
    </label>
  );
};

export default AddOnCard;
