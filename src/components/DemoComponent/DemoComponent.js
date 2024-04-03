import FormSection from "./FormSection/FormSection";
import SummarySection from "./SummarySection/SummarySection";

export default function DemoComponent() {
  return (
    <div className="row-start-1 row-end-2 col-start-1 col-end-2 self-center justify-self-center bg-white z-50 grid lg:grid-cols-[1fr_2fr] gap-4 rounded-lg m-4 w-[90%] max-w-[70rem] relative">
      <SummarySection />
      <FormSection />
      <button className="absolute top-4 right-4">
        <img src="assets/icon-close.svg" alt="close" className="w-8" />
      </button>
    </div>
  );
}
