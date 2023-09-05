'use client'

import { useState } from 'react';
import Link from "next/link";

export default function NavBar({ active }) {
    const [navBarActive, setNavBarActive] = useState(false);

    return (
        <>
            <header className="bg-neutral-50 lg:flex  py-3 px-14 items-center shadow-md">
                <div className='flex justify-between'>
                    <h1 className="text-2xl text-orange-600 mr-10">Flowes</h1>
                    <button className="outline-none mobile-menu-button lg:hidden" onClick={() => setNavBarActive(old => !old)}>
                        <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <nav className={`lg:flex ${navBarActive ? 'block' : 'hidden'} w-full items-center justify-between` } id="navbar-default">
                    <ul className={`lg:flex gap-16 items-center`}>
                        <li className={`lg:my-0 my-6 ${active === "home" ? "text-orange-600" : ""}`}><Link href="/">home</Link></li>
                        <li className={`lg:my-0 my-6 ${active === "workspaces" ? "text-orange-600" : ""}`}><Link href="/workspaces">workspaces</Link></li>
                    </ul>
                    <ul className="lg:flex gap-16 items-center">
                        <li className={`lg:my-0 my-6 ${active === "configuracoes" ? "text-orange-600" : ""}`}><Link href="/configuracoes">configurações</Link></li>
                        <li className={`lg:my-0 my-6 ${active === "notificacoes" ? "text-orange-600" : ""}`}><Link href="/notificacoes">notificações</Link></li>
                        <img src="https://i.pravatar.cc/100" alt="avatar" className="w-10 h-10 rounded-full border-2 border-orange-600 " />
                    </ul>
                </nav>
            </header>
        </>
    )
}