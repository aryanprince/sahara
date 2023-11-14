import MainNav from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-background text-foreground">
      <header>
        <MainNav />
      </header>
      <h1 className="text-6xl font-bold tracking-tight">Welcome to Sahara</h1>
      <footer className="mb-2 flex justify-center">
        <ThemeToggle />
      </footer>
    </main>
  );
}
