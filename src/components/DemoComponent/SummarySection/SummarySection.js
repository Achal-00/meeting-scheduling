import Details from "./Details";

export default function SummarySection() {
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
      <button className="absolute top-4 left-4">
        <img src="assets/icon-back.svg" alt="go back" className="w-8" />
      </button>
    </div>
  );
}
