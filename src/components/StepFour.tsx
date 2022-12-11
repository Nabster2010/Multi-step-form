import { useDataContext } from "../contexts/context";

const StepFour = () => {
  const { selectedPlan, selectedAddons, plans, addons, goToStep, monthly } =
    useDataContext();

  const currPlan = plans.find((plan) => plan.id === selectedPlan);

  const currAddons = selectedAddons.map((id) => {
    return addons.find((addon) => addon.id === id);
  });

  const price = (price: { monthly: number; yearly: number }): number =>
    monthly ? price?.monthly : price?.yearly;

  const totalPrice: number =
    currAddons.reduce((acc, cur) => acc + price(cur?.price), 0) +
    price(currPlan?.price);

  return (
    <div className="bg-white shadow-lg md:shadow-none  rounded-lg mx-4 md:mx-0 -mt-20 md:mt-0 px-6 py-8">
      <div>
        <h1 className="font-bold text-MarineBlue text-2xl md:text-3xl">
          Finishing up
        </h1>
        <p className="mt-3 text-CoolGray">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="p-4 mt-8 bg-Alabaster rounded-md">
        <div className="flex items-center justify-between border-b pb-3 ">
          <div className="">
            <h1 className="text-MarineBlue text-sm font-medium">
              {currPlan?.title}({monthly ? "Monthly" : "Yearly"})
            </h1>
            <button
              onClick={() => goToStep(2)}
              className="text-sm text-CoolGray underline"
            >
              Change
            </button>
          </div>
          <p className="text-MarineBlue text-sm font-medium">{`$${price(
            currPlan?.price
          )}/${monthly ? "mo" : "yr"}`}</p>
        </div>
        {currAddons.length > 0 &&
          currAddons.map((addon) => (
            <div
              key={addon?.id}
              className="flex items-center justify-between mt-4 "
            >
              <h1 className="text-CoolGray text-sm ">{addon?.title}</h1>
              <p className="text-MarineBlue text-sm ">{`${price(
                addon?.price
              )}/${monthly ? "mo" : "yr"}`}</p>
            </div>
          ))}
      </div>
      <div className="p-4 mt-4 flex justify-between items-center">
        <h1 className="text-CoolGray text-sm ">
          Total({`per ${monthly ? "month" : "year"}`})
        </h1>
        <p className=" text-PurplishBlue font-bold ">
          ${`${totalPrice}/${monthly ? "mo" : "yr"}`}
        </p>
      </div>
    </div>
  );
};

export default StepFour;
