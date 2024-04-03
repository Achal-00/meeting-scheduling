export default function DetailCard(props) {
  return (
    <div className="flex gap-2">
      <img src={props.image} alt="time" className="w-6" />
      <p className="text-stone-500">{props.data}</p>
    </div>
  );
}
