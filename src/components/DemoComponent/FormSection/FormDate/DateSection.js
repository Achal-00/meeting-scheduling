import { useContext } from "react";
import Calendar from "react-calendar";
import { DataContext } from "../../../../App";

export default function DateSection() {
  const { data, setData } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-medium">Select Date</h1>
        <Calendar
          onChange={(e) =>
            setData({
              ...data,
              date: e.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            })
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-medium">Timezone</h1>
        <select
          id="timezones"
          name="timezone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          required
          onChange={(e) =>
            setData({ ...data, location: e.currentTarget.value })
          }
        >
          <option value="America, New York Time">
            EST (Eastern Standard Time)
          </option>
          <option value="America, Los Angeles Time">
            PST (Pacific Standard Time)
          </option>
          <option value="Europe, London Time">GMT (Greenwich Mean Time)</option>
          <option value="Europe, Paris Time">
            CET (Central European Time)
          </option>
          <option value="Asia, Tokyo Time">JST (Japan Standard Time)</option>
          <option value="Australia, Sydney Time">
            AEDT (Australian Eastern Daylight Time)
          </option>
          <option value="Canada, Mountain Time">
            MST (Mountain Standard Time)
          </option>
          <option value="Canada, Central Time">
            CST (Central Standard Time)
          </option>
          <option value="Asia, Kolkata Time">IST (Indian Standard Time)</option>
          <option value="Asia, Dubai Time">GST (Gulf Standard Time)</option>
          <option value="Asia, Singapore Time">
            SGT (Singapore Standard Time)
          </option>
        </select>
      </div>
    </div>
  );
}
