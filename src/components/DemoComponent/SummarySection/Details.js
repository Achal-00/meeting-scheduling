import { useContext } from "react";
import DetailCard from "./DetailCard";
import { DataContext } from "../../../App";

export default function Details() {
  const { data } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl py-2">Meeting Demo</h1>
      <DetailCard image="assets/icon-clock.svg" data="45 min" />
      {data.formNo === 2 ? (
        <>
          <DetailCard
            image="assets/icon-date.svg"
            data={`${data.time}, ${data.date}`}
          />
          <DetailCard image="assets/icon-location.svg" data={data.location} />
        </>
      ) : null}
      <p className="text-stone-600 py-4">
        Book a meeting with our team. Talk to a real person about how to get
        your processes set up with us 🦄 or not 💩
      </p>
    </div>
  );
}
