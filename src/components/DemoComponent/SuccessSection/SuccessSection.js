import DetailedSection from "./DetailedSection";
import SuccessMessage from "./SuccessMessage";
import UserImage from "./UserImage";

export default function SuccessSection() {
  return (
    <div className="form-3 absolute w-full h-auto bg-white rounded-lg pt-20 pb-8 px-4 flex-col items-center gap-8 hidden">
      <UserImage />
      <SuccessMessage />
      <DetailedSection />
    </div>
  );
}
