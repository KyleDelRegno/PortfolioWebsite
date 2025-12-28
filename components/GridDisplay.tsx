"use client"

import { useRouter } from "next/router"
import projectJson from "@/public/Data/projects.json" with {type: "json"};

//defines the row component which works as group of options
class GridItemData {
    project: string;
    role: string;
    description: string;
    Images: string[];

    constructor(project: string, role: string, description: string, Images: string[]){
        this.project = project;
        this.role = role;
        this.description = description;
        this.Images = Images;
    }
}

type GridDisplayData = {
    onSelect: (id: string) => void
}

let items = projectJson;


//window.location.href = ('@/Explore/Party/' + encodeURIComponent(option.id))}

export default function GridComponent({ onSelect }: GridDisplayData) {

    return (
        <div className="h-full flex flex-wrap">
            {items.map((project) =>( //loops through all the projects
                <div key={project.project} className="relative flex group w-100 h-fit m-10 
                transition duration-300 ease-in-out hover:scale-120 hover:z-60">
                    <div className="invisible absolute inset-0 bg-gray-600/60 size-full group-hover:visible">
                        <div className="flex h-full w-full justify-center items-center">
                            <h1 className="text-3xl m-10 text-center text-wrap font-black">{project.project}</h1>
                        </div>
                    </div>
                    <img src={project.Images[0]} className="object-contain"></img>
                </div>
            ))}
        </div>
    );
}
