"use client"
import React from "react";
import { ProjectData } from "./GridDisplay";

type ItemDisplayData = {
    project: string,
    projectData: ProjectData,
    onClose: (id: string) => void
}

export default function DisplayItem({project, projectData, onClose} : ItemDisplayData){
    
    
    return(
        <div className="fixed no-doc-scroll z-100 inset-0 flex justify-center items-center
        transition-colors bg-black/90 backdrop-blur-xs">
            <button className="absolute top-0 right-0 p-10 text-3xl text-white cursor-pointer" onClick={() => onClose("")}>X</button>
            <div className="h-7/8 w-7/8 bg-white overflow-y-scroll">
                <div className="flex flex-row">
                    <div className="basis-2/3 p-10">
                        <img src={projectData.Images[0]}></img>
                    </div>
                    <div className="basis-1/3 p-10 justify-center">
                        <h1 className="text-black text-5xl text-center pr-10">{project}</h1>
                    </div>
                </div>
                <div className={"max-w-auto columns-2 md:columns-3 lg:columns-4 h-auto justify-center gap-2 m-3"} >
                    {projectData.Images.map((image) =>
                        <img src={image} key={image} className="object-cover mb-2"></img>
                    )}
                </div>
            </div>

        </div>
    )
    
}