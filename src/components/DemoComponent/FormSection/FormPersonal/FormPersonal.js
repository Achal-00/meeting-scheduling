import AboutSection from "./AboutSection";
import AdditionalSection from "./AdditionalSection";
import MemberSection from "./MemberSection";
import PersonalSection from "./PersonalSection";

export default function FormPersonal() {
  return (
    <div className="flex flex-col gap-6 hidden">
      <h1 className="text-lg font-medium">Enter Details</h1>
      <PersonalSection />
      <MemberSection />
      <AboutSection />
      <AdditionalSection />
    </div>
  );
}
