import { ReactElement, useState } from "react";
export function useMultiStepForm(steps: ReactElement[]){
    const [currentStep, setCurrentStep] = useState(0);
    

    function next(){
        if(currentStep < steps.length - 1)
        setCurrentStep(currentStep + 1);
    }

    function back(){
        if(currentStep > 0)
        setCurrentStep(currentStep - 1);
    }

    function goTo(index: number){
        setCurrentStep(index);
    }

    return{
        currentStep,
        step: steps[currentStep],
        back,
        next,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === steps.length - 1,
        steps,
    }
}