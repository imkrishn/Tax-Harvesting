import Disclaimer from "@/components/Disclaimer";
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
      </div>
    </main>
  );
}
