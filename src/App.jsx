
import Random from "./components/Random";
import Tag from "./components/Tag";



export default function App() {
 



  return (
    <div className="w-full min-h-screen flex flex-col background  items-center relative ">
      <h1  className="  bg-white rounded-md w-11/12 mt-[40px] px-10 py-2 text-3xl font-bold text-center">Random GIFS</h1>
      <div className=" flex flex-col w-full items-center">
        <Random />
        <Tag />
      </div>

    </div>
  );
}
