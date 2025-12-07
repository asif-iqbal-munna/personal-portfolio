import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "We're working on something amazing. Stay tuned!",
}: ComingSoonProps) {
  return (
    <Card className="glass p-12 text-center hover:border-primary/50 transition-smooth">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <Clock
            className="text-primary animate-pulse"
            size={64}
          />
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-muted-foreground max-w-md">{description}</p>
      </div>
    </Card>
  );
}

