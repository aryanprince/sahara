import CategoryCards from "@/components/category-cards";
import MainNav from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";

import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();

  return (
    <main className="flex min-h-screen flex-col justify-between bg-background text-foreground">
      <header className="flex items-center justify-between px-4 py-2">
        <h1 className="font-semibold tracking-tight">Sahara</h1>
        <MainNav />
        <div className="flex gap-2">
          {userId && <UserButton afterSignOutUrl="/" />}
          {!userId && (
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href="/signin"
            >
              Sign In
            </Link>
          )}
        </div>
      </header>
      <div className="flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="my-40 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-7xl font-bold tracking-tight">
              Welcome to Sahara
            </h1>
            <p className="text-lg text-muted-foreground">
              Your one stop to find the best deals on all platforms
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant={"outline"}>Login</Button>
            <Button variant={"default"}>Sign Up</Button>
          </div>
        </section>

        {/* Section - Categories */}
        <section className="flex h-96 w-full flex-col items-center gap-8 bg-muted/20 pt-8">
          <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
          <div>
            <CategoryCards />
          </div>
        </section>

        {/* Section - Featured Games */}
        <section className="flex h-96 w-full flex-col items-center gap-8 pt-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Games</h2>
          <div className="">
            <CategoryCards />
          </div>
        </section>
      </div>
      <footer className="flex items-center justify-between gap-4 border-t border-muted p-3">
        <p>Built by Aryan</p>
        <div>
          <ThemeToggle />
        </div>
      </footer>
    </main>
  );
}
