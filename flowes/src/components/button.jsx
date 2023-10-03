export default function ButtonMain({title, type, className}) {
    const getButtonType = (type) => {
        if(type.trim() === "button") return "button"
        if(type.trim() === "submit") return "submit"
        if(type.trim() === "reset") return "reset"
        if(type.trim() === null || type.trim() === "") return "button"
    } 
    return (
        <>
            <button
                type={getButtonType(type)}
                className={className}
            >{title}</button>        
        </>
    )
}