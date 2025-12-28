"use client"
import React from "react";
import { ProjectData } from "./GridDisplay";

type ItemDisplayData = {
    project: string,
    projectData: ProjectData,
    onClose: (id: string) => void
}
let jsonData

export default function DisplayItem({project, projectData, onClose} : ItemDisplayData){
    
    
    return(
        <div className="fixed no-doc-scroll z-100 inset-0 flex justify-center items-center
        transition-colors bg-black/20 backdrop-blur-xs">
            <button className="absolute top-0 right-0 p-10 text-3xl text-white cursor-pointer" onClick={() => onClose("")}>X</button>
            <div className="h-3/4 w-3/4 bg-white overflow-y-scroll">
                <div className="flex flex-row">
                    <div className="basis-2/3 p-10">
                        <img src={projectData.Images[0]}></img>
                    </div>
                    <div className="basis-1/3 p-10 justify-center">
                        <h1 className="text-black text-5xl text-center pr-10">{project}</h1>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mb-10">
                    {projectData.Images.map((image) =>
                        <img src={image} className="object-cover m-2 max-w-[400px]"></img>
                    )}
                </div>
            </div>

        </div>
    )
    
}