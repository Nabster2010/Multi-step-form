import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const button = cva("text-sm w-24 px-2", {
  variants: {
    variant: {
      primary:
        "bg-MarineBlue  text-white py-2 rounded-md hover:bg-MarineBlue/80 transition ",
      secondary: "text-CoolGray hover:text-MarineBlue transition ",
      confirm:
        " bg-PurplishBlue  text-white py-2 rounded-md hover:bg-PurplishBlue/80 transition",
    },
  },
  compoundVariants: [
    {
      variant: "primary",

      className: "uppercase",
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    },
  ],
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
}

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={button({ variant })}>
      {children}
    </button>
  );
};

export default Button;
