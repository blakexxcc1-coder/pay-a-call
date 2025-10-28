import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 animate-glow">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium">The missing web paywall standard</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="gradient-text">HTTP 402</span>
            <br />
            <span className="text-foreground">Payment Required</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The internet's first native pay-per-API gateway. Add micropayments to any endpoint with a single line of
            code. Every 402 is a new business model.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" asChild className="group">
              <a href="https://dashboard.x402.dev" target="_blank" rel="noopener noreferrer">
                Start Building
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/docs">
                Read Documentation
              </Link>
            </Button>
          </div>

          {/* Code Example */}
          <div className="max-w-2xl mx-auto mt-16 animate-float">
            <div className="gradient-border p-1 rounded-lg">
              <div className="bg-card rounded-lg p-6 text-left">
                <pre className="text-sm md:text-base overflow-x-auto">
                  <code className="text-foreground">
                    <span className="text-accent">import</span> <span className="text-primary">x402</span>{" "}
                    <span className="text-accent">from</span> <span className="text-secondary">'@x402/middleware'</span>
                    ;{"\n\n"}
                    <span className="text-muted-foreground">// Add paywall to any route</span>
                    {"\n"}
                    app.<span className="text-primary">use</span>(
                    <span className="text-secondary">'/api/premium'</span>,{"\n"}
                    {"  "}
                    <span className="text-primary">x402</span>(&#123; <span className="text-accent">price</span>:{" "}
                    <span className="text-secondary">0.001</span> &#125;){"\n"}
                    );
                  </code>
                </pre>
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">
              ✨ That's it. Your API now charges per request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
