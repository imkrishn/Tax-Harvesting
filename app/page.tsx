import Disclaimer from "@/components/Disclaimer";
import Harvesting from "@/components/Harvesting";
import Heading from "@/components/Heading";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="w-screen ">
      <div className="flex items-center w-screen justify-between p-3 border-b border-border lg:px-32 bg-secondary-background">
        <Logo />
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col  gap-3 lg:px-32 p-3 ">
        <Heading />
        <Disclaimer />
        <div className="max-w-sm flex lg:flex-col flex-row gap-3">
          <Harvesting
            type="pre"
            className="bg-secondary-background text-muted-foreground"
          />
          <Harvesting type="after" className="bg-[#fc2482e7] text-white" />
        </div>
      </div>
    </main>
  );
}
