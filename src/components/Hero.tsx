import { Button } from "./ui/button";
import { Download, Github, HelpCircle } from "lucide-react";
import { Logo } from "./Logo";
import { HowToUseDialog } from "./HowToUseDialog";
import { useState } from "react";

export function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <p className="text-primary">Browser Extension</p>
                </div>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-foreground hover:bg-primary/5 hover:border-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-md group"
                >
                  <HelpCircle className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium">How to Use</span>
                </button>
              </div>
            <h1 className="text-5xl md:text-6xl">
              Save Your Tabs.<br />
              <span className="text-primary">Save Your Time.</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tab Saver is the ultimate browser extension that helps you organize, save, and restore your tabs with ease. Never lose your research, work, or browsing sessions again.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp?utm_source=item-share-cb" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download Extension
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://github.com/omarayman23/tabSaver-ui" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
            </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-chart-1/20 to-chart-2/20 blur-3xl rounded-full"></div>
            <Logo className="relative w-72 h-72" />
          </div>
        </div>
      </div>
      </section>
      <HowToUseDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
