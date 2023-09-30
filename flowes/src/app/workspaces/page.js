"use server"

import ButtonMain from "@/components/button";
import NavBar from "@/components/navbar";
import ListViewWorkspaces from '@/components/ListViewWorkspaces';
import Link from 'next/link';
import { getWorkspaces } from "@/actions/workspaces";


export default async function Workspaces() {
const response = await getWorkspaces();
const workspaces = response["_embedded"]["listingDataWorkspaceList"] 
    return (
        <>
            <NavBar active={"workspaces"} />

            <main className="bg-neutral-50 p-11 mx-24 my-12 rounded-lg shadow-md max-[670px]:mx-0">
                <div className="flex max-[670px]:block justify-between items-center mb-12">
                    <p className="text-xl font-normal max-[670px]:text-center max-[670px]:mb-5">Suas Workspaces</p>
                    <Link href={"/workspaces/create"}>
                        <ButtonMain className={"bg-orange-400 py-4 px-6 rounded-lg text-white hover:bg-orange-300 active:bg-orange-500 max-[670px]:bg-neutral-50 max-[670px]:text-orange-600 hover:"} title={"Criar Workspace"} type="button" />
                    </Link>
                </div>

                <ListViewWorkspaces workspaces={workspaces}/>
            </main>
        </>
    )
}