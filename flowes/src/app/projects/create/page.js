// ** correção ** - Comentário: Esqueceu do 'use client', assim o next não consegue renderizar uma função client side no lado do servidor.
"use client";

import ButtonMain from "@/components/button";
import NavBar from "@/components/navbar";
import TextInput from "@/components/textinput";
import Link from 'next/link';
import {redirect} from 'next/navigation'
import { useState } from "react";
import {createProjects} from '@/actions/projetos';

export default function CreateProjects(){
    const [error, setError] = useState("");

    async function handleSubmit(formData){
        const resp = await createProjects(formData);
        if(resp.success){
            setError(resp.message);
            return;
        }
        redirect("/projects")
    }

    return(
        <>
            <NavBar/>

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
                            <ButtonMain title={"Criar"} type={"submit"}/>
                            <Link>Voltar</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}