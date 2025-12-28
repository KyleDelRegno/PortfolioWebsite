'use client'
import Image from "next/image";
import tailwindcss from "@tailwindcss/postcss";
import GridComponent, {ProjectData} from "@/components/GridDisplay";
import DisplayItem from "@/components/DisplayItem";
import { useState } from "react";
import projectJson from "@/public/Data/projects.json" with {type: "json"};
import FeaturedItemDisplay from "@/components/FeaturedItem";

let good = ""
let items = projectJson


const HomePage : React.FC = () => {
  //Used To refresh the page when called
  const [, setVersion] = useState(0); 
  const refreshPage = () => { setVersion(v => v + 1) };
  //Used To set the selected option Data
  const [selected_data, setSelected] = useState<ProjectData | undefined>();
  const [selected_id, setID] = useState("");
  function triggerSelected(id: string){
    if(selected_data && selected_id){
      setSelected(undefined);
      setID("");
      refreshPage();
    }
    else{
      setID(id);
      for(const i in items){
        if(id==items[i].project){
            let jsonData=items[i]
            setSelected(new ProjectData(items[i].project, items[i].role, items[i].description, items[i].images));
        }
      refreshPage();
    };
    }
  }


  return (

    <main>
      <section className="h-400 bg-[url(/Images/Wallpaper3.png)] sm:bg-[url(/Images/Wallpaper2.png)] bg-no-repeat bg-local saturate-120
      bg-right bg-cover
      ">
        <div className="mx-auto flex items-center justify-center p-10 pt-5">
          <div className="@LOGO">
            <img src="logo.png" className="w-15"></img>
          </div>
          <div className="@Space grow"></div>
          <div className="@Menu flex items-center justify-end">
            <div className="ml-5 text-sm md:ml-10 md:text-xl"><a className="cursor-pointer ">Featured</a></div>
            <div className="ml-5 text-sm md:ml-10 md:text-xl"><a className="cursor-pointer ">Projects</a></div>
            <div className="ml-5 text-sm md:ml-10 md:text-xl"><a className="cursor-pointer">Projects</a></div>
            <div className="ml-5 text-sm md:ml-10 md:text-xl"><button className="cursor-pointer rounded-4xl border-2 border-white p-2 px-4 hover:bg-white hover:text-gray-800">Connect</button></div>
          </div>
        </div>
        <div className="flex justify-center p-5">
          <div>
            <h1 className="font-roboto font-black text-6xl sm:text-9xl pt-65">Kyle DelRegno</h1>
            <h2 className="font-roboto font-bold text-gray-300 text-xl pt-8">Videographer | Photographer | Creative Producer</h2>
          </div>
          <div className="@Space grow max-w-200"></div>
        </div>
      </section>
      <section className="h-fit bg-amber-50 pt-3">
        <FeaturedItemDisplay id="1" side="left"></FeaturedItemDisplay>
        <FeaturedItemDisplay id="2" side="right"></FeaturedItemDisplay>
      </section>
      <section className="h-fit bg-amber-50 pt-10">
        <GridComponent onSelect={triggerSelected}></GridComponent>
        {selected_id && selected_data && (<DisplayItem project={selected_id} projectData={selected_data} onClose={triggerSelected}></DisplayItem>)}
      </section>
    </main>
  );
}
export default HomePage;