import FormDate from "./FormDate/FormDate";
import FormPersonal from "./FormPersonal/FormPersonal";

export default function FormSection() {
  return (
    <div className="py-4 px-8 lg:pt-20 overflow-y-scroll">
      <FormDate />
      <FormPersonal />
    </div>
  );
}
