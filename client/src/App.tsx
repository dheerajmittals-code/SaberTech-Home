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
import GigWorkforce from "@/pages/services/gig-workforce";
import QACompliance from "@/pages/services/qa-compliance";
import AIAutomation from "@/pages/services/ai-automation";
import Contact from "@/pages/contact";
import Industries from "@/pages/industries";
import SaasTechnology from "@/pages/industries/saas-technology";
import EcommerceD2C from "@/pages/industries/ecommerce-d2c";
import TravelHospitality from "@/pages/industries/travel-hospitality";
import EdtechExams from "@/pages/industries/edtech-exams";
import FintechInsurance from "@/pages/industries/fintech-insurance";
import HealthcareDiagnostics from "@/pages/industries/healthcare-diagnostics";
import LogisticsDelivery from "@/pages/industries/logistics-delivery";
import RealEstate from "@/pages/industries/real-estate";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/customer-support-cx" component={CustomerSupportCX} />
      <Route path="/services/revenue-inside-sales" component={RevenueInsideSales} />
      <Route path="/services/back-office-operations" component={BackOfficeOperations} />
      <Route path="/services/qa-compliance" component={QACompliance} />
      <Route path="/services/ai-automation" component={AIAutomation} />
      <Route path="/services/gig-workforce" component={GigWorkforce} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/saas-technology" component={SaasTechnology} />
      <Route path="/industries/ecommerce-d2c" component={EcommerceD2C} />
      <Route path="/industries/travel-hospitality" component={TravelHospitality} />
      <Route path="/industries/edtech-exams" component={EdtechExams} />
      <Route path="/industries/fintech-insurance" component={FintechInsurance} />
      <Route path="/industries/healthcare-diagnostics" component={HealthcareDiagnostics} />
      <Route path="/industries/logistics-delivery" component={LogisticsDelivery} />
      <Route path="/industries/real-estate" component={RealEstate} />
      <Route path="/contact" component={Contact} />
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
