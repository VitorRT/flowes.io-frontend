import ButtonMain from "./button";
import Card from "./card";
import DropMenu from "./dropmenu";

export default function CardWorkspace({workspace}) {
    return (
        <>
            <Card className="flex gap-10 max-[1025px]:block max-[1025px]:relative mb-4 justify-between">
                    <div className="flex gap-8">
                        <img
                            src={workspace.workspaceImage.trim()}
                            className="w-24 h-24 rounded-full max-[1025px]:w-full max-[1025px]:h-[50%] object-cover max-[1025px]:rounded-none max-[1025px]:absolute max-[1025px]:inset-0 max-[1025px]:z-0 max-[1025px]:brightness-50"
                        />
                        <div className="max-[1025px]:z-40 max-[1025px]:relative">
                            <p className="font-bold max-[1025px]:text-white">{workspace.name}</p>
                            <span className="text-amber-500">Criado em <span className="text-gray-400"> - {workspace.createdAt}</span></span>
                            <div className="mt-3">
                                <ButtonMain className={"border border-orange-400 py-2 px-6 rounded-lg text-orange-500 hover:bg-orange-400 hover:text-white active:bg-orange-500"} title={"Acessar"} type="button" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <DropMenu workspaceId={workspace.id}/>
                    </div>
                </Card>

        </>
    )
}