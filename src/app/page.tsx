import Carousel from "@/components/home/Carousel";
import JoinZoo from "@/components/home/JoinZoo";
import SearchComponent from "@/components/home/SearchComponent";
import { redirect } from "next/navigation";
import PreviewZoo from "../components/home/PreviewZoo";

export default function Home() {
  // redirect('/auth')

  return(
  <div className="flex flex-col gap-6">
    <SearchComponent />
    <Carousel />
    <JoinZoo />
    <PreviewZoo />
  </div>
   );
}
