import FormSection from "./FormSection/FormSection";
import SuccessSection from "./SuccessSection/SuccessSection";
import SummarySection from "./SummarySection/SummarySection";

export default function DemoComponent() {
  return (
    <div className="bg-white my-4 z-50 grid lg:grid-cols-[1fr_2fr] gap-4 rounded-lg w-[90%] max-w-[70rem] relative lg:h-[35rem]">
      <SummarySection />
      <FormSection />
      <SuccessSection />
      <button className="absolute top-4 right-4">
        <img src="assets/icon-close.svg" alt="close" className="w-8" />
      </button>
    </div>
  );
}
