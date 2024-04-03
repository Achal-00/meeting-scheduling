import DateSection from "./DateSection";
import TimeSection from "./TimeSection";

export default function FormDate() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <DateSection />
      <TimeSection />
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 lg:col-start-2 lg:w-[60%] lg:justify-self-end"
      >
        Proceed
      </button>
    </div>
  );
}
