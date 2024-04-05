export default function AboutSection() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-gray-900">You are more about *</h3>
      <ul className="text-sm font-medium text-gray-900">
        <li>
          <div className="flex items-center ps-3">
            <input
              id="mountain-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="mountain-checkbox"
              className="py-3 ms-2 text-base text-stone-700"
            >
              🗻 Leadership
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="consulting-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="consulting-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              🦉 Consulting
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="product-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="product-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              🌞 Product Management
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="design-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="design-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              🎨 Design
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="engineering-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="engineering-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              💻 Engineering
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="sales-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="sales-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              🎣 Sales
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="marketing-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="marketing-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              💣 Marketing
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="human-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="human-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              💎 Human Resources
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="education-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="education-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              📚 Education
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center ps-3">
            <input
              id="else-checkbox"
              type="checkbox"
              value=""
              className="more-about w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="else-checkbox"
              className="py-3 ms-2 text-stone-700 text-base"
            >
              ❓ Something Else
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
