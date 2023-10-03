"use server"

import { getProjetoById } from "@/actions/projetos"
import NavBar from "@/components/navbar"
import FormEdit from "./FormEdit"

export default async function EditProjectPage({params}){
    const projeto = await getProjetoById(params.id)

    return(
        <>
            <NavBar active={"projects"}/>
            <FormEdit projects={projeto}/>       
        </>
    )
}