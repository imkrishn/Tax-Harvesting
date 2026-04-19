import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen p-4 lg:px-44">
      <div className="flex items-center justify-between">
        <Logo />
        <ThemeSwitcher />
      </div>
    </main>
  );
}
