import NavBar from "@/components/navbar";

export default function Configuracoes() {
    return (
        <>
            <NavBar action={"configuracoes"} />

            <div className="bg-neutral-50 p-11 m-10 rounded-lg">
                <h2>Configurações</h2>
            </div>
        </>
    )
}