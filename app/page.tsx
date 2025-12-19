import Image from "next/image";
import tailwindcss from "@tailwindcss/postcss";

export default function Home() {
  return (
    <div className="h-full w-full">
      <header className="p-5">
        <nav className="mx-auto flex items-center justify-between">
          <div className="flex">

          </div>
          <div className="flex">
            <div className="">
              <a>
                Film
              </a>
            </div>
            <div className="">
              <a>
                Photography
              </a>
            </div>
          </div>
          <div className="flex">


          </div>

        </nav>
      </header>
    </div>
  );
}
