"user server"


import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"


const url = process.env.NEXT_PUBLIC_BASE_URL + "/workspaces"

export async function create(formData){
    const token = cookies().get('') //token

    const options = {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.value}`
        }
    }

    const resp = await fetch(url, options)
    if(resp.status !==201){
        const json = await resp.json()
        const erros = json.reduce((str, error)=> str += error.message + ". ", "")
        return {message: `Erro ao cadastrar workspace. ${erros}`}
    }

    revalidatePath("/workspaces")
    return {success: "ok"}
}


export async function getProjetos(){
    const token = cookies().get() //token
    const options = {
        headers:{
            "Authorization": `Barer ${token.value}`
        }
    }

    const resp = await fetch(url, options)

    if(resp.status !=200)
        console.log(resp)

    return resp.json()
    
}

export async function destroy(){
    const urlDelete = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(urlDelete, options)

    if(resp.status !== 204)
        return {error: "Erro ao apagar workspace. " + resp.status}
    revalidatePath('/workspaces')
}

export async function getProjeto(id){
    const getUrl = url + "/" + id

    const resp = await fetch(getUrl)

    if(resp.status !==200)
        return {error: "Erro ao buscar dados da workspace"}
    return await resp.json()
}

export async function update(projeto){

    const updateUrl = url + "/" + projeto.id

    const options = {
        method: "PUT",
        body: JSON.stringify(projeto),
        headers : {"Content-Type":"application/json"},
    }

    const resp = await fetch(updateUrl, options)

    if(resp.status !== 200)
        return {error: "erro ao atualizar workspace"}
    revalidatePath('/workspaces')
}