"use client"

import { createWorkspace } from "@/actions/workspaces";
import ButtonMain from "@/components/button";
import NavBar from "@/components/navbar";
import TextInput from "@/components/textinput";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from 'react';

export default function CreateWorkspace() {
    const [error, setError] = useState("");

    async function handleSubmit(formData) {
        const resp = await createWorkspace(formData);

        if(!resp.success) {
            setError(resp.message);
            return;
        }

        redirect("/workspaces")
    }
    return (
        <>
            <NavBar active={"workspaces"}/>  
            
            <main className="flex justify-center">            
                <div className="bg-neutral-50 p-11 mx-24 my-12 rounded-lg shadow-md max-[670px]:mx-0 w-max">
                    <h2>Registro de workspace</h2>
                    <span className="text-red-600"> {error}</span>
                    <form action={handleSubmit}> 
                        <div>
                            <div className="my-3">
                                <p className={"mt-4"}>Título da Workspace {"( * )"}</p>
                                <TextInput 
                                    className={"mt-4 w-full"} 
                                    type={"text"} 
                                    placeholder={"Título..."}
                                    name={"name"}
                                />
                            </div>

                            
                            <div className="my-3">
                                <p className={"mt-4"}>Imagem da Workspace(Link Url...)</p>
                                <TextInput 
                                    className={"mt-4 w-full"} 
                                    type={"text"} 
                                    placeholder={"Título..."}
                                    name={"workspaceImage"}
                                />
                            </div>

                            <div className="my-3">
                                <p>Descrição da Workspace</p>
                                <textarea name={"description"} className="p-2 border rounded-lg border-orange-400 ring-transparent w-full"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <ButtonMain className={"bg-orange-400 py-2 px-6 rounded-lg text-white hover:bg-orange-300 active:bg-orange-500"} title={"Criar"} type={"submit"}/>
                            <Link className="border border-red-500 py-2 px-6 rounded-lg text-red-500" href={"/workspaces"}>Voltar</Link>
                        </div>
                    </form>
                </div>
            </main>      
        </>
    )
}