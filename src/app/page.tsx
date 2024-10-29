import Carousel from "@/components/home/Carousel";
import JoinZoo from "@/components/home/JoinZoo";
import SearchComponent from "@/components/home/SearchComponent";
import PreviewZoo from "../components/home/PreviewZoo";

export default function Home() {

  return(
  <div className="flex flex-col gap-6 bg-green-50 ">
    <SearchComponent />
    <Carousel />
    <JoinZoo />
    <PreviewZoo />
  </div>
   );
}
