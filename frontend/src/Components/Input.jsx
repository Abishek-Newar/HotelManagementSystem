
export default function Input({type,placeholder,id,name,onChange}){
    return(
        <label htmlFor={id}>
            <h1>{name}:</h1>
            <input className=" px-3 py-1 h-10 border rounded-md w-[100%] focus:shadow-lg" type={type} placeholder={placeholder} id={id} onChange={onChange} required/>
        </label>
    )
}