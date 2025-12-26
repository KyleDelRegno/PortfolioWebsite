import Image from "next/image";
import tailwindcss from "@tailwindcss/postcss";

export default function Home() {
  return (
    <div>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,900;1,900&display=swap" rel="stylesheet"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head>
    <section className="h-400 bg-[url(/images/Wallpaper3.PNG)] sm:bg-[url(/images/Wallpaper2.PNG)] bg-no-repeat bg-local saturate-80 
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
    <section className="h-100 bg-amber-50">
    </section>
    </div>
  );
}
