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
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { StickyCTA } from "@/components/StickyCTA";

// Reusing the same header/footer structure as Home for consistency
export default function Services() {
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
      {/* HEADER - Sticky & Premium (Identical to Home) */}
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
                  <a className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-primary transition-colors`}>
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
                      <a className="text-lg font-medium text-primary flex-1">Services</a>
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              {/* Illustration Placeholder - Abstract Composition */}
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full opacity-50 blur-2xl"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 mt-12 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-16 bg-slate-100 rounded"></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 mb-12 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-16 bg-slate-100 rounded"></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500 col-span-2 w-3/4 mx-auto">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="h-2 w-32 bg-slate-200 rounded mb-1"></div>
                        <div className="h-2 w-20 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                title: "Customer Support & CX",
                description: "Multichannel chat, email, and voice support from trained CX specialists. We handle inquiries, complaints, and tickets with defined SLAs and daily reporting.",
                icon: MessageSquare,
              },
              {
                title: "Revenue & Inside Sales",
                description: "Lead qualification, demo scheduling, renewals and win-back campaigns. We help your sales team focus on closing while we handle outreach and follow-ups.",
                icon: BadgeDollarSign,
              },
              {
                title: "Back Office Operations",
                description: "Data entry, catalog updates, refunds, order processing and CRM hygiene. We quietly run the processes that keep your business moving.",
                icon: Database,
              },
              {
                title: "QA & Compliance",
                description: "Call and chat QA, process compliance checks, mystery audits and retail evaluations. We ensure your customer interactions and operations stay on-standard.",
                icon: ShieldCheck,
              },
              {
                title: "AI Automation",
                description: "Chatbots, workflows, routing rules and automated responses built using leading tools. We combine automation with human support so you get speed and reliability.",
                icon: Bot,
              },
              {
                title: "Gig Workforce On-Demand",
                description: "Flexible hourly or project-based staffing for CX, audits, proctoring and back-office spikes. Ideal for seasonal peaks, launches and one-off projects.",
                icon: Users,
              }
            ].map((service, index) => (
              <div key={index} className="group flex flex-col bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
      <section className="py-24 bg-slate-50/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
               <div key={i} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                 <div className="mb-4 text-primary">
                   <feature.icon className="w-8 h-8" />
                 </div>
                 <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">{feature.title}</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR ENGAGEMENT MODEL */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Need a Custom Support or Ops Team?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Share your requirements and we’ll send a tailored proposal within 24 hours.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-full px-10 h-14 text-lg shadow-xl">
            Talk to an Expert <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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
