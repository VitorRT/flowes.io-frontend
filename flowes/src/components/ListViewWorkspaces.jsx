
import CardWorkspace from './cardworkspace';

export default function ListViewWorkspaces({workspaces}) {
    return (
        <>
            {/** ** Correção ** - Comentário: Esse componente espera receber uma lista como props e não esta preparado para lidar com a situação de não ter uma resposta. Então eu programei e preparei esse componente para lidar com essa situação. */}
            {workspaces && workspaces.map((w, i) => {
                return (
                    <CardWorkspace workspace={w} key={i}/>
                )
            })}
        </>
    )
}