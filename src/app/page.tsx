import { ThemeToggle } from "@/components/ThemeToggle.component";
import Image from "next/image";
import { Provider } from "./Providers/Provider";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <ThemeToggle />
      <h1>welcome</h1>
    </div>
  );
}
