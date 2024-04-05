import DetailCard from "../SummarySection/DetailCard";

export default function DetailedSection() {
  return (
    <div>
      <p className="text-center text-sm text-stone-500 pb-2">
        A calendar invitation has been sent to your email address.
      </p>
      <div className="border-2 border-stone-300 p-4 rounded-lg flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-stone-900 pb-2">
          Meeting Demo
        </h2>
        <DetailCard image="assets/icon-user.svg" data="Polina Zenevich" />
        <DetailCard
          image="assets/icon-date.svg"
          data="12:00 - 12:45, Thursday, November 30, 2023"
        />
        <DetailCard
          image="assets/icon-location.svg"
          data="UK, Ireland, Lisbon Time"
        />
        <DetailCard
          image="assets/icon-video.svg"
          data="Web conferencing details to follow"
        />
      </div>
    </div>
  );
}
