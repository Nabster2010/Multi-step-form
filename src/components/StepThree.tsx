import { useDataContext } from "../contexts/context.js";
import AddOnCard from "./AddonCard.js";

const StepThree = () => {
  const { addons } = useDataContext();
  return (
    <div className="bg-white shadow-lg md:shadow-none  rounded-lg mx-4 md:mx-0 -mt-20 md:mt-0 px-6 py-8">
      <div>
        <h1 className="font-bold text-MarineBlue text-2xl md:text-3xl ">
          Pick add-ons
        </h1>
        <p className="mt-3 text-CoolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        {addons.map((addon) => (
          <AddOnCard key={addon.id} {...addon} />
        ))}
      </div>
    </div>
  );
};

export default StepThree;
