import classNames from "classnames";
import { useDataContext } from "../contexts/context.js";

type PlanProps = {
  id: number;
  title: string;
  price: {
    monthly: number;
    yearly: number;
  };
  icon: string;
};

const Plan = ({ id, title, price, icon }: PlanProps) => {
  const { selectPlan, monthly, selectedPlan } = useDataContext();
  const active = selectedPlan === id;
  return (
    <div
      onClick={() => selectPlan(id)}
      className={classNames(
        "plan border rounded-md p-4 flex md:flex-col md:items-start md:flex-1 items-center h-20 md:h-auto gap-4 cursor-pointer",
        active && "bg-Alabaster border-PurplishBlue"
      )}
    >
      <img src={icon} className="" alt="" />
      <div>
        <h2 className="text-MarineBlue font-medium">{title}</h2>
        <p className="text-xs font-medium text-CoolGray">
          {monthly ? `$${price.monthly}/mo` : `$${price.yearly}/Yr`}
        </p>
        <p
          className={classNames(
            "text-xs mt-1 text-MarineBlue",
            monthly && "hidden"
          )}
        >
          2 months free
        </p>
      </div>
    </div>
  );
};

export default Plan;
