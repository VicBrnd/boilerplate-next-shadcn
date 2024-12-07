import { Toolbar } from "@/components/delete-this/toolbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

interface ProvidersProps {
  children: React.ReactNode;
  enableAnalytics?: boolean;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <TooltipProvider>
        {children}
        <Toolbar />
        <Toaster position="top-right" />
      </TooltipProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
