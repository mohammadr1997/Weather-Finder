import Main from "./Components/Main";
import Image from "next/image";

export default function Home() {
  return (
 <main className="w-full h-[125vh] md:screen relative flex justify-center font-semibold" style={{fontFamily:'nunito'}}>
<Main/>
  <Image width={400} height={400} className="w-full h-full z-30 absolute top-0  " src="/images/background.jpg" alt="background-weather-finder" />
 </main>
  );
}
