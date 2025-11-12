import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Download, Pin, Save, FolderOpen, RefreshCw, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

const steps = [
  {
    icon: Download,
    title: "Install the Extension",
    description: "Download Tab Saver from the Chrome Web Store and add it to your browser.",
  },
  {
    icon: Pin,
    title: "Pin the Extension",
    description: "Click the puzzle piece icon in your browser toolbar, then click the pin icon next to Tab Saver to keep it easily accessible.",
    highlight: true,
  },
  {
    icon: Save,
    title: "Save Your Tabs",
    description: "Click the Tab Saver icon in your toolbar, then click 'Save Current Tabs' to save all open tabs to a collection.",
  },
  {
    icon: FolderOpen,
    title: "Organize Collections",
    description: "Name your collections and organize them by project or topic. You can create multiple collections for different purposes.",
  },
  {
    icon: RefreshCw,
    title: "Restore Anytime",
    description: "Click on any saved collection to restore all tabs instantly. Your browsing sessions are always just one click away.",
  },
];

export function HowToUse() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with gradient background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-primary">Getting Started</p>
            </div>
            <h1 className="text-5xl md:text-6xl">
              How to Use<br />
              <span className="text-primary">Tab Saver</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow these simple steps to start saving and organizing your tabs like a pro.
            </p>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.title} 
                  className={`p-6 hover:shadow-lg transition-all duration-300 ${
                    step.highlight 
                      ? 'border-primary border-2 bg-gradient-to-br from-primary/5 to-background' 
                      : 'border'
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.highlight ? 'from-primary to-primary/80' : 'from-primary/10 to-primary/5'} flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110`}>
                      <Icon className={`w-8 h-8 ${step.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-2xl font-bold text-muted-foreground">0{index + 1}</span>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                        {step.highlight && (
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                            Important
                          </span>
                        )}
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Quick Tips Section */}
          <Card className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader>
              <CardTitle className="text-3xl">Quick Tips</CardTitle>
              <CardDescription className="text-base">
                Make the most out of Tab Saver with these helpful tips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Keyboard Shortcuts</h4>
                  <p className="text-muted-foreground text-sm">
                    Use keyboard shortcuts to quickly save and restore tabs without clicking through menus.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Auto-Save</h4>
                  <p className="text-muted-foreground text-sm">
                    Enable auto-save to automatically backup your tabs at regular intervals.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Collections</h4>
                  <p className="text-muted-foreground text-sm">
                    Create separate collections for work, research, and personal browsing to stay organized.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">AI Summaries</h4>
                  <p className="text-muted-foreground text-sm">
                    Opt-in to AI-powered summaries to quickly recall what each saved page contains.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Download Tab Saver now and start organizing your browsing sessions today.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp?utm_source=item-share-cb" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download Extension
              </a>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

