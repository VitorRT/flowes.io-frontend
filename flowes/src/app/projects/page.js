import ButtonMain from "@/components/button";
import NavBar from "@/components/navbar";
import Link from "next/link"
import { getProjetos } from "@/actions/projetos";
import ListViewProjects from "@/components/ListViewProjects";

export default async function Projects(){
    const response = await getProjetos();
    // ** correção ** - Comentário: Como o front-end precisa da api para pode listar as workspaces e não estava preparada para não lidar com essa situção, era previsível dar erro. Então eu programei e a preparei para lidar com essa situação.
    const projects = response["_embedded"] ? response["_embedded"]["ListingProjec"] : null;

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

                <ListViewProjects projects={projects}/>
            </main>
        </>
    )
}







