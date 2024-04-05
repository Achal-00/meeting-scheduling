import DetailedSection from "./DetailedSection";
import SuccessMessage from "./SuccessMessage";
import UserImage from "./UserImage";

export default function SuccessSection() {
  return (
    <div className="absolute w-full h-full bg-white rounded-lg py-20 px-4 flex flex-col items-center gap-8 hidden">
      <UserImage />
      <SuccessMessage />
      <DetailedSection />
    </div>
  );
}
