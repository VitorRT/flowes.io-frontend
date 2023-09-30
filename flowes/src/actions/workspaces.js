"use server"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"


const url = process.env.NEXT_PUBLIC_BASE_URL + "/workspace"

export async function createWorkspace(formData){
   // const token = cookies().get('') //token

    const options = {
        method: 'POST',
        body: JSON.stringify(
            {
                client: { id: 1},
                ...Object.fromEntries(formData)
            }
        ),
        headers: {
            "Content-Type": "application/json",
     //       "Authorization": `Bearer ${token.value}`
        }
    }

    const resp = await fetch(url, options)
    if(resp.status !==201){
        return {message: `Erro ao cadastrar workspace.`}
    }

    revalidatePath("/workspaces")
    return {success: "ok"}
}


export async function getWorkspaces(){
   // const token = cookies().get() //token
    const options = {
        headers:{
     //       "Authorization": `Barer ${token.value}`
        }
    }

    const resp = await fetch(url, options)

    if(resp.status !=200) {
        console.log(resp.json())
    }
        
    const data = await resp.json()  

    revalidatePath("/workspaces")
    return data
    
}

export async function destroy(id){
    const urlDelete = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(urlDelete, options)

    if(resp.status !== 204)
        return {error: "Erro ao apagar workspace. " + resp.status}
    revalidatePath('/workspaces')
}

export async function getWorkspaceById(id){
    const getUrl = url + "/" + id

    const resp = await fetch(getUrl)

    if(resp.status !==200)
        return {error: "Erro ao buscar dados da workspace"}
    return await resp.json()
}

export async function updateWorkspace(workspace){

    const updateUrl = url + "/" + workspace.id
    const payload = {
        name: workspace.name,
        workspaceImage: workspace.workspaceImage,
        description: workspace.description
    }
    const options = {
        method: "PUT",
        body: JSON.stringify(payload),
        headers : {"Content-Type":"application/json"},
    }
    console.log(workspace)
    const resp = await fetch(updateUrl, options)

    if(resp.status !== 200)
        return {error: "erro ao atualizar workspace"}

    revalidatePath('/workspaces')
    return null;
}