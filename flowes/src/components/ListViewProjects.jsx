import CardProject from "./cardProject";

export default function ListViewProjects({projects}){
    return(
        <>
        <>
            {projects.map((w, i) => {
                return (
                    <CardWorkspace project={w} key={i}/>
                )
            })}
        </>
        </>
    )
}