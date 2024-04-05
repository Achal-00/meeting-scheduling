export default function MemberSection() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-gray-900">
        I want Meeting to work for *
      </h3>
      <ul className="text-sm font-medium text-gray-900">
        <li>
          <div className="flex items-center ps-3">
            <input
              id="myself-checkbox"
              type="checkbox"
              value=""
              className="member-sec w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="myself-checkbox"
              className="py-3 ms-2 text-base text-stone-700"
            >
              🥕 Myself
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="ten-checkbox"
              type="checkbox"
              value=""
              className="member-sec w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="ten-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              👫 &lt; 10 people
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="ten-fifty-checkbox"
              type="checkbox"
              value=""
              className="member-sec w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="ten-fifty-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              🦄 10 - 50 people
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="ten-checkbox"
              type="checkbox"
              value=""
              className="member-sec w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="ten-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              🦅 50+ people
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
