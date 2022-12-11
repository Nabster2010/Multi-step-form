import ButtonSection from "./components/ButtonSection";
import Nav from "./components/Nav";
import { useDataContext } from "./contexts/context.js";
import { lazy, Suspense } from "react";
const StepOne = lazy(() => import("./components/StepOne"));
const StepTwo = lazy(() => import("./components/StepTwo"));
const StepThree = lazy(() => import("./components/StepThree"));
const StepFour = lazy(() => import("./components/StepFour"));
const Confirm = lazy(() => import("./components/Confirm"));

const App = () => {
  const { currStep, confirmed } = useDataContext();

  return (
    <div
      className="relative min-h-[600px] flex flex-col  md:shadow-lg  
     md:bg-white md:my-10 md:rounded-xl md:max-w-4xl mx-auto md:p-4  md:grid md:grid-cols-3"
    >
      <Nav currStep={currStep} />
      <div className="flex  flex-1 flex-col h-full justify-between md:col-span-2  md:mx-16 mb-36 md:mb-0 ">
        <Suspense fallback={<h1>loading...</h1>}>
          {CurrentStep(currStep, confirmed)}
        </Suspense>

        {!confirmed && <ButtonSection />}
      </div>
    </div>
  );
};

export default App;

const CurrentStep = (currStep: number, confirmed: boolean): JSX.Element => {
  switch (currStep) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo />;
    case 3:
      return <StepThree />;
    case 4:
      return confirmed ? <Confirm /> : <StepFour />;
    default:
      return <StepOne />;
  }
};
