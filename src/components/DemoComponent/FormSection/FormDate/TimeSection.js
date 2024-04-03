export default function TimeSection() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-medium">Select Time</h1>
      <ul id="timetable" class="grid w-full grid-cols-2 gap-2">
        <li>
          <input
            type="radio"
            id="10-am"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="10-am"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            10:00 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="10-30-am"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="10-30-am"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            10:30 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="11-am"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="11-am"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            11:00 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="11-30-am"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="11-30-am"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            11:30 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="12-am"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="12-am"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            12:00 AM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="12-30-pm"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="12-30-pm"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            12:30 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="1-pm"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="1-pm"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            01:00 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="1-30-pm"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="1-30-pm"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            01:30 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="2-pm"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="2-pm"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            02:00 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="2-30-pm"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="2-30-pm"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            02:30 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="3-pm"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="3-pm"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            03:00 PM
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="3-30-pm"
            value=""
            class="hidden peer"
            name="timetable"
          />
          <label
            for="3-30-pm"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500"
          >
            03:30 PM
          </label>
        </li>
      </ul>
    </div>
  );
}
