import { useContext } from "react";
import { DataContext } from "../../../../App";

export default function PersonalSection() {
  const { data, setData } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-medium text-sm">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 lg:w-[50%]"
          onChange={(e) => setData({ ...data, name: e.currentTarget.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="mail" className="font-medium text-sm">
          Email *
        </label>
        <input
          type="email"
          id="mail"
          name="mail"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 lg:w-[50%]"
          onChange={(e) => setData({ ...data, mail: e.currentTarget.value })}
        />
      </div>
      <button className="border border-blue-400 rounded-full py-2.5 px-5 w-fit text-sm text-blue-500 hover:bg-blue-500 hover:text-white hover:cursor-pointer">
        Add Guests
      </button>
    </div>
  );
}
