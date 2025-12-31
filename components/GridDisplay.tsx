"use client"

import { useRouter } from "next/router"
import projectJson from "@/public/Data/projects.json" with {type: "json"};

//defines the row component which works as group of options
export class ProjectData {
    project: string;
    type: string;
    role: string[];
    skills: string[];
    date: string;
    description: string;
    link:string;
    cover: string;
    Images: string[];

    constructor(project: string, type: string, role: string[], skills: string[], date: string, description: string, link: string, cover: string, Images: string[]){
        this.project = project;
        this.type = type;
        this.role = role;
        this.skills = skills;
        this.date = date;
        this.description = description;
        this.link = link;
        this.cover = cover;
        this.Images = Images;
    }
}

type GridDisplayData = {
    onSelect: (id: string) => void
}

let items = projectJson;


// xl:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] 
//         lg:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]
//         grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]

//window.location.href = ('@/Explore/Party/' + encodeURIComponent(option.id))}

export default function GridComponent({ onSelect }: GridDisplayData) {

    return (
        <div className="p-3 h-full grid gap-2
        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4">
            {items.map((project) =>( //loops through all the projects
                <div key={project.project} className={project.type === 'Video' ? 'row-span-1' : 'row-span-2'}>
                    <div className="relative flex group h-fit 
                    transition duration-300 ease-in-out hover:scale-120 hover:z-60" onClick={() => onSelect(project.project)}>
                        <div className="invisible absolute inset-0 bg-gray-600/60 size-full group-hover:visible">
                            <div className="flex h-full w-full justify-center items-center">
                                <h1 className="text-3xl m-10 text-center text-wrap text-white font-black">{project.project}</h1>
                            </div>
                        </div>
                        <img src={project.cover} className={project.type === 'Video' ? "object-cover aspect-16/9" : "object-cover aspect-32/37"}></img>
                    </div>
                </div>
            ))}
        </div>
    );
}
