import { LinkPreview } from "@/components/delete-this/link-preview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-5 text-center">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Shadcn Boilerplate
        </h1>
        <h2
          className="
            scroll-m-20 text-xl font-semibold tracking-tight
            sm:text-2xl md:text-3xl first:mt-0
            flex flex-col items-center justify-center gap-2
            sm:flex-row
        "
        >
          <LinkPreview
            url="https://nextjs.org/"
            className="font-bold text-gray-600 hover:text-gray-700 transition-colors bg-gray-600/10 px-1 py-[0.2rem] rounded"
          >
            NextJs
          </LinkPreview>
          <span className="text-gray-700 hidden sm:inline">+</span>
          <LinkPreview
            url="https://tailwindcss.com/"
            className="font-bold text-sky-600 hover:text-sky-700 transition-colors bg-sky-600/10 px-1 py-[0.2rem] rounded"
          >
            TailwindCss
          </LinkPreview>
          <span className="text-gray-700 hidden sm:inline">+</span>
          <LinkPreview
            url="https://ui.shadcn.com/"
            className="font-bold text-rose-600 hover:text-rose-700 transition-colors bg-rose-600/10 px-1 py-[0.2rem] rounded"
          >
            Shadcn/ui
          </LinkPreview>
        </h2>
      </div>
      <div className="flex flex-col space-y-2 items-center justify-center">
        <LinkPreview
          url="https://github.com/VicBrnd/boilerplate-next-shadcn"
          className="relative rounded text-emerald-600 hover:green-emerald-700 bg-emerald-600/5 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        >
          github/boilerplate-next-shadcn
        </LinkPreview>
        <LinkPreview
          url="https://github.com/VicBrnd/boilerplate-next-shadcn"
          className="relative rounded text-yellow-600 hover:green-yellow-700 bg-yellow-600/5 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        >
          gitclone
        </LinkPreview>
        <LinkPreview
          url="/not-found"
          className="relative rounded text-red-600 hover:green-red-700 bg-red-600/5 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        >
          not-found/page.tsx
        </LinkPreview>
      </div>
    </main>
  );
}
