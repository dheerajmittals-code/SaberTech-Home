import { Header } from "@/components/Header";
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
  Layers,
  Clock,
  MapPin,
  Briefcase,
  UserCheck,
  ClipboardCheck,
  Building,
  Network,
  Stethoscope,
  Truck,
  Building2
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

import heroImage from "@assets/generated_images/gig_workforce_on-demand_illustration.png";

export default function GigWorkforce() {

  useEffect(() => {
    document.title = "Gig Workforce & On-Demand Staffing in India | SaberTechs";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Build an on-demand gig workforce with SaberTechs. Flexible staffing for CX, audits, proctoring and back-office operations across India. Pre-vetted gig workers, fast deployment and full governance.");
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
      <Header />

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
              Build an On-Demand Gig Workforce for CX, Audits & Ops
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Flexible hourly or project-based staffing for customer support, audits, proctoring, data operations and field tasks — managed end-to-end by SaberTechs.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Talk to a Staffing Expert
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-lg px-8 h-14 text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                See Pricing & Plans
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-sm text-slate-500 my-4 font-medium">
              Pre-vetted talent · Fast deployment · Coverage across India
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500 items-center justify-center lg:justify-start">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 2,000+ gig workers in our network</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> CX, audits, proctoring & operations</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Pan-India coverage</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Managed teams with SLAs</span>
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
                alt="Gig Workforce On-Demand" 
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
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">Scale Your Team Only When You Need To</h2>
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
                  "Unpredictable volumes but fixed headcount",
                  "Peak seasons and campaigns needing extra staff",
                  "Hard to hire locally in every city",
                  "Freelancers without vetting or governance",
                  "High cost of full-time staff for short projects"
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
                  "Pre-vetted gig workforce ready for CX, audits, proctoring and ops",
                  "Scale by hours, days or full projects",
                  "Pan-India staffing coverage",
                  "Centralized governance, SLAs and reporting",
                  "We handle sourcing, training, scheduling and payouts"
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
              Get a Flexible Staffing Plan
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3 - USE CASES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Where Our Gig Workforce Fits Best</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Support Surges",
                text: "Add temporary agents for seasonal spikes and campaigns.",
                icon: Headphones
              },
              {
                title: "Retail & Mystery Audits",
                text: "On-ground auditors for store compliance, branding and SOP checks.",
                icon: ShoppingBag
              },
              {
                title: "Exam Proctoring & Invigilation",
                text: "Online and offline proctors for assessments and exams.",
                icon: GraduationCap
              },
              {
                title: "Data & Back-Office Projects",
                text: "Short-term teams for cataloging, tagging, data cleanup and entry.",
                icon: Database
              },
              {
                title: "Field & Verification Tasks",
                text: "Simple visit-based tasks, surveys and document checks.",
                icon: MapPin
              },
              {
                title: "Pilot Projects & New Markets",
                text: "Test new regions or programs without full-time hiring.",
                icon: Rocket
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

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-center">
            <Link href="/services/customer-support-cx">
              <a className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors">
                Need full-time managed teams? Explore Customer Support & CX <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/services/back-office-operations">
              <a className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors">
                Explore Back Office Ops <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 - GIG MODEL EXPLAINER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">How Our Gig Workforce Model Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "We Source & Vet Talent",
                text: "We screen gig workers based on location, skill, language and process requirements.",
                icon: Search
              },
              {
                title: "We Train & Schedule",
                text: "We handle training, evaluations, shift planning and project scheduling.",
                icon: Calendar
              },
              {
                title: "We Manage Delivery",
                text: "You get SLA governance, reporting, attendance tracking and single-point communication.",
                icon: Briefcase
              }
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 5 - METRICS STRIP */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "2,000+", label: "Gig workers in our network" },
              { number: "100+", label: "Cities covered across India" },
              { number: "72 hours", label: "Typical deployment time" },
              { number: "95%+", label: "Retention on long-term gig programs" }
            ].map((metric, i) => (
              <div key={i} className="text-center group">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{metric.number}</h3>
                <p className="text-slate-300 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - CASE STUDY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-slate-50 rounded-[32px] overflow-hidden shadow-xl border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6 w-fit">
                  Success Story
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">
                  Case Study: Scaling Proctoring Capacity for National Exams
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  An EdTech company needed large-scale exam proctoring across India. SaberTechs onboarded and managed gig workers nationwide, ensured compliance with client SOPs, enabled real-time reporting, and executed thousands of exam sessions flawlessly.
                </p>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
                  <div className="text-4xl text-primary absolute -top-4 -left-2 font-serif">“</div>
                  <p className="text-slate-800 italic mb-4 relative z-10">
                    SaberTechs became our execution engine. Their gig workforce solved problems we could not solve internally.
                  </p>
                  <div className="font-bold text-slate-900">— Director of Operations, EdTech Company</div>
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-full bg-slate-200">
                <div className="absolute inset-0 bg-slate-900/10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80" 
                  alt="Gig Workforce Success" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-transparent lg:bg-gradient-to-t"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - DEPLOYMENT PROCESS */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">How We Deploy Your Gig Workforce</h2>
            <p className="text-xl text-slate-300 font-light">
              A fast and flexible deployment model built for scale.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Scope & Role Definition",
                  icon: Target
                },
                {
                  step: "02",
                  title: "Sourcing & Vetting",
                  icon: UserCheck
                },
                {
                  step: "03",
                  title: "Training & Go-Live",
                  icon: Rocket
                },
                {
                  step: "04",
                  title: "Governance & Performance",
                  icon: ClipboardCheck
                }
              ].map((item, i) => (
                <div key={i} className="relative z-10 group">
                  <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:bg-slate-700/80 transition-all duration-300 h-full flex flex-col items-center text-center hover:-translate-y-2 shadow-2xl">
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-bold mb-6 border border-primary/20 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Step {item.step}</div>
                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button size="lg" className="bg-primary hover:bg-blue-600 text-white font-bold rounded-full px-10 h-14 text-lg shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all">
                Share Your Gig Requirement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - PRICING */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Flexible Engagement Models for Gig Teams</h2>
            <p className="text-lg text-slate-600">We recommend the best model based on your goals, volumes and geography.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Hourly */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Hourly / Shift-Based</h3>
              <p className="text-slate-500 mb-6 flex-1">Best for CX, proctoring, supervision and operations roles.</p>
              <Button variant="outline" className="w-full border-slate-300">Inquire</Button>
            </div>

            {/* Per-Task */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Per-Task / Per-Audit</h3>
              <p className="text-slate-500 mb-6 flex-1">Ideal for retail checks, surveys, and on-ground verification tasks.</p>
              <Button variant="outline" className="w-full border-slate-300">Inquire</Button>
            </div>

            {/* Project-Based */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Project-Based</h3>
              <p className="text-slate-500 mb-6 flex-1">Great for one-time catalog, tagging or cleanup projects.</p>
              <Button variant="outline" className="w-full border-slate-300">Inquire</Button>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-8 rounded-full">Request a Custom Gig Proposal</Button>
          </div>
        </div>
      </section>

      {/* SECTION 9 - FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Gig Workforce Outsourcing FAQs</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What roles can your gig workforce cover?",
                a: "Our gig network covers a wide range of roles including customer support agents, exam proctors, field auditors, data entry specialists, content moderators, and on-ground verification staff."
              },
              {
                q: "How do you vet gig workers?",
                a: "We have a rigorous vetting process that includes ID verification, background checks (where applicable), skill assessments, language proficiency tests, and interview rounds to ensure reliability and quality."
              },
              {
                q: "How fast can you deploy a team?",
                a: "For standard roles, we can typically deploy a team within 72 hours. Larger or more specialized requirements may take 5-7 days for sourcing and training."
              },
              {
                q: "Which cities do you cover?",
                a: "We have a pan-India presence, covering over 100+ cities including all metros (Tier 1) and major Tier 2/3 cities, allowing for extensive field coverage."
              },
              {
                q: "Who manages training and governance?",
                a: "SaberTechs manages the end-to-end process. We handle the training based on your SOPs and provide ongoing governance, performance monitoring, and SLA management."
              },
              {
                q: "How do you ensure quality with gig workers?",
                a: "We use a combination of automated tracking, real-time supervision, regular QA audits, and performance-based incentives to maintain high quality standards across our gig workforce."
              },
              {
                q: "Can I start with a small pilot?",
                a: "Yes, we highly encourage starting with a pilot project to validate the model and performance before scaling up to a larger deployment."
              },
              {
                q: "Do you support exam-day or weekend-only deployment?",
                a: "Absolutely. Our model is built for flexibility, so we can support specific exam days, weekend spikes, or any other time-bound requirements you have."
              },
              {
                q: "How is pricing structured?",
                a: "Pricing is flexible based on the role and engagement model. We offer hourly rates, per-task/per-audit pricing, or fixed project fees depending on what works best for your objectives."
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Build Your On-Demand Workforce?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Get a flexible staffing plan tailored to your volume, timelines and locations.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-full px-12 h-16 text-xl shadow-xl transition-transform hover:scale-105">
              Talk to a Staffing Expert
            </Button>
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
                <li><Link href="/services/customer-support-cx" className="hover:text-primary transition-colors">Customer Support & CX</Link></li>
                <li><Link href="/services/revenue-inside-sales" className="hover:text-primary transition-colors">Revenue & Inside Sales</Link></li>
                <li><Link href="/services/back-office-operations" className="hover:text-primary transition-colors">Back Office Operations</Link></li>
                <li><Link href="/services/qa-compliance" className="hover:text-primary transition-colors">QA & Compliance</Link></li>
                <li><Link href="/services/ai-automation" className="hover:text-primary transition-colors">AI Automation</Link></li>
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
    </div>
  );
}