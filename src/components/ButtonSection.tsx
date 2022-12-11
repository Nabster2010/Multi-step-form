import { useDataContext } from "../contexts/context";
import Button from "./Button";

const ButtonSection = () => {
  const { nextStep, prevStep, currStep, confirmed, setConfirmed } =
    useDataContext();
  return (
    <div className="fixed bottom-0 left-0 right-0 md:static">
      <div className="mt-8 bg-white p-4  flex justify-between items-center ">
        {currStep !== 1 ? (
          <Button variant="secondary" onClick={prevStep}>
            Go Back
          </Button>
        ) : (
          <div></div>
        )}
        <Button
          variant={currStep === 4 ? "confirm" : "primary"}
          onClick={currStep !== 4 ? nextStep : () => setConfirmed(true)}
        >
          {currStep === 4 ? "Confirm" : " Next Step"}
        </Button>
      </div>
    </div>
  );
};

export default ButtonSection;
