import { Header } from "@/components/Header";
import { 
  Monitor, 
  ShoppingBag, 
  Plane, 
  GraduationCap, 
  Network, 
  Stethoscope, 
  BadgeDollarSign, 
  Truck, 
  Building2, 
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  Database,
  ShieldCheck,
  Bot,
  Users,
  Twitter,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/isometric_contact_center_illustration.png";

  }, []);

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
      </header>

      {/* SECTION 1 - HERO */}
      <section className="relative pt-[200px] pb-[120px] bg-slate-50 overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute top-[40%] -left-[5%] w-[30%] h-[40%] bg-indigo-50/50 rounded-full blur-3xl opacity-60"></div>
         </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.h1 
                className="text-[48px] lg:text-[56px] font-heading font-bold text-slate-900 leading-[1.1] mb-6"
                variants={fadeIn}
              >
                Tailored Operations for <span className="text-primary">Your Industry</span>
              </motion.h1>
              <motion.h3 
                className="text-xl text-slate-600 mb-10 leading-relaxed font-light"
                variants={fadeIn}
              >
                We understand the specific nuances, compliance requirements, and customer expectations of your sector.
              </motion.h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl transform scale-110 -z-10 rounded-full"></div>
               <div className="relative z-10 rounded-[24px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-gradient-to-br from-blue-50 to-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImage} 
                  alt="Industries" 
                  className="w-full h-auto object-cover mix-blend-multiply"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INDUSTRY GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600">
              Specialized solutions for sectors where quality, speed and compliance matter.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SaaS & Technology",
                description: "Technical support, onboarding, and customer success for software companies.",
                link: "/industries/saas-technology",
                icon: Monitor,
              },
              {
                title: "E-commerce & D2C",
                description: "Order support, returns management, and pre-sales inquiries for online brands.",
                link: "/industries/ecommerce-d2c",
                icon: ShoppingBag,
              },
              {
                title: "Travel & Hospitality",
                description: "24/7 booking assistance, travel disruption management, and concierge services.",
                link: "/industries/travel-hospitality",
                icon: Plane,
              },
              {
                title: "EdTech & Exams",
                description: "Student support, exam proctoring, and technical assistance for learning platforms.",
                link: "/industries/edtech-exams",
                icon: GraduationCap,
              },
              {
                title: "Telecom & ISPs",
                description: "Technical support, billing inquiries, and new connection onboarding.",
                link: "/industries/telecom-isp",
                icon: Network,
              },
              {
                title: "Fintech & Insurance",
                description: "KYC verification, claims processing, and secure customer support.",
                link: "/industries/fintech-insurance",
                icon: BadgeDollarSign,
              },
              {
                title: "Healthcare",
                description: "Patient scheduling, insurance verification, and empathetic support.",
                link: "/industries/healthcare-diagnostics",
                icon: Stethoscope,
              },
              {
                title: "Logistics & Delivery",
                description: "Tracking updates, driver support, and exception management.",
                link: "/industries/logistics-delivery",
                icon: Truck,
              },
              {
                title: "Real Estate",
                description: "Lead qualification, appointment setting, and tenant support.",
                link: "/industries/real-estate",
                icon: Building2,
              }
            ].map((industry, index) => (
              <Link key={index} href={industry.link}>
                <div className="group cursor-pointer flex flex-col bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                    <industry.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{industry.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    {industry.description}
                  </p>
                  
                  <div className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary group-hover:text-blue-700 transition-colors mt-auto">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Mega Footer Style */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 bg-primary rounded-tr-lg rounded-bl-lg flex items-center justify-center font-bold">S</div>
                <span className="text-xl font-heading font-bold">SaberTechs</span>
              </div>
              <p className="mb-6 leading-relaxed text-sm">
                Empowering businesses with scalable, high-quality outsourced operations. From CX to Sales, we cover it all.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
                <li><Link href="/services"><a className="hover:text-primary transition-colors">Services</a></Link></li>
                <li><Link href="/industries"><a className="hover:text-primary transition-colors">Industries</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services/customer-support-cx"><a className="hover:text-primary transition-colors">Customer Support</a></Link></li>
                <li><Link href="/services/revenue-inside-sales"><a className="hover:text-primary transition-colors">Sales & Revenue</a></Link></li>
                <li><Link href="/services/back-office-operations"><a className="hover:text-primary transition-colors">Back Office Ops</a></Link></li>
                <li><Link href="/services/ai-automation"><a className="hover:text-primary transition-colors">AI Automation</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe for the latest CX trends and insights.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email Address" className="bg-slate-900 border-none rounded px-4 py-2 w-full focus:ring-1 focus:ring-primary text-white text-sm" />
                <Button className="bg-primary hover:bg-blue-600 text-white rounded">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2024 SaberTechs Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}