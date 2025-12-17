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
  Headphones,
  BarChart3,
  Globe,
  Settings,
  Zap,
  Phone,
  Target,
  Mail,
  Calendar,
  RefreshCw,
  PieChart,
  FileText,
  Search,
  Rocket,
  CreditCard,
  Layers
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

import heroImage from "@assets/generated_images/back_office_operations_team_illustration.png";

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
                          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50/80 hover:text-slate-900 transition-all group/item">
                            <service.icon className="w-5 h-5 text-primary group-hover/item:text-blue-700 transition-colors" strokeWidth={1.5} />
                            <span className="text-sm font-medium">{service.name}</span>
                          </a>
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
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50/80 hover:text-slate-900 transition-all group/item">
                          <industry.icon className="w-5 h-5 text-primary group-hover/item:text-blue-700 transition-colors" strokeWidth={1.5} />
                          <span className="text-sm font-medium">{industry.name}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#" className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                Why Us
              </a>
              <a href="#" className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                Contact
              </a>

              <Button className="bg-primary hover:bg-blue-700 text-white font-bold rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                Get a Quote
              </Button>
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

                <a href="#" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Why Us</a>
                <a href="#" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Contact</a>
                
                <Button className="w-full bg-primary text-white mt-4">Get a Quote</Button>
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
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-4 max-w-[540px] mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Streamline Your Back-Office Operations — <span className="text-primary">Without Growing Headcount</span>
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Product listings, data entry, refunds, catalog hygiene, order processing and CRM updates — handled by a dedicated back-office team from SaberTechs.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Book a Free Ops Consultation
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-lg px-8 h-14 text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                See Pricing & Plans
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-sm text-slate-500 my-4 font-medium">
              No long-term contracts · Scale up or down · Fast onboarding
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500 items-center justify-center lg:justify-start">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 99%+ data accuracy</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 24/7 coverage options</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Process playbooks & SOPs</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Dedicated Team Lead & QA</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:basis-[55%] lg:w-[55%] max-w-[720px] self-center relative"
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

      {/* SECTION 2 - PROBLEM -> SOLUTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">Ops Team Overloaded? We Take Care of the Back Office Work.</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Problems */}
            <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">✕</span>
                The Struggle
              </h3>
              <ul className="space-y-4">
                {[
                  "Manual tasks slowing down your core team",
                  "Catalog, orders and refunds taking too long",
                  "Low data accuracy, duplicate or missing records",
                  "No time to build proper SOPs and QC",
                  "Difficult to hire and train reliable back-office staff",
                  "Costs increasing with seasonal volume spikes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center text-sm font-bold">✓</span>
                Our Solution
              </h3>
              <ul className="space-y-4">
                {[
                  "Dedicated back-office specialists mapped to your processes",
                  "Standardized SOPs, checklists and QA reviews",
                  "99%+ accuracy for data-heavy tasks",
                  "Support for daily, weekly and month-end operations",
                  "Scalable teams for seasonal peaks and campaigns",
                  "Transparent reporting and governance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-full px-8 h-12 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              Talk to an Operations Specialist
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3 - FEATURE GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Back-Office Operations We Manage for You</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Product & Catalog Management",
                text: "Product listings, attributes, pricing updates and catalog hygiene across marketplaces and platforms.",
                icon: ShoppingBag
              },
              {
                title: "Order & Refund Processing",
                text: "Order verification, refund approvals, credit notes and status updates in your systems.",
                icon: RefreshCw
              },
              {
                title: "Data Entry & Data Cleanup",
                text: "High-volume data entry, de-duplication, validation and corrections for CRM and business tools.",
                icon: Database
              },
              {
                title: "CRM & Record Maintenance",
                text: "Contact updates, notes, tagging, custom field updates and list management.",
                icon: Users
              },
              {
                title: "Document & Workflow Processing",
                text: "Billing support, document verification, basic KYC checks and simple approvals as per SOPs.",
                icon: FileText
              },
              {
                title: "Operations Reporting",
                text: "Daily/weekly/monthly reports, productivity metrics, SLA tracking and exception logs.",
                icon: BarChart3
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - METRICS STRIP */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "99%+", label: "Data accuracy across back-office tasks" },
              { number: "60%", label: "Average reduction in internal ops workload" },
              { number: "3×", label: "Faster turnaround on catalog and data requests" },
              { number: "24/7", label: "Coverage available for global operations" }
            ].map((metric, i) => (
              <div key={i} className="text-center group">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{metric.number}</h3>
                <p className="text-slate-300 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - CASE STUDY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-slate-50 rounded-[32px] overflow-hidden shadow-xl border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6 w-fit">
                  Success Story
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">
                  Case Study: 60% Reduction in Backlog for an E-commerce Brand
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  A fast-growing e-commerce brand was struggling with product updates, refunds and order status queries. Within 4 weeks, SaberTechs deployed a dedicated back-office team, cleared their backlog by 60%, standardized SOPs, and improved data accuracy to over 99% across their systems.
                </p>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
                  <div className="text-4xl text-primary absolute -top-4 -left-2 font-serif">“</div>
                  <p className="text-slate-800 italic mb-4 relative z-10">
                    SaberTechs turned our messy back-office operations into a reliable engine. Our internal team finally got time to focus on growth.
                  </p>
                  <div className="font-bold text-slate-900">— COO, D2C E-commerce Brand</div>
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-full bg-slate-200">
                <div className="absolute inset-0 bg-slate-900/10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                  alt="Back Office Success" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-transparent lg:bg-gradient-to-t"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - PROCESS TIMELINE */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">How We Set Up and Run Your Back-Office Operations</h2>
            <p className="text-xl text-slate-300 font-light">
              Our framework helps you move from ad-hoc tasks to a predictable back-office engine.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Mapping",
                  text: "We document your existing workflows, tools, volumes, edge cases and SLAs.",
                  icon: Search
                },
                {
                  step: "02",
                  title: "SOPs & Pilot Setup",
                  text: "We design playbooks, SOPs, checklists and build a small pilot team to validate quality.",
                  icon: FileText
                },
                {
                  step: "03",
                  title: "Go-Live & Stabilization",
                  text: "We scale the team, finalize coverage hours, and stabilize SLAs and QA benchmarks.",
                  icon: Rocket
                },
                {
                  step: "04",
                  title: "Continuous Optimization",
                  text: "We monitor KPIs, reduce errors, add automations and constantly refine processes.",
                  icon: Settings
                }
              ].map((item, i) => (
                <div key={i} className="relative z-10 group">
                  <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:bg-slate-700/80 transition-all duration-300 h-full flex flex-col items-center text-center hover:-translate-y-2 shadow-2xl">
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-bold mb-6 border border-primary/20 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Step {item.step}</div>
                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button size="lg" className="bg-primary hover:bg-blue-600 text-white font-bold rounded-full px-10 h-14 text-lg shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all">
                Start Your Ops Transformation with SaberTechs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Back-Office Support Tailored to Your Industry</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SaaS & Tech",
                text: "Billing support, license updates, CRM hygiene and renewal ops.",
                icon: Monitor,
                link: "/industries/saas-tech"
              },
              {
                title: "E-commerce & D2C",
                text: "Catalog, orders, refunds, coupon management and marketplace ops.",
                icon: ShoppingBag,
                link: "/industries/ecommerce-d2c"
              },
              {
                title: "Travel & Hospitality",
                text: "Itinerary updates, booking changes, voucher issuance and partner coordination.",
                icon: Plane,
                link: "/industries/travel-hospitality"
              },
              {
                title: "EdTech & Assessments",
                text: "Candidate data updates, exam record management, enrollment workflow support.",
                icon: GraduationCap,
                link: "/industries/edtech-assessments"
              }
            ].map((industry, i) => (
              <Link key={i} href={industry.link}>
                <a className="block bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all group h-full">
                  <industry.icon className="w-10 h-10 text-slate-400 group-hover:text-primary mb-6 transition-colors" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{industry.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{industry.text}</p>
                </a>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-center">
            <Link href="/services/customer-support-cx">
              <a className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors">
                Need customer support on top of back-office ops? <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/services/revenue-inside-sales">
              <a className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors">
                Running sales campaigns? <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 - PRICING */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Flexible Back-Office Teams for Every Stage</h2>
            <p className="text-lg text-slate-600">Pricing depends on process complexity, coverage hours and volume. Transparent, with no hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-500 mb-6">For lean teams</p>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "1–2 back-office specialists",
                  "Limited processes (e.g., data entry + basic catalog)",
                  "Business-hours coverage",
                  "Daily reporting"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-slate-300">Inquire</Button>
            </div>

            {/* Growth */}
            <div className="bg-white p-8 rounded-2xl border-2 border-primary shadow-xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth</h3>
              <p className="text-slate-500 mb-6">For scaling operations</p>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "3–10 specialists + Team Lead",
                  "Multi-process support (catalog, orders, CRM, reporting)",
                  "Extended support hours",
                  "QA reviews and SLA tracking"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-blue-700">Inquire</Button>
            </div>

            {/* Scale */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Scale</h3>
              <p className="text-slate-500 mb-6">For high-volume operations</p>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "10+ specialists across shifts",
                  "24/7 or multi-region coverage",
                  "Process design + automation suggestions",
                  "Governance calls and advanced reporting"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-slate-300">Inquire</Button>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-8 rounded-full">Request Custom Pricing</Button>
          </div>
        </div>
      </section>

      {/* SECTION 9 - FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Back-Office Outsourcing FAQs</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is back-office outsourcing?",
                a: "Back-office outsourcing involves delegating non-customer-facing tasks like data entry, order processing, and content moderation to an external team, allowing your in-house staff to focus on core business strategies."
              },
              {
                q: "Which back-office processes can SaberTechs manage?",
                a: "We handle a wide range of processes including product catalog management, order and refund processing, data entry and cleanup, CRM maintenance, document verification, and operational reporting."
              },
              {
                q: "How do you ensure data accuracy and security?",
                a: "We implement strict SOPs, multi-tier QA reviews, and secure access protocols. Our teams work within your systems via secure VPNs or remote desktops to ensure data never leaves your controlled environment."
              },
              {
                q: "Which tools and platforms do you work with?",
                a: "We are platform-agnostic and work with all major tools including Shopify, Magento, Salesforce, HubSpot, Zendesk, Google Workspace, Microsoft 365, and custom internal dashboards."
              },
              {
                q: "Can you work inside our CRM, ERP or custom tools?",
                a: "Yes, our team is trained to work directly within your existing software stack, ensuring real-time updates and seamless integration with your current workflows."
              },
              {
                q: "How do you handle training and SOP updates?",
                a: "We start with a thorough discovery phase to document your processes. We then create detailed SOPs which are regularly updated. Ongoing training ensures the team stays aligned with any changes in your operations."
              },
              {
                q: "Can we start small and scale up later?",
                a: "Absolutely. Our flexible model allows you to start with a small pilot team and scale up headcount during peak seasons or as your business grows, with no long-term lock-in."
              },
              {
                q: "Do you provide 24/7 support for back-office tasks?",
                a: "Yes, we offer 24/7 coverage options for global operations, ensuring that critical tasks like order processing or content moderation continue around the clock."
              },
              {
                q: "How is pricing structured for back-office teams?",
                a: "Pricing is transparent and typically based on the number of specialists and coverage hours. We offer dedicated monthly staffing models that are significantly more cost-effective than hiring locally."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-slate-200 rounded-lg px-6 data-[state=open]:bg-slate-50 transition-colors">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-primary py-6 text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 10 - FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Take Back Control of Your Back Office?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Share your processes and volumes — we’ll send a tailored back-office proposal within 24 hours.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-full px-12 h-16 text-xl shadow-xl transition-transform hover:scale-105">
              Talk to an Ops Expert
            </Button>
            <p className="text-sm text-blue-200 font-medium opacity-80">
              Combine Back-Office Ops with Customer Support & Inside Sales for an end-to-end operations stack.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 bg-primary rounded-tr-lg rounded-bl-lg flex items-center justify-center font-bold">S</div>
                <span className="text-xl font-bold">SaberTechs</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Premium outsourcing for modern brands. We build dedicated teams for customer support, sales, and back-office operations.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services/customer-support-cx"><a className="hover:text-primary transition-colors">Customer Support & CX</a></Link></li>
                <li><Link href="/services/revenue-inside-sales"><a className="hover:text-primary transition-colors">Revenue & Inside Sales</a></Link></li>
                <li><Link href="/services/back-office-operations"><a className="hover:text-primary transition-colors">Back Office Operations</a></Link></li>
                <li><Link href="/services/qa-compliance"><a className="hover:text-primary transition-colors">QA & Compliance</a></Link></li>
                <li><Link href="/services/ai-automation"><a className="hover:text-primary transition-colors">AI Automation</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Why Philippines?</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>hello@sabertechs.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+1 (888) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary shrink-0" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div>&copy; 2024 SaberTechs Inc. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA & Chat Bot */}
      <StickyCTA />
      <SaberBot />
    </div>
  );
}