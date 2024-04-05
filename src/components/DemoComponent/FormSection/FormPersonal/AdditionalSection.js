export default function AdditionalSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 lg:w-[50%]">
        <label for="textarea-one" class="font-bold text-sm">
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
        <label for="textarea-one" class="font-bold text-sm">
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
        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 lg:col-start-2 lg:w-[25%] lg:justify-self-end"
      >
        Schedule Event
      </button>
    </div>
  );
}
