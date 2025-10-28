import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Database, Image, MessageSquare, Music, Video } from "lucide-react";

const useCases = [
  {
    icon: Brain,
    title: "AI Model APIs",
    description: "Charge per inference for GPT, Stable Diffusion, or custom models",
    example: "$0.001 per request",
    color: "text-purple-400",
  },
  {
    icon: Database,
    title: "Data Access",
    description: "Monetize premium datasets, analytics, or real-time market data",
    example: "$0.01 per query",
    color: "text-cyan-400",
  },
  {
    icon: Image,
    title: "Image Processing",
    description: "Pay-per-use image optimization, resizing, or generation",
    example: "$0.005 per image",
    color: "text-pink-400",
  },
  {
    icon: MessageSquare,
    title: "Messaging APIs",
    description: "SMS, email, or push notification services with per-message billing",
    example: "$0.0001 per message",
    color: "text-green-400",
  },
  {
    icon: Music,
    title: "Content Streaming",
    description: "Audio transcoding, streaming, or music recommendation APIs",
    example: "$0.002 per minute",
    color: "text-orange-400",
  },
  {
    icon: Video,
    title: "Video APIs",
    description: "Transcoding, thumbnail generation, or live streaming services",
    example: "$0.01 per video",
    color: "text-blue-400",
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Endless <span className="gradient-text">Possibilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Any API can become a revenue stream with x402
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 group cursor-pointer border-border"
            >
              <div className={`mb-4 ${useCase.color} text-4xl`}>
                <useCase.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground mb-4">{useCase.description}</p>
              <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {useCase.example}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to turn your API into a business?
          </p>
          <Button variant="gradient" size="lg" asChild>
            <a href="https://dashboard.x402.dev" target="_blank" rel="noopener noreferrer">
              Start Building Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
