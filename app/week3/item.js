export default function Item({ name, quantity, category }) {
    return(
        <div className="bg-slate-300 m-3 p-3 rounded-md w-80">
            <ul className="p-3">
                <li className="font-bold text-xl">{name}</li>
                <li className="text-sm">order {quantity}  in {category} </li>
            </ul>
        </div>
    )
}