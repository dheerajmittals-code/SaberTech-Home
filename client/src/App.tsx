import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

import Services from "@/pages/services";
import CustomerSupportCX from "@/pages/services/customer-support-cx";
import RevenueInsideSales from "@/pages/services/revenue-inside-sales";
import BackOfficeOperations from "@/pages/services/back-office-operations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/customer-support-cx" component={CustomerSupportCX} />
      <Route path="/services/revenue-inside-sales" component={RevenueInsideSales} />
      <Route path="/services/back-office-operations" component={BackOfficeOperations} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
