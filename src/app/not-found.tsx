import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Page404() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 px-4">
      <div className="space-y-3 text-center">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          404
        </code>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Page not found
        </h1>
        <p className="text-base text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Go back home
        </Link>
      </div>
    </main>
  );
}
