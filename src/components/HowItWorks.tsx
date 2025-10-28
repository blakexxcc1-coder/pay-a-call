import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Request Made",
    description: "Client calls your protected API endpoint",
    code: "GET /api/premium HTTP/1.1",
  },
  {
    number: "02",
    title: "402 Response",
    description: "Server returns Payment Required with payment details",
    code: "HTTP/1.1 402 Payment Required\nX-Payment-Address: 0x...",
  },
  {
    number: "03",
    title: "Payment Sent",
    description: "Client automatically pays via wallet or payment provider",
    code: "POST /payment\n{ amount: 0.001, signature: ... }",
  },
  {
    number: "04",
    title: "Access Granted",
    description: "Payment verified, original request fulfilled with data",
    code: "HTTP/1.1 200 OK\n{ data: ... }",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The HTTP 402 flow explained in four simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="mb-4">
                  <span className="text-6xl font-bold gradient-text opacity-50 group-hover:opacity-100 transition-opacity">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>

                  {/* Code Preview */}
                  <div className="gradient-border p-1 rounded-md">
                    <div className="bg-card rounded-md p-3">
                      <pre className="text-xs overflow-x-auto">
                        <code className="text-muted-foreground">{step.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 -right-4 text-primary animate-pulse">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
