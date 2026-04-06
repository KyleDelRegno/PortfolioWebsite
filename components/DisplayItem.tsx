"use client"
import React from "react";
import Image from "next/image";
import { ProjectData } from "./GridDisplay";

type ItemDisplayData = {
    project: string,
    projectData: ProjectData,
    onClose: (id: string) => void,
    onEnlarge: (id: string) => void,
    enlargeData: string;
}

export default function DisplayItem({project, projectData, onClose, onEnlarge, enlargeData} : ItemDisplayData){

    return(
        <div className="fixed no-doc-scroll z-100 inset-0 flex justify-center items-center
        transition-colors bg-black/90 backdrop-blur-xs">
            <button className="absolute top-0 right-0 p-1 text-xl lg:p-10 lg:text-3xl text-white hover:cursor-pointer hover:scale-110" onClick={() => onClose("")}>X</button>


            <div className="h-7/8 w-7/8 bg-white overflow-y-scroll">
                {projectData.type === "Video" ?
                <section className="flex flex-col xl:flex-row p-4 mt-4">
                    
                    <div className="w-full xl:w-3/4 overflow-hidden">
                        <Image src={projectData.cover} alt="" width={1000} height={1000} />
                    </div>
                    
                    <div className="flex flex-col w-full pl-4  pr-4 basis-1/2 justify-between">
                        <div className="mt-4">
                            <h1 className=" text-black text-5xl lg:text-6xl xl:text-8xl text-right font-bogle font-medium">{project}</h1>
                            <h1 className=" text-gray-700 text-lg xl:text-xl text-right font-manrope">{projectData.date}</h1>
                            <p className=" text-gray-700 text-md xl:text-lg text-right mt-2 font-manrope">{projectData.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-end sm:justify-between mt-2">
                            {projectData.link!=="none" ? <div className="flex w-fit justify-end m-1 sm:m-0"><a href={projectData.link} target="_blank" className="text-center cursor-pointer rounded-4xl p-1.5 px-4 border-white text-white bg-blue-500 hover:bg-blue-300 ">View Project Here</a></div> : <div></div>}
                            <div>
                                <div className="flex flex-wrap justify-end items-center">
                                    <h1 className="text-black">Role:</h1>
                                    {projectData.role.map((role) =>
                                        <div key={role} className="p-0.5 pl-2 pr-2 m-1 bg-gray-200 rounded-xl text-black">{role}</div>
                                    )}
                                </div>
                                    
                                <div className="flex flex-wrap justify-end items-center h-fit">
                                    <h1 className="text-black">Skills:</h1>
                                    {projectData.skills.map((skills) =>
                                        <div key={skills} className="p-0.5 pl-2 pr-2 m-1 bg-gray-200 rounded-xl text-black">{skills}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
                :
                <section className="flex flex-col md:flex-row justify-between p-4 mt-4">
                    
                    <div className="flex flex-row w-full md:w-1/2  lg:w-2/3 overflow-hidden gap-2">
                        <img src={projectData.cover} className="object-cover sm:w-1/2 w-full"></img>
                        <img src={projectData.Images[0]} className="object-cover w-1/2 invisible sm:visible"></img>
                    </div>
                    
                    <div className="flex flex-col w-full p1-4 pr-4 basis-1/3  justify-between">
                        <div className="mt-4">
                            <h1 className=" text-black text-5xl lg:text-6xl xl:text-8xl text-right font-bogle font-medium">{project}</h1>
                            <h1 className=" text-gray-700 text-lg lg:text-xl text-right font-manrope">{projectData.date}</h1>
                            <p className=" text-gray-700 text-md lg:text-lg text-right mt-2 font-manrope">{projectData.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between mt-2">
                            {projectData.link!=="none" ? <div className="sm:text-left justify-items-end place-content-end m-1 mb-2 mt-2 sm:mb-0 sm:mt-0"><a href={projectData.link} target="_blank" className="flex flex-nowrap text-center w-fit cursor-pointer rounded-4xl border-2 p-1 px-4 border-white text-white bg-blue-500 hover:bg-blue-300 ">View Project Here</a></div> : <div></div>}
                            <div>
                                <div className="flex flex-wrap justify-end items-center">
                                    <h1 className="text-black">Role:</h1>
                                    {projectData.role.map((role) =>
                                        <div key={role} className="p-0.5 pl-2 pr-2 m-1 bg-gray-200 rounded-xl text-black">{role}</div>
                                    )}
                                </div>
                                    
                                <div className="flex flex-wrap justify-end items-center h-fit">
                                    <h1 className="text-black">Skills:</h1>
                                    {projectData.skills.map((skills) =>
                                        <div key={skills} className="p-0.5 pl-2 pr-2 m-1 bg-gray-200 rounded-xl text-black">{skills}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }
                <section className="flex flex-col md:flex-row justify-start lg:justify-end pr-4 pl-4">
                    
                    
                </section>

                <section className={"max-w-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-auto justify-center gap-2 m-2"} >
                    {projectData.Images.map((image) =>
                        <div key={image} className="">
                            <Image src={image} alt="loading..." className="object-cover hover:cursor-pointer hover:scale-101" width={500} height={500} sizes="(max-width: 320px) 30vw, 20vw" quality={40} loading="lazy" decoding="async" onClick={() => onEnlarge(image)}/>
                        </div>

                    )}
                </section>
                { enlargeData && <section className="fixed no-doc-scroll z-100 inset-0 flex justify-center items-center
        transition-colors bg-black/90 backdrop-blur-xs p-10" onClick={() => onEnlarge("")}>
                    <div key="enlarged" className="relative w-full h-full max-w-[95vw] max-h-[95vh] ">
                        <Image src={enlargeData || ""} alt={"Enlarged Photo"} fill quality={100} className="object-contain" priority unoptimized={true}/>
                    </div>
                </section>}
            </div>
        </div>
    )
}