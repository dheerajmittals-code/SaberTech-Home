import { Header } from "@/components/Header";
import { 
  MessageSquare, 
  BadgeDollarSign, 
  Database, 
  ShieldCheck, 
  Bot, 
  Users, 
  Scaling, 
  Layers, 
  Zap, 
  Clock, 
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
  Phone, 
  ChevronDown,
  Search,
  UserCheck,
  Rocket,
  BarChart3,
  Stethoscope,
  Truck,
  Building2,
  Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { StickyCTA } from "@/components/StickyCTA";

import heroImage from "@assets/generated_images/minimalist_isometric_support_team_illustration.png";

// Reusing the same header/footer structure as Home for consistency
export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
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

      {/* SECTION 1 — HERO */}
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
                Operations & CX Services Built for <span className="text-primary">High-Growth</span> Businesses
              </motion.h1>
              <motion.h3 
                className="text-xl text-slate-600 mb-10 leading-relaxed font-light"
                variants={fadeIn}
              >
                Flexible, scalable, fully-managed customer support, sales, and back-office operations — designed for global SMBs.
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-lg px-8 h-14 text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                  View Case Studies
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              {/* Soft blue gradient background behind the hero illustration */}
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl transform scale-110 -z-10 rounded-full"></div>
               <div className="relative z-10 rounded-[24px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-gradient-to-br from-blue-50 to-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImage} 
                  alt="SaberTechs Dashboard" 
                  className="w-full h-auto object-cover mix-blend-multiply"
                />
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-dashed border-primary/20 rounded-[24px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CORE SERVICE GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">Our Core Service Capabilities</h2>
            <p className="text-lg text-slate-600">
              From customer support to back-office ops, SaberTechs acts as an extension of your team.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "CX / Support",
                title: "Customer Support & CX",
                description: "Multichannel chat, email, and voice support from trained CX specialists. We handle inquiries, complaints, and tickets with defined SLAs and daily reporting.",
                icon: MessageSquare,
              },
              {
                category: "Sales / Outreach",
                title: "Revenue & Inside Sales",
                description: "Lead qualification, demo scheduling, renewals and win-back campaigns. We help your sales team focus on closing while we handle outreach and follow-ups.",
                icon: BadgeDollarSign,
              },
              {
                category: "Operations",
                title: "Back Office Operations",
                description: "Data entry, catalog updates, refunds, order processing and CRM hygiene. We quietly run the processes that keep your business moving.",
                icon: Database,
              },
              {
                category: "Quality & Compliance",
                title: "QA & Compliance",
                description: "Call and chat QA, process compliance checks, mystery audits and retail evaluations. We ensure your customer interactions and operations stay on-standard.",
                icon: ShieldCheck,
              },
              {
                category: "Automation",
                title: "AI Automation",
                description: "Chatbots, workflows, routing rules and automated responses built using leading tools. We combine automation with human support so you get speed and reliability.",
                icon: Bot,
              },
              {
                category: "Flexible Staffing",
                title: "Gig Workforce On-Demand",
                description: "Flexible hourly or project-based staffing for CX, audits, proctoring and back-office spikes. Ideal for seasonal peaks, launches and one-off projects.",
                icon: Users,
              }
            ].map((service, index) => (
              <div key={index} className="group flex flex-col bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 group-hover:text-primary/70 transition-colors">
                  {service.category}
                </div>
                <div className="w-14 h-14 rounded-full bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary group-hover:text-blue-700 transition-colors mt-auto">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY BUSINESSES PREFER SABERTECHS */}
      <section className="py-32 bg-slate-50/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-heading font-bold text-slate-900">Why Businesses Prefer SaberTechs</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
             {[
               {
                 title: "Scalable Teams On-Demand",
                 description: "Start with just 1–2 agents and scale to a full CX operation as your business grows.",
                 icon: Scaling
               },
               {
                 title: "CX, Sales & Ops Under One Roof",
                 description: "One partner for customer support, sales support, back-office and gig workforce.",
                 icon: Layers
               },
               {
                 title: "Data-Driven Performance",
                 description: "We work with SLAs, KPIs, QA scorecards and transparent reporting.",
                 icon: BarChart3
               },
               {
                 title: "AI-Enhanced Productivity",
                 description: "Automations and workflows reduce cost per ticket and response times.",
                 icon: Zap
               }
             ].map((feature, i) => (
               <div key={i} className="group bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                 <div className="mb-6 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                   <feature.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-heading font-bold text-slate-900 mb-3">{feature.title}</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR ENGAGEMENT MODEL */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900">How We Work With You</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[24px] left-[12.5%] right-[12.5%] h-0.5 bg-slate-100 z-0"></div>

            {[
              {
                step: "1",
                title: "Discovery & Scoping",
                description: "Understand your goals, volumes, tools and support expectations.",
                icon: Search
              },
              {
                step: "2",
                title: "Team Setup & Training",
                description: "Build the right team, define SOPs and train on your product/process.",
                icon: Users
              },
              {
                step: "3",
                title: "Go-Live & SLA Commitments",
                description: "Start operations with clear SLAs, coverage hours and reporting.",
                icon: Rocket
              },
              {
                step: "4",
                title: "Continuous Improvement",
                description: "Regular reviews, QA feedback and optimization of processes and scripts.",
                icon: Scaling
              }
            ].map((phase, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary font-bold flex items-center justify-center mb-6 shadow-sm text-lg">
                  {phase.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-[250px]">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — INDUSTRIES WE SUPPORT */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900">Industry-Focused Operations</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                name: "SaaS & Tech", 
                desc: "Onboarding, product support, renewals and ticket management.",
                icon: Monitor 
              },
              { 
                name: "E-commerce & D2C", 
                desc: "Order support, returns, refunds, catalog and review management.",
                icon: ShoppingBag 
              },
              { 
                name: "Travel & Hospitality", 
                desc: "Booking support, itinerary changes, cancellations and customer care.",
                icon: Plane 
              },
              { 
                name: "EdTech & Assessments", 
                desc: "Candidate support, proctoring coordination and exam operations.",
                icon: GraduationCap 
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <industry.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-bold text-slate-900">{industry.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA BANNER */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
         {/* Abstract glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-3xl rounded-full translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-500/10 blur-3xl rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Ready to Scale Your Operations?
          </h2>
          <p className="text-blue-200/80 text-lg mb-8 font-light">Trusted by high-growth SaaS, E-commerce, and EdTech brands.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-10"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-bold h-14 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Get a Proposal
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600 font-bold h-14 px-8 rounded-full text-lg hover:-translate-y-1 transition-all">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      <StickyCTA />
      
      {/* FOOTER - Mega Footer Style (Identical to Home) */}
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
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/services" className="hover:text-primary transition-colors">Customer Support</a></li>
                <li><a href="/services" className="hover:text-primary transition-colors">Sales & Revenue</a></li>
                <li><a href="/services" className="hover:text-primary transition-colors">Back Office Ops</a></li>
                <li><a href="/services" className="hover:text-primary transition-colors">AI Automation</a></li>
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
