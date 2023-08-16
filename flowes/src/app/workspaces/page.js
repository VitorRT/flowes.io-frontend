'use client'

import React, { useState } from 'react';
import ButtonMain from "@/components/button";
import Card from "@/components/card";
import NavBar from "@/components/navbar";
import ListViewWorkspaces from '@/components/ListViewWorkspaces';

export default function Workspaces() {
    const [workspaces, setWorkspaces] = useState([
        {
            title: "Programação",
            lastProject: {
                title: "Java Pac Man",
                tasks: {
                    qtdTasksCompleted: 5,
                    totlaTasks: 10
                },
                deadline: "01/01/2022",
                createdAt: "20/02/2022"
            },
            image: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            createdAt: "20/02/2022"
        },
        {
            title: "Digital Art",
            lastProject: {
                title: "Comission Março",
                tasks: {
                    qtdTasksCompleted: 5,
                    totlaTasks: 10
                },
                deadline: "02/205/2023",
                createdAt: "14/03/2022"
            },
            image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            createdAt: "12/01/2022"
        },
        {
            title: "New Tale",
            lastProject: {
                title: "Mytale Project",
                tasks: {
                    qtdTasksCompleted: 5,
                    totlaTasks: 10
                },
                deadline: "10/05/2025",
                createdAt: "10/05/2024"
            },
            image: "https://images.pexels.com/photos/6807304/pexels-photo-6807304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            createdAt: "10/05/2024"
        },
    ]);
    return (
        <>
            <NavBar active={"workspaces"} />

            <main className="bg-neutral-50 p-11 mx-24 my-12 rounded-lg shadow-md max-[670px]:mx-0">
                <div className="flex max-[670px]:block justify-between items-center mb-12">
                    <p className="text-xl font-normal max-[670px]:text-center max-[670px]:mb-5">Suas Workspaces</p>
                    <ButtonMain className={"bg-orange-400 py-4 px-6 rounded-lg text-white hover:bg-orange-300 active:bg-orange-500"} title={"Criar Workspace"} type="button" />
                </div>

                <ListViewWorkspaces workspaces={workspaces}/>
            </main>
        </>
    )
}