import { Header } from "@/components/Header";
import { SaberBot } from "@/components/SaberBot";
import { 
  MessageSquare, 
  BadgeDollarSign, 
  Database, 
  ShieldCheck, 
  Bot, 
  Users, 
  Monitor, 
  ShoppingBag, 
  Plane, 
  GraduationCap, 
  ArrowRight, 
  Check, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  Truck,
  Building2,
  Stethoscope,
  Network,
  MapPin,
  Package,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/isometric_contact_center_illustration.png";

// Industry Page Template - can be reused with props, but for now copying to files for simplicity
export default function LogisticsDelivery() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    document.title = "Logistics & Delivery Support Services | SaberTechs";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Shipment tracking support, NDR management, delivery coordination, back office updates and gig workforce for logistics and last-mile delivery networks.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      {/* SECTION 1 - HERO */}
      <section className="relative bg-slate-50 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 z-0"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-10 md:px-10 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="w-full lg:basis-[50%] lg:w-[50%] text-center lg:text-left mt-8 lg:mt-0"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-4"
              variants={fadeIn}
            >
              Support & Ops for <span className="text-primary">Logistics & Delivery</span> Companies
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Shipment tracking support, NDR management, delivery coordination, back office updates and gig workforce for logistics and last-mile delivery networks.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  Get a Proposal
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:basis-[50%] lg:w-[50%] relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-100/50 border border-slate-100 bg-white">
              <img 
                src={heroImage} 
                alt="Logistics Technology" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - KEY CAPABILITIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Logistics Operations Capabilities</h2>
            <p className="text-lg text-slate-600">
              Speed and accuracy for your delivery network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Shipment Tracking Support", desc: "Helping customers track orders and resolving delivery delays.", icon: Truck },
               { title: "NDR Management", desc: "Coordinating with customers and riders to ensure successful delivery attempts.", icon: MapPin },
               { title: "Rider Support", desc: "Assisting delivery partners with app issues, routes and payouts.", icon: Users },
               { title: "Back Office Ops", desc: "Manifest updates, claims processing, and vendor reconciliation.", icon: Database },
               { title: "Gig Workforce", desc: "On-demand fleet for last-mile delivery and field operations.", icon: Package },
               { title: "Claims & Refunds", desc: "Processing lost/damaged shipment claims efficiently.", icon: AlertTriangle }
             ].map((item, i) => (
               <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                 <item.icon className="w-10 h-10 text-primary mb-4" />
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-slate-600">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 3 - CTA */}
      <section className="py-24 bg-white text-center border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">Ready to Optimize Your Logistics?</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold rounded-full px-12 h-16 text-xl shadow-xl shadow-primary/20">
              Talk to Us <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      <SaberBot />
      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 SaberTechs Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
