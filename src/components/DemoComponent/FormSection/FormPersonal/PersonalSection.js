export default function PersonalSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label for="name" class="font-medium text-sm">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 lg:w-[50%]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label for="mail" class="font-medium text-sm">
          Email *
        </label>
        <input
          type="email"
          id="mail"
          name="mail"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 lg:w-[50%]"
        />
      </div>
      <button className="border border-blue-400 rounded-full py-2.5 px-5 w-fit text-sm text-blue-500 hover:bg-blue-500 hover:text-white hover:cursor-pointer">
        Add Guests
      </button>
    </div>
  );
}
