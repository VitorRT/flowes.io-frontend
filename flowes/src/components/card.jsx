export default function Card(props) {
    return (
        <div className={props.className + " w-full border border-orange-200 p-6 rounded-xl"}>
            {props.children}
        </div>
    )
}