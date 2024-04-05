import { useContext } from "react";
import { DataContext } from "../../../../App";

export default function TimeSection() {
  const { data, setData } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-medium">Select Time</h1>
      <ul id="timetable" className="grid w-full grid-cols-2 gap-2">
        <li>
          <input
            type="radio"
            id="10-am"
            value="10:00 - 10:45"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="10-am"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            10:00 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="10-30-am"
            value="10:30 - 11:15"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="10-30-am"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            10:30 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="11-am"
            value="11:00 - 11:45"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="11-am"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            11:00 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="11-30-am"
            value="11:30 - 12:15"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="11-30-am"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            11:30 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="12-am"
            value="12:00 - 12:45"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="12-am"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            12:00 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="12-30-pm"
            value="12:30 - 01:15"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="12-30-pm"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            12:30 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="1-pm"
            value="01:00 - 01:45"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="1-pm"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            01:00 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="1-30-pm"
            value="01:30 - 02:15"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="1-30-pm"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            01:30 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="2-pm"
            value="02:00 - 02:45"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="2-pm"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            02:00 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="2-30-pm"
            value="02:30 - 03:15"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="2-30-pm"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            02:30 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="3-pm"
            value="03:00 - 03:45"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="3-pm"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            03:00 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="3-30-pm"
            value="03:30 - 04:15"
            className="hidden peer"
            name="timetable"
            onChange={(e) => setData({ ...data, time: e.currentTarget.value })}
          />
          <label
            htmlFor="3-30-pm"
            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            03:30 PM
          </label>
        </li>
      </ul>
    </div>
  );
}
