"use server"

import { cookies } from "next/headers"

export async function apiLogin(credenciais){

    const url = process.env.NEXT_PUBLIC_BASE_URL + '/login'

    const options = {
        method: 'POST',
        body: JSON.stringify(credenciais),
        header: {
            "Content-Type": "application/json"
        }
    }
    
    const resp = await fetch(url, options)


    if(resp.status !=200) return {error:"credenciais invalidas"}
    const json = await resp.json()

    //requisicao para api
    //pegar jwt
    cookies().set('flowes_token', json.token, {
        maxAge: 60 * 60 * 24 * 7 //7 dias
    })
}

export async function apiLogout(){
    cookies().delete('flowes_token')
}