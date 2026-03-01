'use client'
import Image from "next/image";
import tailwindcss from "@tailwindcss/postcss";
import GridComponent, {ProjectData} from "@/components/GridDisplay";
import DisplayItem from "@/components/DisplayItem";
import { useState } from "react";
import projectJson from "@/public/Data/projects.json" with {type: "json"};
import featureJson from "@/public/Data/featured.json" with {type: "json"};
import FeaturedItemDisplay from "@/components/FeaturedItem";

let good = ""
let items = projectJson
let featuredItems = featureJson
let purposeID = false;


const HomePage : React.FC = () => {
  //Used To refresh the page when called
  const [, setVersion] = useState(0); 
  const refreshPage = () => { setVersion(v => v + 1) };
  //Determines bio
  let Bio = ""
  for(const i in featuredItems){
    if("bio"==featuredItems[i].id){
      Bio = featuredItems[i].comment
    }
  }
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
            setSelected(new ProjectData(items[i].project, items[i].type, items[i].purpose, items[i].role, items[i].skills, items[i].date, items[i].description, items[i].link, items[i].cover, items[i].images));
        }
      refreshPage();
    };
    }
  }
  function PurposeSwitch(){
    purposeID=!purposeID;
    refreshPage();
  }

  return (

    <main>
      <section className="min-h-svh bg-[url(/Images/Wallpaper3.png)] sm:bg-[url(/Images/Wallpaper2.png)] bg-no-repeat bg-local saturate-120
      bg-top-right bg-cover
      ">
        <div className="mx-auto flex items-center justify-center p-4 sm:p-10 pt-5">
          <div className="@LOGO">
            <img src="logo.svg" className="w-20"></img>
          </div>
          <div className="@Space grow"></div>
          <div className="@Menu flex items-center justify-end">
            <div className="ml-5 text-sm text-gray-200 md:ml-10 md:text-xl    hover:text-white hover:scale-105"><a className="cursor-pointer " href="#featured">Featured</a></div>
            <div className="ml-5 text-sm text-gray-200 md:ml-10 md:text-xl    hover:text-white hover:scale-105"><a className="cursor-pointer " href="#projects">Projects</a></div>
            <div className="ml-5 text-sm text-gray-200 md:ml-10 md:text-xl    hover:text-white hover:scale-105"><a className="cursor-pointer " href="#projects">Freelance</a></div>
            <div className="ml-5 text-sm text-gray-200 md:ml-10 md:text-xl"><a className="cursor-pointer rounded-4xl border-2 border-gray-200 p-2 px-4 hover:border-white hover:bg-white hover:text-gray-800" href="#contact">Connect</a></div>
          </div>
        </div>
        <div className="flex justify-center p-10">
          <div>
            <h1 className="font-roboto font-black text-6xl text-white sm:text-9xl pt-35 sm:pt-65">Kyle DelRegno</h1>
            <h2 className="font-roboto font-bold text-gray-300 text-xl pt-8">Cinematographer | Creative Producer | Photographer</h2>
            <h3 className="font-manrope text-gray-300 text-xl pt-8  w-full lg:w-1/2">{Bio}</h3>
          </div>
          <div className="@Space grow max-w-200"></div>
        </div>
      </section>
      <section className=" h-fit bg-amber-50 pt-3 gap-1 pb-20" id="featured">
        <h1 className="flex justify-center text-4xl sm:text-6xl text-black font-roboto font-bold mt-5 p-3 ">Featured Projects</h1>
        <div className="flex justify-center">
          <div className="w-60 sm:w-100 h-1 bg-black mb-10"></div>
        </div>
        
        <FeaturedItemDisplay id="1" side="left"></FeaturedItemDisplay>
        <FeaturedItemDisplay id="3" side="right"></FeaturedItemDisplay>
      </section>
      <section className="h-fit bg-amber-50 pt-5 pb-30" id="projects">

        {!purposeID && <div className="flex justify-center bg-amber-70 w-full gap-5 rounded-2xl h-20 pl-5 pr-5">
          <div className="flex justify-center items-center w-1/2 bg-amber-950/20 rounded-xl">
            <h1 className="text-2xl sm:text-4xl text-black font-roboto font-bold text-nowrap">Creative Projects</h1>
          </div>
          <div className="flex justify-center items-center w-1/2 bg-amber-950/10 bg-blend-darken rounded-xl text-black/50
          hover:scale-105 hover:text-black cursor-pointer" onClick={PurposeSwitch}>
            <h1 className="text-2xl sm:text-4xl font-roboto font-bold text-nowrap">Freelance</h1>
          </div>
        </div> }
        {purposeID && <div className="flex justify-center bg-amber-70 w-full gap-5 rounded-2xl h-20 pl-5 pr-5">
          <div className="flex justify-center items-center w-1/2 bg-amber-950/10 bg-blend-darken rounded-xl text-black/50
          hover:scale-105 hover:text-black cursor-pointer" onClick={PurposeSwitch}>
            <h1 className="text-2xl sm:text-4xl font-roboto font-bold text-nowrap">Creative Projects</h1>
          </div>
          <div className="flex justify-center items-center w-1/2 bg-amber-950/20 rounded-xl">
            <h1 className="text-2xl sm:text-4xl text-black font-roboto font-bold text-nowrap">Freelance</h1>
          </div>
          
        </div> }




        <div className="mt-5"></div>
        {!purposeID && <GridComponent onSelect={triggerSelected} purpose="Creative"></GridComponent> }
        {purposeID && <GridComponent onSelect={triggerSelected} purpose="Freelance"></GridComponent> }
        {selected_id && selected_data && (<DisplayItem project={selected_id} projectData={selected_data} onClose={triggerSelected}></DisplayItem>)}
      </section>
      <section className="h-fit bg-amber-50 pb-7 pt-7 border-t-4 border-black" id="contact">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <h1 className="text-5xl text-black pb-1 font-manrope font-bold inline sm:hidden lg:inline">Connect</h1>
            <div className="bg-black h-15 w-1 hidden lg:inline"></div>
            <h1 className="text-black text-3xl ">443-547-7253</h1>
            <h1 className="text-black text-3xl ">kyledelregno@gmail.com</h1>
            <div className="flex flex-row justify-center items-center gap-10">
            <a href="https://www.linkedin.com/in/kyle-delregno/" target="blank" className="w-9"><img src="linked.svg" alt="Linked In  "></img></a>
            <a href="https://www.instagram.com/kyledelregnoportfolio/" target="blank" className="w-10"><img src="insta.svg" alt="Instagram  " className="text-black"></img></a>
            <a href="https://www.youtube.com/@kyledelregno" target="blank" className="w-12"><img src="tube.svg" alt="Youtube"></img></a>
            </div>
        </div>
      </section>
    </main>
  );
}
export default HomePage;