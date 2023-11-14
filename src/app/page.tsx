import MainNav from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-background text-foreground">
      <header className="flex items-center justify-between px-4 py-2">
        <h1 className="font-semibold tracking-tight">Sahara</h1>
        <MainNav />
        <div className="flex gap-2">
          <Button variant={"ghost"}>Login</Button>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6">
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
        </div>
      </div>
      <footer className="flex items-center justify-center gap-4 border-t border-muted py-3">
        <p>Built by Aryan</p>
        <ThemeToggle />
      </footer>
    </main>
  );
}
