import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for testing and small projects",
    features: [
      "Up to 10,000 requests/month",
      "Basic analytics dashboard",
      "Community support",
      "Testnet access",
      "Standard security",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For serious developers and growing businesses",
    features: [
      "Up to 1M requests/month",
      "Advanced analytics & insights",
      "Priority support",
      "Mainnet access",
      "Custom payment rails",
      "White-label options",
      "99.9% uptime SLA",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-volume applications",
    features: [
      "Unlimited requests",
      "Dedicated infrastructure",
      "24/7 phone support",
      "Custom integrations",
      "Advanced security features",
      "SLA guarantees",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pay only for what you use. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.highlighted
                  ? "border-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)] scale-105"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <a
                  href={plan.name === "Enterprise" ? "mailto:sales@x402.dev" : "https://dashboard.x402.dev"}
                  target={plan.name === "Enterprise" ? undefined : "_blank"}
                  rel={plan.name === "Enterprise" ? undefined : "noopener noreferrer"}
                >
                  {plan.cta}
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include: SSL encryption • DDoS protection • Automatic scaling • 99.9% uptime
          </p>
        </div>
      </div>
    </section>
  );
};
