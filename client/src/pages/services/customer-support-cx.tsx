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
  ChevronDown,
  Search,
  Headphones,
  BarChart3,
  Globe,
  Settings,
  HelpCircle
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

import heroImage from "@assets/generated_images/isometric_customer_support_team_illustration_with_soft_edges.png";

import { SaberBot } from "@/components/SaberBot";

export default function CustomerSupportCX() {
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

              <a href="#" className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
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

                <a href="#" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Why Us</a>
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
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-4 max-w-[540px] mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Customer Support & <span className="text-primary">CX</span> That Your Customers Can Rely On
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Run your customer support from India with 24x7 multichannel contact center teams. We handle inbound queries, complaints, account support and post-sale issues across voice, email, chat and WhatsApp – with strong QA and daily reporting.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Talk to CX Specialist
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-lg px-8 h-14 text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                Get Support Proposal
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-sm text-slate-500 my-4 font-medium">
              No long-term contracts · Flexible plans · Fast onboarding
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500 items-center justify-center lg:justify-start">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 24x7 coverage across time zones</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Multichannel voice · email · chat</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> CSAT focused processes & QA</span>
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
                alt="Customer Support Team" 
                className="w-full h-auto object-cover mix-blend-multiply"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-dashed border-primary/20 rounded-[24px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - CAPABILITIES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">Multichannel Customer Support</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600">
              We plug into your existing tools or help you set them up – running inbound and outbound customer contact programs with clear SLAs and simple, transparent reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inbound & Outbound Calls",
                label: "Voice",
                text: "Customer queries, order status, complaints, call-backs and feedback calls handled by trained agents.",
                pills: ["Inbound support", "Callbacks", "Complaint handling", "Retention calls"],
                icon: Headphones
              },
              {
                title: "Email Support & Ticketing",
                label: "Email",
                text: "Structured responses, templates and SLAs for support inboxes, escalations and back-office resolution.",
                pills: ["Ticket handling", "SLA tracking", "Templates", "Escalation support"],
                icon: MessageSquare
              },
              {
                title: "Chat & WhatsApp Support",
                label: "Chat · Messaging",
                text: "Real-time support across website chat and WhatsApp for pre-sale questions and post-sale service.",
                pills: ["Web chat", "WhatsApp", "Basic bot + agent", "Instant responses"],
                icon: MessageSquare
              },
              {
                title: "Social Media Response",
                label: "Social",
                text: "Handling customer queries, complaints and mentions on platforms like X, Facebook and Instagram.",
                pills: ["DM responses", "Post comments", "Escalation routing"],
                icon: Facebook
              },
              {
                title: "L1 Troubleshooting",
                label: "Tech Support",
                text: "First-line product and basic technical support with clear scripts and knowledge base integration.",
                pills: ["How-to support", "Simple troubleshooting", "Ticket routing"],
                icon: Settings
              },
              {
                title: "NPS & CSAT Programs",
                label: "CX Programs",
                text: "Outbound surveys and follow-ups to track customer satisfaction and recover unhappy customers.",
                pills: ["CSAT surveys", "NPS calls", "Win-back offers"],
                icon: BarChart3
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{feature.label}</div>
                    <h3 className="text-xl font-heading font-bold text-slate-900">{feature.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{feature.text}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.pills.map((pill, j) => (
                    <span key={j} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-100">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - USE CASES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Customer Support Use Cases</h2>
            <p className="text-lg text-slate-600">
              Whether you are a startup or an established enterprise, we run focused support programs that match your business model and growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Order, Booking & Service Support</h3>
              <ul className="space-y-4">
                {[
                  "Order status updates, reschedules and delivery issues.",
                  "Hotel & travel bookings, date changes and cancellations.",
                  "Appointment confirmation and reminders for healthcare.",
                  "Service request creation and progress updates."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Account, Policy & Subscription Support</h3>
              <ul className="space-y-4">
                {[
                  "Account creation assistance and login issues.",
                  "Policy information, renewal reminders and changes.",
                  "Subscription upgrades, downgrades and cancellations.",
                  "Billing doubts and payment confirmations."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - DELIVERY MODEL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">How We Deliver Customer Support</h2>
            <p className="text-lg text-slate-600">
              A simple, predictable operating model so that you can focus on your product while we handle volumes, training and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Delivery Model
              </h3>
              <ul className="space-y-4">
                {[
                  "India-based contact center teams trained on your brand playbook.",
                  "24x7, business-hours or split shift coverage depending on region.",
                  "Dedicated, shared or hybrid team structures as per budget.",
                  "We can plug into your tools (Freshdesk, Zendesk, Zoho, etc.) or help set them up."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                Quality & Reporting
              </h3>
              <ul className="space-y-4">
                {[
                  "QA scorecards customized to your processes and tone of voice.",
                  "Call and ticket audits with coaching inputs for agents.",
                  "Daily and weekly reports with volumes, SLAs and key reasons for contact.",
                  "Simple dashboards highlighting trends and improvement areas."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - INDUSTRIES */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Industries We Support</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-12">
            Our teams are trained for both domestic and international support across multiple verticals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "E-commerce & D2C",
              "Travel & Hospitality",
              "Telecom & Internet",
              "Healthcare & Diagnostics",
              "BFSI & Fintech",
              "EdTech",
              "SaaS & Software",
              "Logistics & Last-mile"
            ].map((industry, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-200 font-medium hover:bg-primary hover:border-primary hover:text-white transition-all cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Customer Support – FAQs</h2>
            <p className="text-lg text-slate-600">
              A few quick answers. We are happy to walk you through the model in more detail over a short call.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the minimum team size I can start with?",
                a: "Many clients start with 2–5 agents and then ramp up after the first few weeks. We can support very small pilots as well as larger teams."
              },
              {
                q: "Can you support both India and international customers?",
                a: "Yes. We support domestic calls as well as international regions, depending on language, time-zone and compliance requirements."
              },
              {
                q: "How do you charge for customer support services?",
                a: "The commercial model can be per FTE (full-time equivalent), per hour or a structured package for shared teams. It depends on volumes, complexity and coverage hours."
              },
              {
                q: "Can you integrate with our existing tools?",
                a: "In most cases, yes. We work with popular CRMs and helpdesk tools like Freshdesk, Zendesk, Zoho, HubSpot and custom systems using your access and SOPs."
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

      {/* SECTION 7 - FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Planning to Outsource Customer Support?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Share a brief about your support volumes, languages and channels. We’ll respond with a simple proposal – team structure, coverage, commercials and next steps.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-full px-12 h-16 text-xl shadow-xl transition-transform hover:scale-105">
              Email Your Requirement
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold rounded-full px-12 h-16 text-xl shadow-xl transition-transform hover:scale-105">
              Chat on WhatsApp
            </Button>
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