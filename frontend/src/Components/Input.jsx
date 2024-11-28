
export default function Input({type,placeholder,id,name,onChange}){
    return(
        <label for={id}>
            <h1>{name}</h1>
            <input type={type} placeholder={placeholder} id={id} onChange={onChange} required/>
        </label>
    )
}