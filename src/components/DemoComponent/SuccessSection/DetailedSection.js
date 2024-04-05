import { useContext } from "react";
import DetailCard from "../SummarySection/DetailCard";
import { DataContext } from "../../../App";

export default function DetailedSection() {
  const { data } = useContext(DataContext);

  return (
    <div>
      <p className="text-center text-sm text-stone-500 pb-2">
        A calendar invitation has been sent to your email address.
      </p>
      <div className="border-2 border-stone-300 p-4 rounded-lg flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-stone-900 pb-2">
          Meeting Demo
        </h2>
        <DetailCard image="assets/icon-user.svg" data={data.name} />
        <DetailCard
          image="assets/icon-date.svg"
          data={`${data.time}, ${data.date}`}
        />
        <DetailCard image="assets/icon-location.svg" data={data.location} />
        <DetailCard
          image="assets/icon-video.svg"
          data="Web conferencing details to follow"
        />
      </div>
    </div>
  );
}
