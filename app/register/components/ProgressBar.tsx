import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export function ProgressBar({
  currentStep,
  steps,
}: {
  currentStep: number;
  steps: number;
}) {
  const dark = useSelector((state: RootState) => state.darkMode);
  const progress = (currentStep / steps) * 100;
  return (
    <div>
      <div
        style={
          progress != 100 && !dark
            ? {
                width: `${progress}%`,
                backgroundColor: "maroon",
                borderRadius: "0px 5px 0px 5px",
                height: "10px",
              }
            : progress != 100 && dark
              ? {
                  width: `${progress}%`,
                  backgroundColor: "white",
                  borderRadius: "0px 5px 0px 5px",
                  height: "10px",
                }
              : progress == 100 && dark
                ? {
                    width: `${progress}%`,
                    backgroundColor: "white",
                    borderRadius: "0px 0px 5px 5px",
                    height: "10px",
                  }
                : {
                    width: `${progress}%`,
                    backgroundColor: "maroon",
                    borderRadius: "0px 0px 5px 5px",
                    height: "10px",
                  }
        }
      >
        <pre> </pre>
      </div>
    </div>
  );
}
