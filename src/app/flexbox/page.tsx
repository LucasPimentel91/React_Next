import Caixa from "@/componentes/Caixa";

export default function Page(){
    return (
        <div>
            <h1>Flexbox</h1>
            <div 
                className="
                    h-full
                    flex flex-col
                    justify-center
                    bg-green-500
                "
            >
                <Caixa texto="#1"/>
                <Caixa texto="#2"/>
                <Caixa texto="#3"/>
            </div>
        </div>
    )
}