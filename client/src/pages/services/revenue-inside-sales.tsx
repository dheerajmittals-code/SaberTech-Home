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
  PieChart
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

import heroImage from "@assets/generated_images/isometric_inside_sales_team_illustration_with_crm_dashboards.png";

export default function RevenueInsideSales() {
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
      {/* HEADER - Sticky & Premium (Identical to Home/Services) */}
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
                <a className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                  Home
                </a>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <Link href="/services">
                  <a className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                    Services <ChevronDown className="w-4 h-4" />
                  </a>
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
                  <a className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                    Industries <ChevronDown className="w-4 h-4" />
                  </a>
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
                  <a className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Home</a>
                </Link>

                {/* Mobile Services Accordion */}
                <div className="border-b border-slate-50">
                  <div className="flex items-center justify-between py-2">
                    <Link href="/services">
                      <a className="text-lg font-medium text-slate-800 flex-1">Services</a>
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
                            <a className="block py-3 text-slate-600 hover:text-primary text-base border-b border-slate-100 last:border-0">
                              {service.name}
                            </a>
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
                      <a className="text-lg font-medium text-slate-800 flex-1">Industries</a>
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
                            <a className="block py-3 text-slate-600 hover:text-primary text-base border-b border-slate-100 last:border-0">
                              {industry.name}
                            </a>
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

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-10 md:px-10 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-[60px]">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="w-full lg:w-[55%] text-center lg:text-left mt-8 lg:mt-0"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-4 max-w-[540px] mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Build a High-Performance Inside Sales Team in 7 Days — <span className="text-primary">Without Hiring</span>
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Lead qualification, demo scheduling, renewals, win-back campaigns and pipeline acceleration — managed by trained Inside Sales Specialists.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Book a Free Sales Consultation
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-lg px-8 h-14 text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                See Pricing & Plans
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-sm text-slate-500 my-4 font-medium">
              No long-term contracts · Flexible plans · Fast onboarding
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500 items-center justify-center lg:justify-start">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 3× more qualified leads</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 40% faster follow-ups</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 65% higher conversion on warm leads</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Fully managed team</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[480px] self-center relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl transform scale-110 -z-10 rounded-full"></div>
             <div className="relative z-10 rounded-[24px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-gradient-to-br from-blue-50 to-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Inside Sales Team" 
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
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">Stop Losing Revenue — We Build and Run Your Inside Sales Engine</h2>
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
                  "Leads not being followed up quickly",
                  "Pipeline stagnation and low sales bandwidth",
                  "Reps spending too much time on admin work",
                  "Missed demos, missed opportunities",
                  "No predictable outbound engine",
                  "High hiring and training costs"
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
                  "Trained Inside Sales Executives dedicated to your brand",
                  "Fast follow-ups within 15–60 minutes",
                  "Lead qualification using BANT, CHAMP or your custom framework",
                  "Demo scheduling and calendar management",
                  "Renewal and win-back campaigns",
                  "Scripts, CRM updates and analytics included"
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
              Talk to a Sales Specialist
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3 - FEATURE GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Everything You Need in a High-Velocity Inside Sales Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inbound Lead Qualification",
                text: "We respond instantly to incoming leads, qualify them, and route them to your closers.",
                icon: Filter
              },
              {
                title: "Outbound Prospecting",
                text: "Structured outreach through email, LinkedIn and calls to build your sales pipeline.",
                icon: Phone
              },
              {
                title: "Demo Scheduling",
                text: "We coordinate time zones, calendars, reminders and sales handoffs.",
                icon: Calendar
              },
              {
                title: "CRM & Pipeline Hygiene",
                text: "Daily updates in HubSpot, Salesforce, Zoho, Pipedrive and other CRMs.",
                icon: Database
              },
              {
                title: "Renewal & Win-Back Campaigns",
                text: "Automated and manual workflows to re-activate dormant or at-risk customers.",
                icon: RefreshCw
              },
              {
                title: "Sales Analytics & Reporting",
                text: "Daily and weekly reports with lead quality, funnel movement and conversion insights.",
                icon: PieChart
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
      <section className="py-16 bg-blue-50 border-y border-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "70%", label: "Faster response time to inbound leads" },
              { stat: "3×", label: "Increase in qualified demos" },
              { stat: "40%", label: "Increase in qualified pipeline" },
              { stat: "50k+", label: "Monthly outreach interactions handled" }
            ].map((item, i) => (
              <div key={i} className="">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-slate-600 font-medium uppercase tracking-wide text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - CASE STUDY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Success Story</span>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Case Study: 3× Increase in Qualified Pipeline in 45 Days</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            "A SaaS company needed a scalable inside sales engine. We deployed a team in 7 days, improved follow-up speed from 24 hours to under 60 minutes, and increased qualified demos by 320% in just 45 days."
          </p>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
            <div className="text-6xl text-blue-200 absolute top-8 left-6 font-serif">"</div>
            <blockquote className="relative z-10 text-lg text-slate-800 italic mb-6 pt-2">
              'SaberTechs acted like our in-house SDR team. Our pipeline exploded within weeks.'
            </blockquote>
            <cite className="not-italic font-bold text-slate-900 block">— VP Sales, B2B SaaS Company (Name Confidential)</cite>
          </div>
        </div>
      </section>

      {/* SECTION 6 - HOW IT WORKS */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]">How We Build and Run Your Inside Sales Team</h2>
            <p className="text-[#F1F1F1] text-lg max-w-2xl mx-auto font-normal opacity-100 drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]">
              Our proven onboarding framework launches sales operations in days, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[24px] left-[12.5%] right-[12.5%] h-0.5 bg-slate-700 z-0"></div>

            {[
              {
                step: "1",
                title: "Discovery",
                text: "We analyze leads, CRM setup, ICP, scripts and current funnel performance."
              },
              {
                step: "2",
                title: "Setup & Training",
                text: "We build cadences, scripts, CRM workflows and train your dedicated SDR team."
              },
              {
                step: "3",
                title: "Go-Live",
                text: "Full inside sales operations: inbound qualification, outbound outreach and follow-ups."
              },
              {
                step: "4",
                title: "Optimization",
                text: "Weekly reviews, message testing, funnel optimization and reporting."
              }
            ].map((phase, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-12 h-12 mx-auto bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center text-xl font-bold mb-6 text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.4)] group-hover:bg-primary group-hover:border-primary transition-colors">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]">{phase.title}</h3>
                <p className="text-[#F1F1F1] text-sm leading-relaxed px-2 opacity-100 drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]">{phase.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 font-bold rounded-full px-8 h-12 shadow-lg transition-all hover:-translate-y-0.5">
              Start Your Sales Journey with SaberTechs
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 - INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900">Inside Sales Expertise Across Industries</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "SaaS & Tech",
                text: "Demo scheduling, product qualification and inbound response for software companies.",
                icon: Monitor
              },
              {
                name: "E-commerce & D2C",
                text: "Abandoned cart recovery, reactivation campaigns and upsells.",
                icon: ShoppingBag
              },
              {
                name: "Travel & Hospitality",
                text: "Package inquiries, lead conversion and outbound follow-ups.",
                icon: Plane
              },
              {
                name: "EdTech & Training",
                text: "Student admissions, demo booking and course counseling.",
                icon: GraduationCap
              }
            ].map((industry, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <industry.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-bold text-slate-900">{industry.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{industry.text}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-slate-600">
              Need customer support with your sales team? <Link href="/services/customer-support-cx"><a className="text-primary font-bold hover:underline">Check out our Customer Support & CX solutions.</a></Link>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 - PRICING */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Flexible & Transparent Pricing for SMBs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                name: "Starter",
                idealFor: "Ideal for early-stage sales teams",
                features: ["1–2 SDRs", "Inbound lead qualification", "CRM updates & basic reporting"],
                highlight: false
              },
              {
                name: "Growth",
                idealFor: "Ideal for scaling pipeline",
                features: ["3–10 SDRs", "Outbound + inbound sales support", "Team lead + QA", "Multi-channel outreach (email, calls, LinkedIn)"],
                highlight: true
              },
              {
                name: "Scale",
                idealFor: "Ideal for multi-region and 24/7 coverage",
                features: ["10+ SDRs", "US/UK time-zone coverage", "Custom cadences & playbooks", "Governance, analytics and reporting"],
                highlight: false
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border ${plan.highlight ? 'border-primary ring-2 ring-primary/10 relative' : 'border-slate-200'}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">{plan.name}</h3>
                <p className="text-sm text-slate-500 text-center mb-6 font-medium">{plan.idealFor}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Button variant={plan.highlight ? "default" : "outline"} className={`w-full ${plan.highlight ? "bg-primary hover:bg-blue-700" : "border-slate-300 text-slate-700"}`}>
                    Inquire
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
             <p className="text-slate-500 text-sm mb-4">Pricing is customized by SDR count, markets, languages and coverage hours — transparent, with no hidden fees.</p>
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 font-bold rounded-full px-8">
              Request Custom Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9 - FAQ & CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900">Revenue & Inside Sales Outsourcing FAQs</h2>
          </div>

          <Accordion type="single" collapsible className="w-full mb-20">
            {[
              {
                q: "What is inside sales outsourcing?",
                a: "It's hiring a dedicated external team to handle remote sales activities like lead qualification, appointment setting, and closing deals, integrating seamlessly with your internal processes."
              },
              {
                q: "How fast can you deploy a sales team?",
                a: "We can typically launch a dedicated inside sales team in as little as 7-14 days, fully trained on your product and sales playbook."
              },
              {
                q: "Do you support both outbound and inbound?",
                a: "Yes, we handle both inbound lead qualification/response and proactive outbound prospecting campaigns via email, phone, and social channels."
              },
              {
                q: "Which CRMs do you work with?",
                a: "We are proficient in all major CRMs including HubSpot, Salesforce, Pipedrive, Zoho, and can adapt to your specific tech stack."
              },
              {
                q: "How do you ensure lead quality and qualification?",
                a: "We use proven frameworks like BANT or CHAMP, customized to your ideal customer profile (ICP), ensuring only high-quality, sales-ready leads are passed to your closers."
              },
              {
                q: "Can we scale up or down based on campaigns or seasonality?",
                a: "Absolutely. Our flexible model allows you to easily scale your SDR team up for product launches or busy seasons and adjust as needed."
              },
              {
                q: "Do you support US, UK and other time zones?",
                a: "Yes, we provide coverage across major global time zones including US (EST/PST), UK/Europe (GMT/CET), and APAC to support your international growth."
              },
              {
                q: "How is pricing structured for SDRs?",
                a: "We offer transparent pricing models typically based on monthly dedicated SDR rates or performance-based hybrid models, customized to your specific requirements."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to Build a Scalable Inside Sales Engine?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a tailored sales proposal within 24 hours. No hiring. No overhead. Just predictable pipeline.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-full px-10 h-14 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 mb-6">
            Book a Consultation
          </Button>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-blue-100 text-sm font-medium">
            <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Trusted by growing SaaS, E-commerce, Travel and EdTech brands.</span>
          </div>
        </div>
      </section>

      <StickyCTA />
      <SaberBot />
      
      {/* FOOTER - Identical to Services */}
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
                <li><a href="/services/customer-support-cx" className="hover:text-primary transition-colors">Customer Support</a></li>
                <li><a href="/services/revenue-inside-sales" className="hover:text-primary transition-colors">Sales & Revenue</a></li>
                <li><a href="/services/back-office-operations" className="hover:text-primary transition-colors">Back Office Ops</a></li>
                <li><a href="/services/ai-automation" className="hover:text-primary transition-colors">AI Automation</a></li>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icon for Filter was not imported, let's use Target instead or define it
function Filter(props: any) {
    return <Target {...props} />
}
