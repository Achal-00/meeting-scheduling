import { useContext } from "react";
import Details from "./Details";
import { DataContext } from "../../../App";

export default function SummarySection() {
  const { data, setData } = useContext(DataContext);

  const onBack = () => {
    document.querySelector(".form-1").classList.replace("hidden", "grid");
    document.querySelector(".form-2").classList.replace("flex", "hidden");
    setData({ ...data, formNo: 1 });
  };

  return (
    <div className="flex flex-col gap-6 border-b lg:border-r lg:border-b-0 border-gray-200 py-8 px-8 pt-20 relative">
      <div className="grid">
        <img
          src="assets/logo.svg"
          alt="logo"
          className="w-20 place-self-center"
        />
      </div>
      <Details />
      <button
        className={`absolute top-4 left-4 ${
          data.formNo === 1 ? "hidden" : "block"
        }`}
        onClick={onBack}
      >
        <img src="assets/icon-back.svg" alt="go back" className="w-8" />
      </button>
    </div>
  );
}
