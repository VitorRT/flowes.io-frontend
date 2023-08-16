import Link from "next/link"

export default function NavBar({ active }) {
    return (
        <>
            <header className="bg-neutral-50 flex gap-14 py-3 px-14 items-center shadow-md overflow-hidden">
                <h1 className="text-2xl text-orange-600">Flowes</h1>
                <nav className="flex justify-between w-full items-center">
                    <ul className="flex gap-16 items-center">
                        <li><Link className={active === "home" ? "text-orange-600": ""} href="/">home</Link></li>
                        <li><Link className={active === "workspaces" ? "text-orange-600": ""} href="/workspaces">workspaces</Link></li>
                    </ul>
                    <ul className="flex gap-16 items-center">
                        <li><Link className={active === "configuracoes" ? "text-orange-600" : ""} href="/configuracoes">configurações</Link></li>
                        <li><Link className={active === "notificacoes" ? "text-orange-600" : ""} href="/notificacoes">notificações</Link></li>

                        <img src="https://i.pravatar.cc/100" alt="avatar" className="w-10 h-10 rounded-full border-2 border-orange-600" />
                    </ul>
                </nav>
            </header>
        </>
    ) 
}