import Image from "next/image";
import ViewGPT from "./components/viewGpt";
import { CarouselDemo } from "./components/carousel";

export default function Home() {
  return (
    <main className="p-6 ">
      
      <div className="w-full text-center py-4">
        <h1 className="text-[28px] ">Asking about nutrients in the food.</h1>
        <CarouselDemo />
      </div>
      <ViewGPT />

      
      <div className="grid md:flex-row sm:flex-col md:grid-cols-3 gap-4 m-4 mt-6">
        <Image src="/images/image15.jpg" width={375} height={375} alt="image" className="rounded-md border-gray border-2 hover:scale-75"/>
        <Image src="/images/image16.jpg" width={375} height={375} alt="image" className="rounded-md border-gray border-2 hover:scale-75"/>
        <Image src="/images/image12.jpg" width={375} height={375} alt="image" className="rounded-md border-gray border-2 hover:scale-75"/>
        <Image src="/images/image11.jpg" width={375} height={375} alt="image" className="rounded-md border-gray border-2 hover:scale-75"/>
        <Image src="/images/image13.jpg" width={375} height={375} alt="image" className="rounded-md border-gray border-2 hover:scale-75"/>
        <Image src="/images/image14.jpg" width={375} height={375} alt="image" className="rounded-md border-gray border-2 hover:scale-75"/> 
      
      </div>
    </main>
    
  );
}
