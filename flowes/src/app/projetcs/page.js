import ButtonMain from "@/components/button";
import NavBar from "@/components/navbar";
import Link from "next/link"

async function GetProjects(){
    const url = "localhost:8080/api/v1/workspace"
    const resp = await fetch(url, {next: {revalidate: 0}})
    return resp.json;
}


export default async function Projects(){
    //const projetos = await GetProjects()

    return(
        <>
            <NavBar active={"projects"}/>

            <main>
                <div className="flex max-[670px]:block justify-between items-center mb-12">
                    <p className="text-xl font-normal max-[670px]:text-center max-[670px]:mb-5 ">Seus Projetos</p>
                        <Link href={"/projects/create"}>
                            <ButtonMain className={"bg-orange-400 py-4 px-6 rounded-lg text-white hover:bg-orange-300 active:bg-orange-500 max-[670px]:bg-neutral-50 max-[670px]:text-orange-600 hover:"} title={"Criar Workspace"} type="button" />
                        </Link>
               
                </div>
            </main>
        </>
    )
}