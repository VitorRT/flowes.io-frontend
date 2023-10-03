import CardProject from "./cardProject";

export default function ListViewProjects({projects}){
    return(
        <>
        <>
            {/** ** Correção ** - Comentário: Esse componente espera receber uma lista como props e não esta preparado para lidar com a situação de não ter uma resposta. Então eu programei e preparei esse componente para lidar com essa situação. */}
            {projects && projects.map((w, i) => {
                return (
                    <CardWorkspace project={w} key={i}/>
                )
            })}
        </>
        </>
    )
}