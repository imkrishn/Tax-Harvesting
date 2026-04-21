import Disclaimer from "@/components/Disclaimer";
import Harvesting from "@/components/Harvesting";
import Heading from "@/components/Heading";
import Holdings from "@/components/Holdings";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="w-screen ">
      <div className="flex items-center w-screen justify-between p-3 border-b border-border lg:px-10 bg-secondary-background">
        <Logo />
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col  gap-3 lg:px-10 p-3 ">
        <Heading />
        <Disclaimer />
        <div className="flex flex-col lg:flex-row gap-3 lg:h-[78vh]">
          <div className="lg:min-w-88 flex flex-col justify-between gap-3">
            <Harvesting
              type="after"
              className="bg-linear-to-br from-[#fc2482e7] to-[#8b7cf6] text-white"
            />
            <Harvesting
              type="before"
              className="bg-secondary-background/50 text-muted-foreground"
            />
          </div>
          <Holdings />
        </div>
      </div>
    </main>
  );
}
