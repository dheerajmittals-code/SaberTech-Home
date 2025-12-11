import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-heading font-bold text-slate-900 mb-6">Our Services</h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl">
        This is the services overview page. In a real application, this would list all our capabilities in detail.
      </p>
      <Link href="/">
        <Button className="bg-primary text-white">
          Back to Home <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
}
