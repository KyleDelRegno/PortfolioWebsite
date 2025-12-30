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
                {projectData.type === "Video" ?
                <section className="flex flex-col xl:flex-row p-4 mt-6">
                    
                    <div className="w-full xl:w-3/4 overflow-hidden">
                        <img src={projectData.cover} className="object-contain"></img>
                    </div>
                    
                    <div className="p-4 basis-1/2 justify-end">
                        <h1 className=" text-black text-5xl lg:text-6xl xl:text-8xl text-right font-bogle font-medium">{project}</h1>
                        <h1 className=" text-gray-700 text-lg xl:text-xl text-right font-manrope">{projectData.date}</h1>
                        <p className="pt-4 text-gray-500 text-lg text-left font-manrope indent-8">{projectData.description}</p>
                    </div>
                </section>
                :
                <section className="flex flex-col md:flex-row p-4 mt-6">
                    
                    <div className="w-full md:w-1/2  lg:w-1/3 overflow-hidden">
                        <img src={projectData.cover} className="object-contain"></img>
                    </div>
                    
                    <div className="p-4 basis-2/3  justify-end">
                        <h1 className="pr-10 text-black text-3xl lg:text-6xl xl:text-8xl text-right font-bogle font-medium">{project}</h1>
                        <h1 className="pr-10 text-gray-700 text-lg xl:text-xl text-right font-manrope">{projectData.date}</h1>
                        <p className="pt-4 text-gray-500 font-manrope indent-8">{projectData.description}</p>
                    </div>
                </section>
                }
                <section className="flex flex-col md:flex-row justify-start lg:justify-end pr-4 pl-4">
                    
                    <div className="flex flex-row flex-wrap items-center">
                    <h1 className="text-black">Role:</h1>
                    {projectData.role.map((role) =>
                        <div key={role} className="p-0.5 pl-2 pr-2 m-1 bg-gray-200 rounded-xl text-black">{role}</div>
                    )}
                    </div>
                    
                    <div className="flex flex-row flex-wrap items-center">
                    <h1 className="text-black">Skills:</h1>
                    {projectData.skills.map((skills) =>
                        <div key={skills} className="p-0.5 pl-2 pr-2 m-1 bg-gray-200 rounded-xl text-black">{skills}</div>
                    )}
                    </div>
                </section>

                <section className={"max-w-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-auto justify-center gap-2 m-3"} >
                    {projectData.Images.map((image) =>
                        <img src={image} key={image} className="object-fit mb-2"></img>
                    )}
                </section>
            </div>

        </div>
    )
    
}