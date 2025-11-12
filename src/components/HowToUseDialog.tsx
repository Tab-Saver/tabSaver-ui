import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Download, Pin, Save, FolderOpen, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Install the Extension",
    description: "Download Tab Saver from the Chrome Web Store and add it to your browser.",
    color: "from-chart-1/20 to-chart-2/20",
  },
  {
    icon: Pin,
    title: "Pin the Extension",
    description: "Click the puzzle piece icon in your browser toolbar, then click the pin icon next to Tab Saver to keep it easily accessible.",
    highlight: true,
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Save,
    title: "Save Your Tabs",
    description: "Click the Tab Saver icon in your toolbar, then click 'Save Current Tabs' to save all open tabs to a collection.",
    color: "from-chart-1/20 to-chart-2/20",
  },
  {
    icon: FolderOpen,
    title: "Organize Collections",
    description: "Name your collections and organize them by project or topic. You can create multiple collections for different purposes.",
    color: "from-chart-1/20 to-chart-2/20",
  },
  {
    icon: RefreshCw,
    title: "Restore Anytime",
    description: "Click on any saved collection to restore all tabs instantly. Your browsing sessions are always just one click away.",
    color: "from-chart-1/20 to-chart-2/20",
  },
];

interface HowToUseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HowToUseDialog({ open, onOpenChange }: HowToUseDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">How to Use Tab Saver</DialogTitle>
          <DialogDescription className="text-base">
            Follow these simple steps to start saving and organizing your tabs like a pro.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
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
      </DialogContent>
    </Dialog>
  );
}

