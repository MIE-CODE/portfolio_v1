import { ThemeToggle } from "@/components/ThemeToggle.component";
import classNames from "classnames";

export default function Home() {
  return (
    <div
      className={classNames(
        "font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 transition-colors duration-200 ease-in-out"
      )}
    >
      <ThemeToggle />
      <h1>welcodlkuiyfjcme</h1>
    </div>
  );
}
