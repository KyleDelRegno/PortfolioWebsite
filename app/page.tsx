'use client'
import Image from "next/image";
import tailwindcss from "@tailwindcss/postcss";
import GridComponent from "@/components/GridDisplay";

let good = ""

const HomePage : React.FC = () => {

  function temp(id: string){}
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
            <div className="ml-5 text-sm md:ml-10 md:text-xl"><a className="cursor-pointer ">Film</a></div>
            <div className="ml-5 text-sm md:ml-10 md:text-xl"><a className="cursor-pointer ">Photography</a></div>
            <div className="ml-5 text-sm md:ml-10 md:text-xl"><a className="cursor-pointer">Projects</a></div>
            <div className="ml-5 text-sm md:ml-10 md:text-xl"><button className="cursor-pointer rounded-4xl border-2 border-white p-2 px-4 hover:bg-white hover:text-gray-800">Contact Me</button></div>
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
      <section className="h-200 bg-amber-50 pt-10">
        <GridComponent onSelect={temp}></GridComponent>
      </section>
    </main>
  );
}
export default HomePage;