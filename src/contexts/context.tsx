import React, { useState } from "react";
import validator from "validator";
import { Addon, ContextProps, ErrorProps, PersonalInfo, Plan } from "../types";
import { PLANS, ADDONS } from "../data";
const DataContext = React.createContext<ContextProps | null>(null);

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [confirmed, setConfirmed] = useState(false);
  const [currStep, setCurrStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const [monthly, setMonthly] = useState(true);
  const errorsInitialState = { name: false, email: false, phone: false };
  const [errors, setErrors] = useState<ErrorProps>(errorsInitialState);
  const [plans] = useState<Plan[]>(PLANS);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [addons] = useState<Addon[]>(ADDONS);
  const [selectedAddons, setSelectedAddon] = useState<number[]>([]);

  const nextStep = (): void => {
    if (currStep === 4) return;
    if (currStep === 1) {
      if (
        validator.isEmpty(personalInfo.name) ||
        !validator.isEmail(personalInfo.email) ||
        !validator.isNumeric(personalInfo.phone)
      ) {
        setErrors({
          ...errors,
          name: validator.isEmpty(personalInfo.name),
          email: !validator.isEmail(personalInfo.email),
          phone: !validator.isNumeric(personalInfo.phone),
        });
        return;
      } else {
        return setCurrStep((prev) => prev + 1);
      }
    }
    setCurrStep((prev) => prev + 1);
  };

  const prevStep = (): void => {
    if (currStep === 1) return;
    setErrors(errorsInitialState);
    setCurrStep((prev) => prev - 1);
  };

  const selectAddon = (id: number): void => {
    if (selectedAddons.includes(id)) {
      setSelectedAddon((prev) => prev.filter((a) => a !== id));
    } else {
      setSelectedAddon((prev) => [...prev, id]);
    }
  };
  const selectPlan = (pladId: number): void => {
    setSelectedPlan(pladId);
  };
  const toggleMonthly = (): void => {
    setMonthly((prev) => !prev);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const goToStep = (step: number): void => {
    if (step > 4 || step < 1) return;
    setCurrStep(step);
  };

  const value = {
    personalInfo,
    plans,
    selectedPlan,
    addons,
    selectedAddons,
    monthly,
    currStep,
    errors,
    confirmed,
    setConfirmed,
    handleChange,
    setMonthly,
    selectPlan,
    toggleMonthly,
    selectAddon,
    nextStep,
    prevStep,
    goToStep,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const data = React.useContext(DataContext);
  return data as ContextProps;
};
