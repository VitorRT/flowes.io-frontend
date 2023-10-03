"use server"

import { getWorkspaceById } from "@/actions/workspaces";
import NavBar from "@/components/navbar";
import FormEdit from "./FormEdit";

export default async function EditWorkspacePage({params}) {
    const workspace = await getWorkspaceById(params.id);

    return(
        <>
            <NavBar active={"workspaces"} />
            <FormEdit workspace={workspace}/>
        </>
    )
}