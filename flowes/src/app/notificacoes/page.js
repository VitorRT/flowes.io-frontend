import NavBar from "@/components/navbar";

export default function Notificacoes() {
    return (
        <>
            <NavBar action={"notificacoes"} />

            <div className="bg-neutral-50 p-11 m-10 rounded-lg">
                <h2>Notificações</h2>
            </div>
        </>
    )
}