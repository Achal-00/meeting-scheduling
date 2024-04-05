export default function SuccessMessage() {
  return (
    <div className="flex gap-2 items-center">
      <img src="assets/icon-check.svg" alt="success" className="w-6" />
      <h1 className="text-2xl font-semibold">You are scheduled</h1>
    </div>
  );
}
