import { CopyButton } from "@/components/copy-button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-5 text-center">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          boilerplate-next-shadcn
        </h1>
        <h2 className="flex scroll-m-20 flex-col items-center justify-center gap-2 text-xl font-semibold tracking-tight first:mt-0 sm:flex-row sm:text-2xl md:text-3xl">
          <Link
            href="https://github.com/VicBrnd/boilerplate-next-shadcn"
            className="rounded bg-gray-600/10 px-1 py-[0.2rem] font-bold text-gray-600 transition-colors hover:text-gray-700"
          >
            boilerplate
          </Link>
          <span className="hidden text-gray-700 sm:inline">+</span>
          <Link
            href="https://nextjs.org/"
            className="rounded bg-amber-600/10 px-1 py-[0.2rem] font-bold text-amber-600 transition-colors hover:text-amber-700"
          >
            NextJs
          </Link>
          <span className="hidden text-gray-700 sm:inline">+</span>
          <Link
            href="https://tailwindcss.com/"
            className="rounded bg-sky-600/10 px-1 py-[0.2rem] font-bold text-sky-600 transition-colors hover:text-sky-700"
          >
            TailwindCss
          </Link>
          <span className="hidden text-gray-700 sm:inline">+</span>
          <Link
            href="https://ui.shadcn.com/"
            className="rounded bg-rose-600/10 px-1 py-[0.2rem] font-bold text-rose-600 transition-colors hover:text-rose-700"
          >
            Shadcn/ui
          </Link>
        </h2>
        <CopyButton
          text="git clone https://github.com/VicBrnd/boilerplate-next-shadcn.git"
          textCopied="git clone https://github.com/VicBrnd/boilerplate-next-shadcn.git"
          timeCopied={1200}
          animation="easeInOutBack"
        />
      </div>
    </main>
  );
}
