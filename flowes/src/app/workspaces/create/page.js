import ButtonMain from "@/components/button";
import NavBar from "@/components/navbar";
import TextInput from "@/components/textinput";
import Link from "next/link";

export default function CreateWorkspace() {
    return (
        <>
            <NavBar active={"workspaces"}/>  
            
            <main className="bg-neutral-50 p-11 mx-24 my-12 rounded-lg shadow-md max-[670px]:mx-0">
                <Link href={"/workspaces"}>Voltar</Link>
                <h2>Registro de workspace</h2>
                <form>
                    <div className="flex align-center justify-between">
                        <div>
                            <p className={"mt-4"}>Título da Workspace {"( * )"}</p>
                            <TextInput 
                                className={"mt-4"} 
                                type={"text"} 
                                placeholder={"Título..."}
                            />
                        </div>

                        
                        <div>
                            <p className={"mt-4"}>Imagem da Workspace</p>
                            <TextInput 
                                className={"mt-4"} 
                                type={"file"} 
                                placeholder={"Título..."}
                            />
                        </div>
                    </div>
                    <div >
                        <div>
                            <p>Descrição da Workspace</p>
                            <textarea className="p-2 border rounded-lg border-orange-400 ring-transparent"></textarea>
                        </div>

                        <ButtonMain className={""} title={"Criar"} type={"submit"}/>
                    </div>
                </form>
            </main>      
        </>
    )
}