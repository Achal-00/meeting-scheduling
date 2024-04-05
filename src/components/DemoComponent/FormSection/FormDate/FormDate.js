import { useContext } from "react";
import DateSection from "./DateSection";
import TimeSection from "./TimeSection";
import { DataContext } from "../../../../App";
import { toast } from "sonner";

export default function FormDate() {
  const { data, setData } = useContext(DataContext);

  const onProceed = () => {
    if (data.date === "") {
      toast.error("Please select a date");
    } else if (data.location === "") {
      toast.error("Please select a timezone");
    } else if (data.time === "") {
      toast.error("Please select a time");
    } else {
      document.querySelector(".form-1").classList.replace("grid", "hidden");
      document.querySelector(".form-2").classList.replace("hidden", "flex");
      setData({ ...data, formNo: 2 });
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2 form-1">
      <DateSection />
      <TimeSection />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 lg:col-start-2 lg:w-[60%] lg:justify-self-end"
        onClick={onProceed}
      >
        Proceed
      </button>
    </div>
  );
}
