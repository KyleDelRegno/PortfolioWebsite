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

let itemsN = projectJson;
let populated = false;


//window.location.href = ('@/Explore/Party/' + encodeURIComponent(option.id))}

export default function GridComponent({ onSelect }: GridDisplayData) {
    
    if(!populated){
        console.log(itemsN);
    }

    return (
        // <section>
        //     <h2 className="text-6xl">{title}</h2>
        //     <div className="flex flex-nowrap overflow-visible bg-gray-100 rounded-xl">
        //         {options.map((option) => ( //loops through each option given
        //             <div key={option.id} className="min-w-70 m-0.5 
        //             transition duration-300 ease-in-out hover:scale-120 hover:z-60">
        //                 <img src={option.imageUrl} alt="*Image*" className="cursor-pointer w-70 h-87.5 origin-center 
        //                 "
        //                 onClick={() => onSelect(option.id)}></img>
        //             </div>
        //         ))}
        //     </div>
        // </section>
        <div onClick={() => onSelect("buns")}></div>
    );
}
