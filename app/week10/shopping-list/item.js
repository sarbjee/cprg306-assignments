export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    onSelect({ item: name });
  };

  return (
    <div>
      <ul
        className="my-1 px-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer max-w-sm"
        onClick={handleClick}
      >
        <li className="font-bold text-xl capitalize text-gray-800">{name}</li>
        <li className="text-gray-600">
          Buy {quantity} in {category}
        </li>
      </ul>
    </div>
  );
}






