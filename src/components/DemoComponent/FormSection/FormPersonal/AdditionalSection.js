import { useContext } from "react";
import { DataContext } from "../../../../App";
import { toast } from "sonner";

export default function AdditionalSection() {
  const { data, setData } = useContext(DataContext);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onSchedule = () => {
    let memberCount = false;
    let moreAboutCount = false;

    document.querySelectorAll(".member-sec").forEach((x) => {
      if (x.checked) memberCount = true;
    });

    document.querySelectorAll(".more-about").forEach((x) => {
      if (x.checked) moreAboutCount = true;
    });

    if (data.name === "") {
      toast.error("Name field cannot be empty");
    } else if (data.mail === "") {
      toast.error("Email field cannot be empty");
    } else if (!regex.test(data.mail)) {
      toast.error("Invalid email");
    } else if (!memberCount) {
      toast.error("Select count of people");
    } else if (!moreAboutCount) {
      toast.error("Select atleast one option from more about section");
    } else {
      document.querySelector(".form-2").classList.replace("flex", "hidden");
      document.querySelector(".form-3").classList.replace("hidden", "flex");
      setData({ ...data, formNo: 3 });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 lg:w-[50%]">
        <label htmlFor="textarea-one" className="font-bold text-sm">
          Please, share anything that will help prepare for our meeting
        </label>
        <textarea
          name=""
          id="textarea-one"
          rows="3"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        ></textarea>
      </div>
      <div className="flex flex-col gap-2 lg:w-[50%]">
        <label htmlFor="textarea-one" className="font-bold text-sm">
          Please, share with us the name of your Meeting workspace (if any)
        </label>
        <textarea
          name=""
          id="textarea-one"
          rows="2"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        ></textarea>
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 lg:col-start-2 lg:w-[25%] lg:justify-self-end"
        onClick={onSchedule}
      >
        Schedule Event
      </button>
    </div>
  );
}
