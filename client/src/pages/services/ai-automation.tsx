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
  Workflow,
  Sparkles,
  GitBranch,
  Lightbulb,
  Bell,
  FileBarChart,
  BrainCircuit,
  Settings,
  Zap,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { StickyCTA } from "@/components/StickyCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SaberBot } from "@/components/SaberBot";

import heroImage from "@assets/generated_images/isometric_ai_automation_illustration.png";

export default function AIAutomation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isIndustriesMobileOpen, setIsIndustriesMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = "AI Automation Services | SaberTechs";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Practical AI automation for customer support, sales and back office. Simple chat & WhatsApp bots, call flows and workflow automations that work with your human teams.");
    }
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
      {/* HEADER - Sticky & Premium */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 bg-primary rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg group-hover:rotate-3 transition-transform">S</div>
                <span className={`text-2xl font-heading font-bold tracking-tight ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
                  SaberTechs
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/">
                <span className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors cursor-pointer ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                  Home
                </span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <Link href="/services">
                  <span className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors cursor-pointer ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                    Services <ChevronDown className="w-4 h-4" />
                  </span>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-[280px]">
                  <div className="bg-white rounded-xl shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-slate-100 overflow-hidden p-2">
                    {[
                      { name: "Customer Support & CX", link: "/services/customer-support-cx", icon: MessageSquare },
                      { name: "Revenue & Inside Sales", link: "/services/revenue-inside-sales", icon: BadgeDollarSign },
                      { name: "Back Office Operations", link: "/services/back-office-operations", icon: Database },
                      { name: "QA & Compliance", link: "/services/qa-compliance", icon: ShieldCheck },
                      { name: "AI Automation", link: "/services/ai-automation", icon: Bot },
                      { name: "Gig Workforce (On-Demand)", link: "/services/gig-workforce", icon: Users }
                    ].map((service, index, arr) => (
                      <div key={service.name}>
                        {index === arr.length - 1 && <div className="h-px bg-slate-100 my-1 mx-2" />}
                        <Link href={service.link}>
                          <span className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50/80 hover:text-slate-900 transition-all group/item cursor-pointer">
                            <service.icon className="w-5 h-5 text-primary group-hover/item:text-blue-700 transition-colors" strokeWidth={1.5} />
                            <span className="text-sm font-medium">{service.name}</span>
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group">
                <Link href="/industries">
                  <span className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors cursor-pointer ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                    Industries <ChevronDown className="w-4 h-4" />
                  </span>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-[280px]">
                  <div className="bg-white rounded-xl shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-slate-100 overflow-hidden p-2">
                    {[
                      { name: "SaaS & Tech", link: "/industries/saas-tech", icon: Monitor },
                      { name: "E-commerce & D2C", link: "/industries/ecommerce-d2c", icon: ShoppingBag },
                      { name: "Travel & Hospitality", link: "/industries/travel-hospitality", icon: Plane },
                      { name: "EdTech & Assessments", link: "/industries/edtech-assessments", icon: GraduationCap }
                    ].map((industry) => (
                      <Link key={industry.name} href={industry.link}>
                        <span className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50/80 hover:text-slate-900 transition-all group/item cursor-pointer">
                          <industry.icon className="w-5 h-5 text-primary group-hover/item:text-blue-700 transition-colors" strokeWidth={1.5} />
                          <span className="text-sm font-medium">{industry.name}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <a href="/#why-us" className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                Why Us
              </a>
              <Link href="/contact">
                <span className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors cursor-pointer ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                  Contact
                </span>
              </Link>

              <Link href="/contact">
                <Button className="bg-primary hover:bg-blue-700 text-white font-bold rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  Get a Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-slate-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                <Link href="/">
                  <span className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50 block cursor-pointer">Home</span>
                </Link>

                {/* Mobile Services Accordion */}
                <div className="border-b border-slate-50">
                  <div className="flex items-center justify-between py-2">
                    <Link href="/services">
                      <span className="text-lg font-medium text-slate-800 flex-1 cursor-pointer block">Services</span>
                    </Link>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsServicesMobileOpen(!isServicesMobileOpen);
                      }} 
                      className="p-2 text-slate-500"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesMobileOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {isServicesMobileOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 pb-2 bg-slate-50/50 rounded-lg mb-2"
                      >
                        {[
                          { name: "Customer Support & CX", link: "/services/customer-support-cx" },
                          { name: "Revenue & Inside Sales", link: "/services/revenue-inside-sales" },
                          { name: "Back Office Operations", link: "/services/back-office-operations" },
                          { name: "QA & Compliance", link: "/services/qa-compliance" },
                          { name: "AI Automation", link: "/services/ai-automation" },
                          { name: "Gig Workforce (On-Demand)", link: "/services/gig-workforce" }
                        ].map((service) => (
                          <Link key={service.name} href={service.link}>
                            <span className="block py-3 text-slate-600 hover:text-primary text-base border-b border-slate-100 last:border-0 cursor-pointer">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Industries Accordion */}
                <div className="border-b border-slate-50">
                  <div className="flex items-center justify-between py-2">
                    <Link href="/industries">
                      <span className="text-lg font-medium text-slate-800 flex-1 cursor-pointer block">Industries</span>
                    </Link>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsIndustriesMobileOpen(!isIndustriesMobileOpen);
                      }} 
                      className="p-2 text-slate-500"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isIndustriesMobileOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {isIndustriesMobileOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 pb-2 bg-slate-50/50 rounded-lg mb-2"
                      >
                        {[
                          { name: "SaaS & Tech", link: "/industries/saas-tech" },
                          { name: "E-commerce & D2C", link: "/industries/ecommerce-d2c" },
                          { name: "Travel & Hospitality", link: "/industries/travel-hospitality" },
                          { name: "EdTech & Assessments", link: "/industries/edtech-assessments" }
                        ].map((industry) => (
                          <Link key={industry.name} href={industry.link}>
                            <span className="block py-3 text-slate-600 hover:text-primary text-base border-b border-slate-100 last:border-0 cursor-pointer">
                              {industry.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="/#why-us" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Why Us</a>
                <Link href="/contact">
                  <span className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50 block cursor-pointer">Contact</span>
                </Link>
                
                <Link href="/contact">
                  <Button className="w-full bg-primary text-white mt-4">Get a Quote</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SECTION 1 - HERO */}
      <section className="relative bg-slate-50 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-50/30 -skew-x-12 translate-x-1/4 z-0"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-10 md:px-10 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="w-full lg:basis-[45%] lg:w-[45%] text-center lg:text-left mt-8 lg:mt-0"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide mb-4 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              Services · AI Automation
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-4 max-w-[540px] mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Practical <span className="text-green-600">AI Automation</span> Around Your Human Teams
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              We don’t try to replace your people. Instead, we add simple, reliable automations around them – chat & WhatsApp flows, basic bots and workflows that reduce repeat work and speed up responses.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start"
              variants={fadeIn}
            >
               {[
                 { label: "Human-first AI approach" },
                 { label: "Faster responses & fewer tickets" },
                 { label: "Works with your existing tools" }
               ].map((tag, i) => (
                 <div key={i} className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium shadow-sm">
                   <span className="text-green-600 font-bold mr-1">✓</span> {tag.label}
                 </div>
               ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Discuss Automation Ideas
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-slate-200 text-slate-700 hover:border-green-600 hover:text-green-600 font-bold rounded-lg px-8 h-14 text-lg">
                Review a Small Pilot
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:basis-[55%] lg:w-[55%] relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-green-100/50 border border-slate-100 bg-white">
              <img 
                src={heroImage} 
                alt="AI Automation Illustration" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg border border-slate-100 p-4 rounded-xl hidden sm:block max-w-[240px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Bot size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Automation Status</div>
                    <div className="text-sm font-bold text-slate-800">24/7 Active</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                    <span>Efficiency</span>
                    <span>+85%</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative background blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - CORE AUTOMATION AREAS (Grid) */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Focus</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">Where We Use AI & Automation</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We focus on a few practical areas where automation makes an immediate difference – without needing a big AI project or a full rebuild of your tech stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Website & In-App Chat Flows",
                category: "Chat",
                description: "Guided flows that answer common questions, collect details and hand over to humans when needed.",
                icon: MessageSquare,
                tags: ["FAQ flows", "Lead capture", "Handover to agent"]
              },
              {
                title: "WhatsApp Journeys",
                category: "Messaging",
                description: "Simple WhatsApp experiences for order status, basic support, reminders and feedback collection.",
                icon: Phone,
                tags: ["Order updates", "Reminders", "Feedback links"]
              },
              {
                title: "Lead & Ticket Routing",
                category: "Routing",
                description: "Smart rules and simple AI classification to send leads and tickets to the right queues or teams.",
                icon: Workflow,
                tags: ["Priority tagging", "Skill-based routing", "Basic classification"]
              },
              {
                title: "Agent Assist & Knowledge Help",
                category: "Assist",
                description: "Tools that make it easier for agents to find the right answer or next step while they are on the call or chat.",
                icon: Sparkles,
                tags: ["Searchable SOPs", "Suggested responses", "Next-step hints"]
              },
              {
                title: "Notifications & Reminders",
                category: "Follow-up",
                description: "Automated reminders for payments, renewals, appointments, demo follow-ups and pending tasks.",
                icon: Bell,
                tags: ["Payment nudges", "Renewal alerts", "Demo follow-ups"]
              },
              {
                title: "Lightweight Reports & Summaries",
                category: "Insights",
                description: "Simple automation to pull data from your systems and generate easy-to-read summaries for your teams.",
                icon: FileBarChart,
                tags: ["Daily snapshots", "Exception lists", "Team-level views"]
              }
            ].map((item, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider block mb-2">{item.category}</span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">{item.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-green-600 group-hover:border-green-200 transition-all">
                    <item.icon size={20} />
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed min-h-[80px]">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - HUMAN + AI APPROACH */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-green-500/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Human + AI, Not AI Instead of Humans</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our automation work is grounded in operations – we already run support, sales and back office teams. We add AI where it makes their lives easier and your costs lighter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold">Where Automation Helps Most</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Very common questions that have clear, fixed answers.",
                  "Data collection – name, contact, order IDs, simple preferences.",
                  "Basic status updates or “where is my order / ticket / case?” queries.",
                  "Reminders and follow-ups that humans forget or delay."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold">Where Humans Stay in Control</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Complaints, edge cases and sensitive situations.",
                  "High-value customers and large-ticket deals.",
                  "Any decision with financial or regulatory impact.",
                  "Final resolution, approvals and goodwill gestures."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - IMPLEMENTATION & USE CASES */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Implementation Model */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2 block">Process</span>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">How We Implement Automation</h2>
              <p className="text-lg text-slate-600">
                No big-bang project. We pick one or two journeys, fix them, measure impact and then expand step by step.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-6">
                  <GitBranch size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Simple Project Flow</h3>
                <ul className="space-y-3">
                  {[
                    "Identify 1–2 journeys with repeat questions or tasks.",
                    "Map the current process and define the “happy path”.",
                    "Configure flows using your existing platforms or light tools.",
                    "Run a pilot with a small segment of customers or traffic."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm">
                      <span className="text-green-500 font-bold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                  <Settings size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Tools & Integration</h3>
                <ul className="space-y-3">
                  {[
                    "We prefer using tools you already have licenses for.",
                    "If needed, we suggest lightweight, no-code or low-code platforms.",
                    "Integrations via APIs, webhooks, or simple CSV / file-based workflows.",
                    "Handover and documentation so your team can maintain it."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm">
                      <span className="text-purple-500 font-bold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases Grid */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Sample Automation Ideas by Function</h2>
              <p className="text-slate-600">
                A few examples to spark ideas. We can help you shortlist what makes the most sense for your stage and stack.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-green-200 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <MessageSquare size={100} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MessageSquare size={20} className="text-green-600" /> Customer Support & CX
                </h3>
                <ul className="space-y-3">
                  {[
                    "Chatbot that answers top 20 FAQs before reaching an agent.",
                    "WhatsApp flows for order status and basic troubleshooting.",
                    "Auto-tagging and triaging of tickets based on content.",
                    "CSAT survey triggers and simple dashboards."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-green-200 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BadgeDollarSign size={100} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BadgeDollarSign size={20} className="text-green-600" /> Revenue & Inside Sales
                </h3>
                <ul className="space-y-3">
                  {[
                    "Lead capture on website and auto-assignment to sales reps.",
                    "Automated follow-up sequences for demo no-shows.",
                    "Warm leads priority list based on behaviour or responses.",
                    "Summary notes after calls to reduce manual typing."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 - FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">AI Automation – FAQs</h2>
            <p className="text-lg text-slate-600">Plain answers, without the buzzwords.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Do we need a separate big AI platform to get started?",
                answer: "Not necessarily. In many cases we can work with features already available in your CRM, helpdesk, telephony or messaging tools – or add a small specialised tool where useful."
              },
              {
                question: "Will this replace our agents or staff?",
                answer: "Our approach is to remove repeat, low-value work and free your people to handle better conversations and decisions. Humans stay in control for complex or sensitive issues."
              },
              {
                question: "How do we measure if automation is working?",
                answer: "We look at simple, concrete metrics – reduced handle time, fewer tickets on common issues, faster responses, better CSAT / NPS on impacted journeys and lower cost per contact."
              },
              {
                question: "Can we start with a very small experiment?",
                answer: "Yes. The best way is to pick one small but noisy process – for example order status queries – and design a quick automation around it. Once you see the benefit, we expand step by step."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="mb-4 border border-slate-100 rounded-lg px-4 data-[state=open]:bg-slate-50 data-[state=open]:border-green-100 transition-all">
                <AccordionTrigger className="text-base sm:text-lg font-semibold text-slate-800 hover:text-green-700 hover:no-underline py-5 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 text-center border border-slate-200 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-600"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                Have a Journey in Mind for Automation?
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Share 1–2 processes where your team is answering the same question again and again. We’ll suggest a small, practical automation pilot – scope, tools and effort.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  Email Your Ideas
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-slate-200 text-slate-700 hover:border-green-600 hover:text-green-600 font-bold rounded-lg px-8 h-14 text-lg">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>
        </div>
      </section>

      {/* FOOTER - Identical to other pages */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-heading font-bold text-2xl">S</div>
                <span className="text-2xl font-heading font-bold text-white">SaberTechs</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Premium outsourcing partners for high-growth brands. We build dedicated teams for support, sales, and operations.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services/customer-support-cx" className="hover:text-primary transition-colors">Customer Support & CX</Link></li>
                <li><Link href="/services/revenue-inside-sales" className="hover:text-primary transition-colors">Revenue & Inside Sales</Link></li>
                <li><Link href="/services/back-office-operations" className="hover:text-primary transition-colors">Back Office Operations</Link></li>
                <li><Link href="/services/qa-compliance" className="hover:text-primary transition-colors">QA & Compliance</Link></li>
                <li><Link href="/services/ai-automation" className="hover:text-primary transition-colors">AI Automation</Link></li>
                <li><Link href="/services/gig-workforce" className="hover:text-primary transition-colors">Gig Workforce</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2024 SaberTechs Inc. All rights reserved.</p>
            <p>Designed for premium brands.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA & Chatbot */}
      <StickyCTA />
      <SaberBot />
    </div>
  );
}