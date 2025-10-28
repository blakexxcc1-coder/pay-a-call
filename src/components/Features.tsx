import { Zap, Shield, BarChart3, Code2, Wallet, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-millisecond payment verification. No blockchain delays, pure HTTP performance.",
  },
  {
    icon: Code2,
    title: "Simple Integration",
    description: "One line of middleware. Works with Express, Fastify, or any Node.js framework.",
  },
  {
    icon: Wallet,
    title: "Flexible Payments",
    description: "Solana Pay, custom wallets, or traditional payment rails. Your choice.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, DDoS protection, and fraud detection built-in.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Beautiful dashboard tracking calls, revenue, and user behavior in real-time.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Edge-deployed worldwide. Serve millions of requests with zero infrastructure.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="gradient-text">x402</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for developers who want to monetize APIs without the complexity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 group cursor-pointer border-border"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
