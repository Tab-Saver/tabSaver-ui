import { Globe, ArrowRight, Brain, FileText } from "lucide-react";

export function AIAnimation() {
  return (
    <div className="w-full min-h-[240px] flex items-center justify-center rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 via-chart-1/10 to-chart-2/10 p-10">
      <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full">
        {/* Website/User */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm border border-primary/20">
            <Globe className="w-10 h-10 text-primary" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-base text-foreground">Website Content</p>
            <p className="text-sm text-muted-foreground">User's saved pages</p>
          </div>
        </div>

        {/* Arrow 1 */}
        <ArrowRight className="w-8 h-8 text-primary/60 flex-shrink-0" />

        {/* Gemini 2.5 Flash */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-chart-1/30 to-chart-2/20 flex items-center justify-center shadow-sm border border-chart-1/30">
            <Brain className="w-10 h-10 text-primary" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-base text-foreground">Gemini 2.5 Flash</p>
            <p className="text-sm text-muted-foreground">AI Processing</p>
          </div>
        </div>

        {/* Arrow 2 */}
        <ArrowRight className="w-8 h-8 text-primary/60 flex-shrink-0" />

        {/* Summary to User */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm border border-primary/20">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-base text-foreground">AI Summary</p>
            <p className="text-sm text-muted-foreground">Back to user</p>
          </div>
        </div>
      </div>
    </div>
  );
}

