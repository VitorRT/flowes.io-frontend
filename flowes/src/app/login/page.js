"use client"
import ButtonMain from "@/components/button";
import TextInput from "@/components/textinput";
import Image from "next/image";
import LoginImage from '@/images/image-login.jpg'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

export default function LoginPage(){
    const {register, handleSubmit} = useForm()

    const {login} = useContext(AuthContext)

    async function onSubmit(data){
       const resp = await login(data)

       if(resp?.error) {
            toast.error(resp.error)
            
        }
    }



    return(
        <div className="flex h-screen">
            <aside className="hidden lg:flex">
                <Image src={LoginImage} className="h-full w-full object-cover"/>
            </aside>
            <maim className="flex flex-col items-center justify-center gap-10 w-screen">
                <h1 className="text-5xl font-bold">Flowes</h1>
                <form className="flex flex-col gap-4 items-start" onSubmit={handleSubmit(onSubmit)}>
                    <TextInput register={register} name={"email"} label="email"/>
                    <TextInput register={register} name={"senha"} label="senha" type={"password"}/>
                    <ButtonMain className={"bg-orange-400 py-2 px-6 rounded-lg text-white hover:bg-orange-300 active:bg-orange-500"} title={"Entrar"} type={"submit"}/>
                </form>
            </maim>
        </div>
    )
}

// 
//<button className={"bg-orange-400 py-2 px-6 rounded-lg text-white hover:bg-orange-300 active:bg-orange-500"} type="button">Entrar</button>