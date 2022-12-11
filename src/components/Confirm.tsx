import ThankYouIcon from "../assets/icon-thank-you.svg";
const Confirm = () => {
  return (
    <div className="  md:h-full md:flex bg-white shadow-lg md:shadow-none rounded-lg mx-4 -mt-20 md:mt-0 px-6 py-16 text-center">
      <div className="flex flex-col  justify-center items-center">
        <img src={ThankYouIcon} className="w-16 h-16" alt="" />
        <h1 className="font-bold text-MarineBlue text-2xl md:text-3xl mt-8 ">
          Thank You!
        </h1>
        <p className="mt-3 text-CoolGray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Confirm;
