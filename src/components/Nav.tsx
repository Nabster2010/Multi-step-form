import StepIndicator from "./StepIndicator";

const STEPS = [
  {
    id: 1,
    title: "your info",
  },
  {
    id: 2,
    title: "select plan",
  },
  {
    id: 3,
    title: "add-ons",
  },
  {
    id: 4,
    title: "summary",
  },
];
const Nav = ({ currStep }: { currStep: number }) => {
  return (
    <div className="bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-[url('/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover md:bg-cover  md:rounded-xl md:py-8 md:px-8 md:h-auto h-52 pt-8 ">
      <div className="w-full flex md:flex-col md:gap-8 justify-center gap-4 ">
        {STEPS.map((step) => (
          <StepIndicator
            key={step.id}
            step={step.id}
            active={currStep === step.id}
            title={step.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Nav;
