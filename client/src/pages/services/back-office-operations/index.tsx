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
  RefreshCw,
  FileText,
  Search,
  Layers,
  CreditCard,
  Briefcase,
  Network
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

import heroImage from "@assets/generated_images/isometric_back_office_illustration.png";

export default function BackOfficeOperations() {
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
    document.title = "Back Office Operations Outsourcing for SMBs | SaberTechs";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Outsource your back-office operations to SaberTechs. We handle product listings, data entry, refunds, catalog hygiene, order processing and CRM updates for SaaS, E-commerce, Travel and EdTech brands.");
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
                      { name: "SaaS & Technology", link: "/industries/saas-technology", icon: Monitor },
                      { name: "E-commerce & D2C", link: "/industries/ecommerce-d2c", icon: ShoppingBag },
                      { name: "Travel & Hospitality", link: "/industries/travel-hospitality", icon: Plane },
                      { name: "EdTech & Exams", link: "/industries/edtech-exams", icon: GraduationCap },
                      { name: "Telecom & ISPs", link: "/industries/telecom-isp", icon: Network },
                      { name: "Fintech & Insurance", link: "/industries/fintech-insurance", icon: BadgeDollarSign },
                      { name: "Healthcare", link: "/industries/healthcare-diagnostics", icon: Stethoscope },
                      { name: "Logistics", link: "/industries/logistics-delivery", icon: Truck },
                      { name: "Real Estate", link: "/industries/real-estate", icon: Building2 }
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
                          { name: "SaaS & Technology", link: "/industries/saas-technology" },
                          { name: "E-commerce & D2C", link: "/industries/ecommerce-d2c" },
                          { name: "Travel & Hospitality", link: "/industries/travel-hospitality" },
                          { name: "EdTech & Exams", link: "/industries/edtech-exams" },
                          { name: "Telecom & ISPs", link: "/industries/telecom-isp" },
                          { name: "Fintech & Insurance", link: "/industries/fintech-insurance" },
                          { name: "Healthcare", link: "/industries/healthcare-diagnostics" },
                          { name: "Logistics", link: "/industries/logistics-delivery" },
                          { name: "Real Estate", link: "/industries/real-estate" }
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
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 z-0"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-10 md:px-10 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="w-full lg:basis-[45%] lg:w-[45%] text-center lg:text-left mt-8 lg:mt-0"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Services · Back Office Operations
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-4 max-w-[540px] mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Back Office <span className="text-primary">Operations</span> That Keep Your Business Moving
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Shift repetitive, high-volume work to an India-based back office team. We handle data, catalog, order processing, content checks, finance support and ticket back-end so your core team can focus on growth.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start"
              variants={fadeIn}
            >
               {[
                 { label: "Data & catalog operations" },
                 { label: "Orders & transaction processing" },
                 { label: "99%+ accuracy targets with QA" }
               ].map((tag, i) => (
                 <div key={i} className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium shadow-sm">
                   <span className="text-blue-600 font-bold mr-1">✓</span> {tag.label}
                 </div>
               ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Discuss Back Office Scope
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-lg px-8 h-14 text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                Get Cost Estimate
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:basis-[55%] lg:w-[55%] relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl transform scale-110 -z-10 rounded-full"></div>
             <div className="relative z-10 rounded-[24px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-gradient-to-br from-blue-50 to-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Back Office Operations Team" 
                className="w-full h-auto object-cover mix-blend-multiply"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-dashed border-primary/20 rounded-[24px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - CORE WORKSTREAMS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">Core Back Office Workstreams</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We pick up the processes that are critical but repeatable – with clear SOPs, checklists and SLAs – and run them at scale from India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Entry & Content Updates",
                category: "Data",
                description: "Structured entry and updates of customer, product, transaction and content data into your systems.",
                icon: Database,
                tags: ["CRM data", "Spreadsheet work", "Form digitisation"]
              },
              {
                title: "Product & Catalog Management",
                category: "E-commerce",
                description: "Creating and maintaining product listings, attributes, pricing and images across marketplaces and your own store.",
                icon: ShoppingBag,
                tags: ["SKU creation", "Attribute mapping", "Price & stock updates"]
              },
              {
                title: "Order & Transaction Processing",
                category: "Orders",
                description: "Back-end checks, approvals and updates for orders, refunds, cancellations and policy requests.",
                icon: RefreshCw,
                tags: ["Refund workflows", "Cancellations", "Exception handling"]
              },
              {
                title: "Content Review & Moderation",
                category: "Content",
                description: "Manual checks on user-generated content, listings, profiles, comments and reviews as per your guidelines.",
                icon: ShieldCheck,
                tags: ["Profile checks", "Review moderation", "Listing approvals"]
              },
              {
                title: "Finance & Admin Support",
                category: "Finance",
                description: "Support for basic finance operations like invoice checks, reconciliation prep and payout lists.",
                icon: CreditCard,
                tags: ["Invoice validation", "Reconciliation prep", "Payout files"]
              },
              {
                title: "Ticket Back-End & Case Work",
                category: "Support Ops",
                description: "Behind-the-scenes work on tickets – verifying documents, updating systems and closing cases.",
                icon: Layers,
                tags: ["Case checks", "Status updates", "SLA chasing"]
              }
            ].map((item, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">{item.category}</span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-all">
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

      {/* SECTION 3 - USE CASES & DELIVERY MODEL */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-500/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Use Cases */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Back Office Use Cases</h2>
              <p className="text-lg text-slate-300">
                A few examples of how clients use our back office teams. Your exact process can be mapped and customized.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <ShoppingBag size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">E-commerce & Marketplace Ops</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Bulk catalog uploads and regular price / stock updates.",
                    "Seller onboarding checks and KYC document verification.",
                    "Order exception handling – address issues, COD checks, high-risk orders.",
                    "Returns and refund processing in coordination with support and finance."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Service & Subscription Businesses</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Plan change processing and back-end updates in systems.",
                    "Document checks for policy issuance, loans or service eligibility.",
                    "Basic QA on forms submitted by customers and partners.",
                    "Backlog clean-up and data hygiene projects."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Delivery Model */}
          <div className="grid md:grid-cols-2 gap-12 items-center border-t border-slate-800 pt-20">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">How We Run Your Back Office</h2>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                A simple, documented operating model – so that work gets done everyday without you having to chase tasks.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white">1</span>
                    Process & SOPs
                  </h4>
                  <p className="text-slate-400 pl-8">
                    We map your current process, create clear SOPs and checklists, and batch work into queues with defined SLAs.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white">2</span>
                    Quality & Controls
                  </h4>
                  <p className="text-slate-400 pl-8">
                    Sampling-based QA with accuracy targets, exception logs, and daily productivity reports to track trends.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-lg font-bold mb-6 text-slate-200">Industries We Support</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "E-commerce & Marketplaces",
                  "Fintech & NBFCs",
                  "Insurance & Broking",
                  "Telecom & ISP",
                  "Healthcare & Diagnostics",
                  "EdTech",
                  "Real Estate & Property",
                  "B2B Services & Agencies"
                ].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-slate-700/50 text-slate-300 text-sm border border-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 - FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Back Office Operations – FAQs</h2>
            <p className="text-lg text-slate-600">Some common questions before starting.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "What kind of back office work is a good fit?",
                answer: "Any repeatable process with clear steps, rules and tools is usually a good fit – data entry, catalog, order checks, document verification, ticket back-end, finance support and more."
              },
              {
                question: "How do you ensure data security?",
                answer: "We work within your systems wherever possible, use restricted access, NDAs and process-level controls. For sensitive work, we can follow your infosec guidelines."
              },
              {
                question: "Can you work in our tools and CRMs?",
                answer: "Yes. Our teams are used to learning new tools. We typically train on your sandbox or test environment first, then move to live work once approved."
              },
              {
                question: "Can we start with a small pilot?",
                answer: "Absolutely. Many clients start with a 2–4 week pilot on one or two processes before expanding the scope and team size."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="mb-4 border border-slate-100 rounded-lg px-4 data-[state=open]:bg-slate-50 data-[state=open]:border-blue-100 transition-all">
                <AccordionTrigger className="text-base sm:text-lg font-semibold text-slate-800 hover:text-primary hover:no-underline py-5 text-left">
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
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                Want to Shift Back Office Work Off Your Plate?
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Share the processes you are considering for outsourcing. We’ll respond with a simple view of what can be moved, team size, SLAs and commercials.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  Email Your Processes
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary font-bold rounded-lg px-8 h-14 text-lg">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0B1F3A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
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