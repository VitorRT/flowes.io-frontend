import ButtonMain from "@/components/button";
import Card from "@/components/card";
import NavBar from "@/components/navbar";

export default function Workspaces() {
    return (
        <>
            <NavBar active={"workspaces"}/>

            <main className="bg-neutral-50 p-11 mx-24 my-12 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-12">
                    <p className="text-xl font-normal">Suas Workspaces</p>    
                    <ButtonMain className={"bg-red-500 py-5 px-6 rounded-lg text-white hover:bg-red-400 active:bg-red-600"} title={"Criar Workspace"} type="button"/>
                </div>

                <Card className="lg:flex lg:justify-between sm:block">
                    <div className="lg:flex gap-8 sm:block">
                        <img 
                        src="https://play-lh.googleusercontent.com/S70rI7VrwLic7_p-ax7iAOOopQhcPCzmqyLe5RLJmApTpkgTRaCwWsTNN1Uv1t_t3Pp5"
                        className="lg:w-20 lg:h-20 lg:rounded-full sm:w-full sm:h-40 sm:mb-6 sm:rounded-none sm:object-cover"
                        />
                        <div>
                            <p>FIAP Workspace</p>
                            <span className="text-amber-500">Criado em <span className="text-black"> - 20/02/2022</span></span>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4 flex justify-between">
                            <p className="text-sm">Ultimo projeto atualizado:</p>
                            {/** Colocar icon de configuração */}
                        </div>
                        <p className="text-xl">Nubeck Project</p>
                        <p className="text-sm mb-2" >25/02/2022 {"<"}------{">"} 01/01/2023 </p>
                        <p className="text-sm">50% ------ 5/10 tasks</p>
                    </div>
                </Card>
            </main>        
        </>
    )
}