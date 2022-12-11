export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}
export interface Plan {
  id: number;
  title: string;
  price: {
    monthly: number;
    yearly: number;
  };
  icon: string;
}
export interface Addon {
  id: number;
  title: string;
  desc: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

export type ContextProps = {
  personalInfo: PersonalInfo;
  selectedPlan: number;
  plans: Plan[];
  addons: Addon[];
  monthly: boolean;
  selectedAddons: number[];
  currStep: number;
  errors: ErrorProps;
  confirmed: boolean;
  setConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  selectPlan: (planId: number) => void;
  toggleMonthly: () => void;
  selectAddon: (addonId: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
};

export type ErrorProps = {
  name: boolean;
  email: boolean;
  phone: boolean;
};
