import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { Card } from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does billing work?",
    answer: "We charge based on the number of API requests processed through x402. You're only billed for successful payment verifications, not for 402 responses or failed payments.",
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges accordingly.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers for enterprise customers, and even Solana payments (of course!).",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! The Starter plan is completely free forever. Pro plan includes a 14-day free trial with full access to all features.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "We'll notify you when you reach 80% of your limit. You can upgrade anytime, or we'll temporarily throttle requests until the next billing cycle.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Absolutely! Enterprise plans include dedicated infrastructure, custom SLAs, white-label options, and priority support. Contact our sales team for details.",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <Pricing />

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Compare <span className="gradient-text">Plans</span>
            </h2>

            <Card className="overflow-hidden max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left py-4 px-6">Feature</th>
                      <th className="text-center py-4 px-6">Starter</th>
                      <th className="text-center py-4 px-6 bg-primary/10">Pro</th>
                      <th className="text-center py-4 px-6">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-4 px-6 font-medium">Monthly Requests</td>
                      <td className="text-center py-4 px-6">10,000</td>
                      <td className="text-center py-4 px-6 bg-primary/5">1,000,000</td>
                      <td className="text-center py-4 px-6">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium">Analytics Dashboard</td>
                      <td className="text-center py-4 px-6"><Check size={20} className="inline text-primary" /></td>
                      <td className="text-center py-4 px-6 bg-primary/5"><Check size={20} className="inline text-primary" /></td>
                      <td className="text-center py-4 px-6"><Check size={20} className="inline text-primary" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium">Custom Payment Rails</td>
                      <td className="text-center py-4 px-6 text-muted-foreground">-</td>
                      <td className="text-center py-4 px-6 bg-primary/5"><Check size={20} className="inline text-primary" /></td>
                      <td className="text-center py-4 px-6"><Check size={20} className="inline text-primary" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium">White-label</td>
                      <td className="text-center py-4 px-6 text-muted-foreground">-</td>
                      <td className="text-center py-4 px-6 bg-primary/5"><Check size={20} className="inline text-primary" /></td>
                      <td className="text-center py-4 px-6"><Check size={20} className="inline text-primary" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium">SLA</td>
                      <td className="text-center py-4 px-6 text-muted-foreground">-</td>
                      <td className="text-center py-4 px-6 bg-primary/5">99.9%</td>
                      <td className="text-center py-4 px-6">Custom</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium">Support</td>
                      <td className="text-center py-4 px-6">Community</td>
                      <td className="text-center py-4 px-6 bg-primary/5">Priority</td>
                      <td className="text-center py-4 px-6">24/7 Dedicated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-12 space-y-3">
              <HelpCircle size={40} className="inline-block text-primary mb-2" />
              <h2 className="text-3xl font-bold">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="mt-12 p-6 text-center bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                We're here to help. Reach out to our team anytime.
              </p>
              <a
                href="mailto:hello@x402.dev"
                className="text-primary hover:underline font-medium"
              >
                Contact Support →
              </a>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
