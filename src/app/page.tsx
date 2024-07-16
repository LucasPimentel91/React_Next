import Link from "next/link"

export default function Inicio(){
    return (
        <div 
            className="
                min-h-screen
                bg-gradiene-to-r from-black to-zinc-800
                "
            >
            <h1>Masterclass Next</h1>
            <nav>
                <Link href="/primeiro">Primeiro Componente</Link>
                <link href="/flexbox">Flexbox</link>
            </nav>
        </div>

    )
}
