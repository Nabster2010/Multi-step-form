import { useDataContext } from "../contexts/context.js";
import Plan from "./Plan";
import Toggle from "./Toggle";

const StepTwo = () => {
  const { monthly, plans } = useDataContext();
  return (
    <div className=" bg-white  shadow-lg md:shadow-none  rounded-lg mx-4 md:mx-0 -mt-20 md:mt-0 px-6 py-8">
      <div>
        <h1 className="font-bold text-MarineBlue text-2xl md:text-3xl ">
          Select your plan
        </h1>
        <p className="mt-3 text-CoolGray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  gap-4 mt-8">
        {plans.map((plan) => (
          <Plan
            key={plan.id}
            id={plan.id}
            title={plan.title}
            price={plan.price}
            icon={plan.icon}
          />
        ))}
      </div>
      <div className="bg-Alabaster text-sm font-medium p-4 flex justify-center items-center gap-8 rounded-md mt-8">
        <h3 className={monthly ? "text-MarineBlue" : "text-CoolGray"}>
          Monthly
        </h3>
        <Toggle />
        <h3 className={!monthly ? "text-MarineBlue" : "text-CoolGray"}>
          Yearly
        </h3>
      </div>
    </div>
  );
};

export default StepTwo;
