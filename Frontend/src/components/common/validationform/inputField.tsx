type Props={
    className?:string;
    type:string;
    placeholder?:string;
    register: any;
    errors: any
}

export const InputField: React.FC<Props> = ({ className ,type , placeholder, register, errors})=>{
    return (
        <>
        <section className={`${errors?.[type] ? 'border-2 border-red-600' : 'border-2 border-round'} ${className}`}>
            <input type={type} placeholder={placeholder} className={className}
            {...register(type)} />
        </section>
            {errors && errors[type] ? <p className="text-red-800">{errors[type].message}</p> : <></>}
        </>
    )
}