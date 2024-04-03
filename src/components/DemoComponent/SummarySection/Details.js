import DetailCard from "./DetailCard";

export default function Details() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl py-2">Meeting Demo</h1>
      <DetailCard image="assets/icon-clock.svg" data="45 min" />
      <DetailCard
        image="assets/icon-date.svg"
        data="12:00 - 12:45, Thursday, November 30, 2023"
      />
      <DetailCard
        image="assets/icon-location.svg"
        data="UK, Ireland, Lisbon Time"
      />
      <p className="text-stone-600 py-4">
        Book a meeting with our team. Talk to a real person about how to get
        your processes set up with us 🦄 or not 💩
      </p>
    </div>
  );
}
