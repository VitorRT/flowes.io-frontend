export default function TextInput({ className, type, placeholder, name,register=()=>{}, value, onChange }) {
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
        if (!type) return "text"; // Se type for undefined, retorna "text"
        for(let t of types) {
            if (type.trim() === t) return t;
        }
        return "text"; // Retorna "text" se não encontrar um tipo suportado
    }

    const defaultStyle = "p-2 border rounded-lg border-orange-400 ring-transparent";

    return (
        <>
            <input 
                className={`${defaultStyle} ${className}`} 
                type={getInputType()} 
                placeholder={placeholder} 
                name={name}
                value={value}
                onChange={onChange}
                {...register(name)}
            />
        </>
    )
}