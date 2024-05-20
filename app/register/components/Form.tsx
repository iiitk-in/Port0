/* eslint-disable react/jsx-key */
"use client";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useMultiStepForm } from "./useMultiStepForm";
import CollegeForm from "./Forms/CollegeForm";
import PersonalForm from "./Forms/PersonalForm";
import Port0Form from "./Forms/Port0Form";
import { ProgressBar } from "./ProgressBar";
import { Alert } from "./Alert";

type FormData = {
  course: string;
  year: string;
  rollNumber: string;
  firstName: string;
  lastName: string;
  personalEmail: string;
  collegeEmail: string;
  lmsPassword: string;
  phone: string;
  state: string;
  port0Username: string;
  port0Password: string;
  batch: string;
};

const INITIAL_DATA: FormData = {
  course: "cse-core",
  year: "2021",
  rollNumber: "",
  collegeEmail: "",
  lmsPassword: "",
  firstName: "",
  lastName: "",
  personalEmail: "",
  phone: "",
  state: "",
  port0Username: "",
  port0Password: "",
  batch: "batch1",
};

const Form = () => {
  const dark = useSelector((state: RootState) => state.darkMode);
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }
  const { currentStep, step, back, steps, next, isFirstStep, isLastStep } =
    useMultiStepForm([
      <CollegeForm {...data} updateFields={updateFields} />,
      <PersonalForm {...data} updateFields={updateFields} />,
      <Port0Form {...data} updateFields={updateFields} />,
    ]);
  function goBack(e: FormEvent) {
    setAlertDisplay(false);
    back();
  }
  const [alertDisplay, setAlertDisplay] = useState(false);


  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep||isLastStep) {
      if(currentStep === 0){
        if(data.course === "" || data.year === "" || data.rollNumber === "" || data.collegeEmail === "" || data.lmsPassword === "" || data.batch === ""){
          setAlertDisplay(true);
          return;
        }
        else{
          setAlertDisplay(false);
          return next();
        
        }
      }
      else if(currentStep === 1){
        if(data.firstName === "" || data.lastName === "" || data.personalEmail === "" || data.phone === "" || data.state === ""){
          setAlertDisplay(true);
          return;
        }
        else{
          setAlertDisplay(false);
          return next();
        
        }
      }
      else if(currentStep === 2){
        if(data.port0Username === "" || data.port0Password === ""){
          setAlertDisplay(true);
          return;
        }
        else{
          setAlertDisplay(false);
          return next();
        
        }
      }
      else{
        return next();
      
      }
    }
    console.log(data);
  }
  return (
    <>
      <div
        className={
          dark
            ? "text-white border-2 rounded-lg border-white  transition-border duration-500 ease-in-out"
            : "text-red-900 border-2 rounded-lg border-red-900  transition-border duration-500 ease-in-out"
        }
      >
        <div className="p-10">
          <form onSubmit={onSubmit} className="flex flex-col">
            {step}
            <input type="text" required hidden></input>
            <div className={alertDisplay?"block sm:w-96 w-60 mt-3 flex ml-auto mr-auto":"hidden"}>
              <Alert message="Please fill all fields" type="warning" />
            </div>

            <div className="flex flex-row mt-5 mb-0">
              {!isFirstStep && (
                <button onClick={goBack} type="button">
                  ←
                </button>
              )}
              <button type="submit" onClick={onSubmit} className="flex ml-auto">
                {isLastStep ? "Finish" : <b>→</b>}
              </button>
            </div>

          </form>
        </div>
        <div className="p-0 m-0">
          <ProgressBar currentStep={currentStep + 1} steps={steps.length} />
        </div>
      </div>
    </>
  );
};

export default Form;