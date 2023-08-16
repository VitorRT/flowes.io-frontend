
import CardWorkspace from './cardworkspace';

export default function ListViewWorkspaces({workspaces}) {
    return (
        <>
            {workspaces.map((w, i) => {
                return (
                    <CardWorkspace workspace={w} key={i}/>
                )
            })}
        </>
    )
}