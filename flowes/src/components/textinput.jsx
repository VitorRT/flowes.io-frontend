export default function TextInput({ className, type, placeholder }) {
    const types = [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
    ]
    const getInputType = () => {
        for(let t of types) {
            if (type.trim() === t) return t;
            if (type.trim() === null || type.trim() === "") return "text";
        }
    }

    const defaultStyle = "p-2 border rounded-lg border-orange-400 ring-transparent";

    return (
        <>
            <input 
                className={`${defaultStyle} ${className}`} 
                type={getInputType()} 
                placeholder={placeholder} 

            />
        </>
    )
}