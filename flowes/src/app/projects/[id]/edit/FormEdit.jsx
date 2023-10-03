"use client"

import { updateProject } from "@/actions/projetos"
import ButtonMain from "@/components/button"
import TextInput from "@/components/textinput"
import Link from 'next/link'
import {redirect} from 'next/navigation'
import { useState } from "react"

export default function FormEdit({projects}){
    const [error, setError] = useState("");
    const [projectEdit, setProjectEdit] = useState(projects);


    async function handleSubmit(){
        const resp = await updateProject(projectEdit);
        if(resp?.error){
            setError(resp.error);
            return;
        }
        redirect("/projects")
    }

    function handleFieldEdit(){
        setProjectEdit({
            ...projectEdit,
            [field]: value
        })
    }

    return(
        <>
            <main>
                <div>
                    <h2></h2>
                    <span></span>
                    <form action={handleSubmit}>
                        <div>
                            <div>
                                <p></p>
                                <TextInput/>
                            </div>
                            
                            <div>
                                <p></p>
                                <TextInput/>
                            </div>
                            
                            <div>
                                <p></p>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div>
                            <ButtonMain title={"Editar"} type={"submit"}/>
                            <Link>Voltar</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}