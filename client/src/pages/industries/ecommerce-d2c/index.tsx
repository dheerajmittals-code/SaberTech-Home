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
  RefreshCcw,
  BarChart,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/ecommerce_d2c_operations.png";

export default function EcommerceD2C() {

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
              E-commerce & D2C <span className="text-primary">Operations Support</span>
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              We help e-commerce and D2C brands manage high-volume customer interactions, back office operations and seasonal spikes without building large internal teams.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  Discuss Your Requirement
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
                alt="E-commerce D2C Operations" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Key Challenges We Solve</h2>
            <p className="text-lg text-slate-600">
              Addressing the operational bottlenecks that slow down D2C growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Query Volumes", desc: "Managing high volumes of customer inquiries across channels.", icon: MessageSquare },
               { title: "Order Tracking", desc: "Handling complex order tracking, returns, and refunds.", icon: RefreshCcw },
               { title: "Traffic Spikes", desc: "Managing peak season and flash sale traffic surges.", icon: BarChart },
               { title: "Cost Pressure", desc: "Reducing operational costs while maintaining quality.", icon: BadgeDollarSign }
             ].map((item, i) => (
               <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                   <item.icon className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-slate-600 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Services for E-commerce & D2C</h2>
            <p className="text-lg text-slate-600">
              Comprehensive support solutions tailored for online retail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Customer Support", desc: "Voice, chat, and email support to resolve inquiries instantly.", icon: MessageSquare },
               { title: "Back Office Processing", desc: "Efficient handling of orders, refunds, and cancellations.", icon: Database },
               { title: "Quality Audits", desc: "Regular checks on customer interactions to ensure service quality.", icon: ShieldCheck },
               { title: "Automation", desc: "WhatsApp and chat automation to handle common queries 24/7.", icon: MessageCircle },
               { title: "Logistics Coordination", desc: "Last-mile coordination support to ensure timely deliveries.", icon: Truck },
               { title: "Scalable Teams", desc: "Flexible staffing to handle seasonal demand fluctuations.", icon: Users }
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                 <item.icon className="w-10 h-10 text-primary mb-4" />
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-slate-600">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - USE CASES & ENGAGEMENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Typical Use Cases</h2>
              <div className="space-y-6">
                {[
                  "D2C brands scaling post-funding needing rapid support setup",
                  "Marketplaces managing multiple sellers and complex queries",
                  "Brands preparing for festival sales and flash campaigns"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                    </div>
                    <p className="text-lg text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Engagement Models</h2>
              <div className="space-y-6">
                {[
                  { title: "Dedicated Support Teams", desc: "Full-time agents exclusively for your brand." },
                  { title: "Shared Queues", desc: "Flexible resource allocation for variable volume." },
                  { title: "Pilot → Scale Approach", desc: "Start small, validate results, then expand." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 5 - CTA */}
      <section className="py-24 bg-slate-900 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Scale Your Operations?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Partner with SaberTechs for reliable, scalable e-commerce support solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-blue-600 text-white font-bold rounded-full px-12 h-16 text-xl">
                Discuss Your Requirement <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <Link href="/industries">
              <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 hover:text-white rounded-full px-8 h-16 text-lg">
                ← Back to Industries
              </Button>
            </Link>
          </div>
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