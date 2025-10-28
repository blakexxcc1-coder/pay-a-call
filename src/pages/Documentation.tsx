import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code2, Rocket, Settings } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 space-y-4">
              <h1 className="text-5xl font-bold">
                <span className="gradient-text">Documentation</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to integrate x402 into your API
              </p>
            </div>

            <Tabs defaultValue="quickstart" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="quickstart">
                  <Rocket size={16} className="mr-2" />
                  Quick Start
                </TabsTrigger>
                <TabsTrigger value="integration">
                  <Code2 size={16} className="mr-2" />
                  Integration
                </TabsTrigger>
                <TabsTrigger value="api">
                  <BookOpen size={16} className="mr-2" />
                  API Reference
                </TabsTrigger>
                <TabsTrigger value="configuration">
                  <Settings size={16} className="mr-2" />
                  Configuration
                </TabsTrigger>
              </TabsList>

              <TabsContent value="quickstart" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4" id="quickstart">Get Started in 5 Minutes</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. Install the package</h3>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>npm install @x402/middleware</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Add to your Express app</h3>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code className="text-foreground">{`import express from 'express';
import x402 from '@x402/middleware';

const app = express();

// Protect your premium endpoint
app.use('/api/premium', x402({
  price: 0.001,              // Price in SOL
  walletAddress: 'your-wallet-address'
}));

app.get('/api/premium', (req, res) => {
  res.json({ data: 'Premium content!' });
});

app.listen(3000);`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Test it out</h3>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`curl http://localhost:3000/api/premium

# Response:
# HTTP/1.1 402 Payment Required
# X-Payment-Address: your-wallet-address
# X-Payment-Amount: 0.001`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="integration" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Framework Integration</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Express.js</h3>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`import x402 from '@x402/middleware';

app.use('/api/premium', x402({
  price: 0.001,
  network: 'mainnet-beta'
}));`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Fastify</h3>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`import x402Fastify from '@x402/fastify';

fastify.register(x402Fastify, {
  routes: ['/api/premium'],
  price: 0.001
});`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Next.js API Routes</h3>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`import { withX402 } from '@x402/next';

async function handler(req, res) {
  res.json({ data: 'Premium content' });
}

export default withX402(handler, {
  price: 0.001
});`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="api" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4" id="api">API Reference</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Configuration Options</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 pr-4">Option</th>
                              <th className="text-left py-2 pr-4">Type</th>
                              <th className="text-left py-2 pr-4">Default</th>
                              <th className="text-left py-2">Description</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-mono text-primary">price</td>
                              <td className="py-3 pr-4">number</td>
                              <td className="py-3 pr-4">required</td>
                              <td className="py-3">Price per request in SOL</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-mono text-primary">walletAddress</td>
                              <td className="py-3 pr-4">string</td>
                              <td className="py-3 pr-4">required</td>
                              <td className="py-3">Your Solana wallet address</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-mono text-primary">network</td>
                              <td className="py-3 pr-4">string</td>
                              <td className="py-3 pr-4">'mainnet-beta'</td>
                              <td className="py-3">Solana network to use</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-mono text-primary">timeout</td>
                              <td className="py-3 pr-4">number</td>
                              <td className="py-3 pr-4">30000</td>
                              <td className="py-3">Payment timeout in milliseconds</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Response Headers</h3>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`HTTP/1.1 402 Payment Required
X-Payment-Address: <wallet-address>
X-Payment-Amount: <amount-in-sol>
X-Payment-Network: mainnet-beta
X-Payment-Reference: <unique-ref>`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="configuration" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Advanced Configuration</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Custom Payment Rails</h3>
                      <p className="text-muted-foreground mb-3">
                        You can integrate your own payment provider:
                      </p>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`import x402 from '@x402/middleware';

app.use('/api/premium', x402({
  provider: 'stripe',
  price: 100, // cents
  stripeKey: process.env.STRIPE_SECRET
}));`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Rate Limiting</h3>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`app.use('/api/premium', x402({
  price: 0.001,
  rateLimit: {
    window: '1h',
    max: 100
  }
}));`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Analytics Integration</h3>
                      <div className="gradient-border p-1 rounded-lg">
                        <div className="bg-card rounded-lg p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`app.use('/api/premium', x402({
  price: 0.001,
  analytics: {
    enabled: true,
    apiKey: process.env.X402_API_KEY
  }
}));`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="p-6 mt-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to help you get started. Reach out on GitHub or join our Discord community.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/x402/paywall/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub Discussions →
                </a>
                <a
                  href="https://discord.gg/x402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Discord Community →
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
