import DemoNavBar from "@/components/DemoNavBar";
import Hero from "@/components/Hero";
import Lights from "@/components/Lights";
import MainNavBar from "@/components/MainNavBar";
import PowerRadar from "@/components/PowerRadar"
import PowerUsage from "@/components/PowerUsage";
import Thermostat from "@/components/Thermostat";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Lights/>
      <div className="flex">

        <PowerUsage/>
        <PowerRadar/>

      </div>
      <Thermostat/>
    </div>
  );
}
