
import ButtonMain from "@/components/button";
import NavBar from "@/components/navbar";
import TextInput from "@/components/textinput";
import Link from 'next/link';

export default function CreateProjects(){
    return(
        <>
            <NavBar active={projects}/>

            <main>
                <Link href={"/projects"}>Voltar</Link>
                <h2>Registro de Projetos</h2>
                <form>
                    <div>
                        <div>
                            <p>Project Name</p>
                            <TextInput/>
                        </div>

                        <div>
                            <p>DeadLine</p>
                            <TextInput/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Description (Optional)</p>
                            <textarea></textarea>
                        </div>
                        <ButtonMain title={"Criar Projeto"} type={"submit"}/>
                    </div>
                </form>
            </main>
        </>
    )
}