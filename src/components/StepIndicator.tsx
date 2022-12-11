import classNames from "classnames";
import { useDataContext } from "../contexts/context";

type StepIndicatorProps = {
  active?: boolean;
  step: number;
  title: string;
};

const StepIndicator = ({ active = false, step, title }: StepIndicatorProps) => {
  return (
    <div className="md:flex md:items-center gap-4">
      <button
        className={classNames(
          "w-10 h-10 rounded-full border  bg-transparent flex justify-center items-center font-medium text-white",
          active && "bg-LightBlue text-black"
        )}
      >
        <span className="sr-only">Go to Step {step}</span>
        {step}
      </button>
      <div className="hidden md:block">
        <p className="text-LightGray text-xs uppercase">Step {step}</p>
        <h1 className="uppercase text-sm tracking-wide text-white font-medium">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default StepIndicator;
