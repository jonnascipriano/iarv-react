export default function Botao({children}){
    return(
        <button className="cursor-pointer px-6 py-2 bg-quarternary rounded text-text font-bold">
            {children}
        </button>
    )
}