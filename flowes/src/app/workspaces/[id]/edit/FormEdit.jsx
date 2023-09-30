"use client"

import { updateWorkspace } from "@/actions/workspaces";
import ButtonMain from "@/components/button";
import TextInput from "@/components/textinput";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function FormEdit({ workspace }) {
    const[error, setError] = useState("");
    const[workspaceEdit, setWorkspaceEdit] = useState(workspace);

    async function handleSubmit() {
        const resp = await updateWorkspace(workspaceEdit);
        if(resp?.error) {
            setError(resp.error)
            return;
        }
        redirect("/workspaces")
    }

    function handleFieldEdit(field, value) {
        setWorkspaceEdit({
            ...workspaceEdit,
            [field]: value
        })
    }

    return (<>
           <main className="flex justify-center shadow-md rounded-lg">            
                <div className="bg-neutral-50 p-11 mx-24 my-12 rounded-lg shadow-md max-[670px]:mx-0 w-max">
                    <h2>Editar  workspace</h2>
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
                                    value={workspaceEdit.name}
                                    onChange={e => handleFieldEdit("name", e.target.value)}
                                />
                            </div>

                            
                            <div className="my-3">
                                <p className={"mt-4"}>Imagem da Workspace(Link Url...)</p>
                                <TextInput 
                                    className={"mt-4 w-full"} 
                                    type={"text"} 
                                    placeholder={"Título..."}
                                    name={"workspaceImage"}
                                    value={workspaceEdit.workspaceImage}
                                    onChange={e => handleFieldEdit("workspaceImage", e.target.value)}
                                />
                            </div>

                            <div className="my-3">
                                <p>Descrição da Workspace</p>
                                <textarea 
                                    name={"description"} 
                                    className="p-2 border rounded-lg border-orange-400 ring-transparent w-full"
                                    onChange={e => handleFieldEdit("description", e.target.value)}
                                    value={workspaceEdit.description}
                                    ></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <ButtonMain className={"bg-orange-400 py-2 px-6 rounded-lg text-white hover:bg-orange-300 active:bg-orange-500"} title={"Editar"} type={"submit"}/>
                            <Link className="border border-red-500 py-2 px-6 rounded-lg text-red-500" href={"/workspaces"}>Voltar</Link>
                        </div>
                    </form>
                </div>
            </main>      
    </>)
}   
