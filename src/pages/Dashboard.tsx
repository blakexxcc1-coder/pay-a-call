import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  DollarSign, 
  TrendingUp, 
  Key, 
  Copy, 
  Eye, 
  EyeOff,
  RefreshCw,
  Code,
  BarChart3,
  Clock
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [showKey, setShowKey] = useState(false);
  const apiKey = "x402_sk_1a2b3c4d5e6f7g8h9i0j";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "API key copied to clipboard",
    });
  };

  const stats = [
    {
      title: "Total Requests",
      value: "12,453",
      change: "+23%",
      trend: "up",
      icon: Activity,
      color: "text-cyan-400",
    },
    {
      title: "Revenue",
      value: "$432.18",
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      color: "text-purple-400",
    },
    {
      title: "Success Rate",
      value: "99.2%",
      change: "+0.3%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-400",
    },
    {
      title: "Avg Response",
      value: "124ms",
      change: "-8%",
      trend: "down",
      icon: Clock,
      color: "text-orange-400",
    },
  ];

  const recentActivity = [
    { endpoint: "/api/ai/generate", amount: "$0.005", time: "2 minutes ago", status: "success" },
    { endpoint: "/api/data/query", amount: "$0.01", time: "5 minutes ago", status: "success" },
    { endpoint: "/api/image/process", amount: "$0.003", time: "12 minutes ago", status: "success" },
    { endpoint: "/api/ai/generate", amount: "$0.005", time: "18 minutes ago", status: "success" },
    { endpoint: "/api/data/export", amount: "$0.02", time: "25 minutes ago", status: "failed" },
  ];

  const weeklyData = [
    { day: "Mon", requests: 1823, revenue: 54.12 },
    { day: "Tue", requests: 2104, revenue: 68.34 },
    { day: "Wed", requests: 1956, revenue: 61.89 },
    { day: "Thu", requests: 2387, revenue: 78.45 },
    { day: "Fri", requests: 2241, revenue: 72.98 },
    { day: "Sat", requests: 1542, revenue: 48.21 },
    { day: "Sun", requests: 1400, revenue: 45.19 },
  ];

  const maxRequests = Math.max(...weeklyData.map(d => d.requests));

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, <span className="gradient-text">Developer</span>
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your API today
              </p>
            </div>
            <Button variant="outline" size="sm">
              <RefreshCw size={16} className="mr-2" />
              Refresh
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-muted group-hover:bg-primary/20 transition-colors ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <span className={`text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Weekly Chart */}
            <Card className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Weekly Overview</h2>
                <BarChart3 size={24} className="text-primary" />
              </div>
              
              <div className="space-y-4">
                {weeklyData.map((day, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{day.day}</span>
                      <div className="flex gap-4">
                        <span>{day.requests.toLocaleString()} requests</span>
                        <span className="text-primary font-semibold">${day.revenue.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                        style={{ width: `${(day.requests / maxRequests) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* API Key Section */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Key size={20} className="text-primary" />
                <h2 className="text-xl font-bold">API Key</h2>
              </div>
              
              <div className="space-y-4">
                <div className="gradient-border p-1 rounded-lg">
                  <div className="bg-card rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Production Key</span>
                      <button 
                        onClick={() => setShowKey(!showKey)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    <code className="text-sm font-mono">
                      {showKey ? apiKey : "x402_sk_••••••••••••••••"}
                    </code>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => copyToClipboard(apiKey)}
                >
                  <Copy size={16} className="mr-2" />
                  Copy Key
                </Button>

                <Button variant="hero" className="w-full">
                  <Key size={16} className="mr-2" />
                  Generate New Key
                </Button>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-sm font-semibold mb-3">Quick Start</h3>
                  <div className="gradient-border p-1 rounded-lg">
                    <div className="bg-card rounded-lg p-3">
                      <pre className="text-xs overflow-x-auto">
                        <code>{`npm install @x402/middleware

import x402 from '@x402/middleware';

app.use('/api', x402({
  apiKey: '${showKey ? apiKey : 'your-api-key'}'
}));`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="activity" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="docs">Docs</TabsTrigger>
            </TabsList>

            <TabsContent value="activity">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-green-400' : 'bg-red-400'
                        }`} />
                        <div>
                          <code className="text-sm font-mono">{activity.endpoint}</code>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-primary">{activity.amount}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="endpoints">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Protected Endpoints</h2>
                <div className="space-y-3">
                  {[
                    { path: "/api/ai/generate", requests: 4532, price: "$0.005" },
                    { path: "/api/data/query", requests: 3421, price: "$0.01" },
                    { path: "/api/image/process", requests: 2156, price: "$0.003" },
                    { path: "/api/video/transcode", requests: 876, price: "$0.02" },
                  ].map((endpoint, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Code size={20} className="text-primary" />
                        <div>
                          <code className="text-sm font-mono">{endpoint.path}</code>
                          <p className="text-xs text-muted-foreground mt-1">
                            {endpoint.requests.toLocaleString()} requests
                          </p>
                        </div>
                      </div>
                      <span className="text-primary font-semibold">{endpoint.price}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  Add New Endpoint
                </Button>
              </Card>
            </TabsContent>

            <TabsContent value="docs">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Documentation</h2>
                <div className="space-y-4">
                  <a 
                    href="/docs#quickstart"
                    className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-all group"
                  >
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      Quick Start Guide
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get started with x402 in under 5 minutes
                    </p>
                  </a>
                  <a 
                    href="/docs#api"
                    className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-all group"
                  >
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      API Reference
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Complete API documentation and configuration options
                    </p>
                  </a>
                  <a 
                    href="https://github.com/x402/paywall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-all group"
                  >
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      GitHub Repository
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      View source code, examples, and contribute
                    </p>
                  </a>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
