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
  Filter,
  TrendingUp,
  Share2,
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
import { SaberBot } from "@/components/SaberBot";

import heroImage from "@assets/generated_images/isometric_inside_sales_team_illustration_with_crm_dashboards.png";

export default function RevenueInsideSales() {
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
              Revenue & <span className="text-primary">Inside Sales</span> Teams That Sell Every Day
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Build an India-based inside sales engine that generates qualified opportunities, books demos, runs upsell & cross-sell campaigns and recovers churned customers – with clear targets and daily reporting.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Talk to Sales Lead
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-lg px-8 h-14 text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                Get Inside Sales Plan
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-sm text-slate-500 my-4 font-medium">
              No long-term contracts · Flexible plans · Fast onboarding
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500 items-center justify-center lg:justify-start">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Outbound sales & pipeline building</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Qualified meetings for your team</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Win-back & upsell programs</span>
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
                alt="Inside Sales Team" 
                className="w-full h-auto object-cover mix-blend-multiply"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-dashed border-primary/20 rounded-[24px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - CORE PROGRAMS GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">Core Revenue & Inside Sales Programs</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600">
              We design calling and outreach programs around your ideal customer profile, product, ticket size and markets. You choose the programs that match your current growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lead Generation & Cold Calling",
                label: "Top of Funnel",
                text: "Structured outbound calls to new prospects with simple, clear scripts focused on generating interest and capturing basic qualification data.",
                pills: ["List calling", "Event follow-ups", "Campaign follow-through"],
                icon: Phone
              },
              {
                title: "Lead Qualification Calls",
                label: "Qualification",
                text: "We qualify inbound and marketing-generated leads based on your BANT or custom framework and only pass warm opportunities to your closers.",
                pills: ["Inbound lead follow-up", "BANT-style qualification", "Handoff to AEs"],
                icon: Filter
              },
              {
                title: "Demo & Appointment Setting",
                label: "Meetings",
                text: "Inside sales reps who focus on booking demos, discovery calls and product walkthroughs for your founders or sales team.",
                pills: ["Calendar booking", "No-show follow-up", "Reschedules"],
                icon: Calendar
              },
              {
                title: "Upsell & Cross-Sell Campaigns",
                label: "Expansion",
                text: "Calling campaigns to existing customers to move them to higher plans, add-on services or repeat purchases.",
                pills: ["Plan upgrades", "Add-on sales", "Repeat purchase nudges"],
                icon: TrendingUp
              },
              {
                title: "Win-Back & Churn Recovery",
                label: "Retention",
                text: "Structured outreach to lapsed customers or cancelled subscribers with offers and conversations to bring them back.",
                pills: ["Lapsed customers", "Churn reasons", "Win-back offers"],
                icon: RefreshCw
              },
              {
                title: "Channel & Partner Development",
                label: "Channels",
                text: "Outreach and nurturing of distributors, resellers and partners to keep your channel active and productive.",
                pills: ["Partner onboarding", "Partner activation", "Performance check-ins"],
                icon: Share2
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
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">B2B & B2C Sales Use Cases</h2>
            <p className="text-lg text-slate-600">
              Our inside sales teams work for both B2B and B2C businesses. We adapt scripts, objection handling and follow-up frequency to your market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">B2B Inside Sales</h3>
              <ul className="space-y-4">
                {[
                  "Cold calling decision makers in target industries and geographies.",
                  "Following up on marketing leads from events, webinars and downloads.",
                  "Booking demos for founders, AEs and solution consultants.",
                  "Reactivating old customers or dormant accounts."
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
              <h3 className="text-xl font-bold text-slate-900 mb-6">B2C Revenue Programs</h3>
              <ul className="space-y-4">
                {[
                  "Lead follow-up for education, finance, healthcare and real estate.",
                  "Plan upgrades for telecom, OTT, fintech and SaaS subscriptions.",
                  "Payment reminders, renewals and limited-period offers.",
                  "Win-back campaigns for cancelled or inactive users."
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
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">How We Run Your Inside Sales Engine</h2>
            <p className="text-lg text-slate-600">
              A disciplined operating rhythm that keeps your pipeline active while giving you full visibility into what’s happening every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-primary" />
                Operating Model
              </h3>
              <ul className="space-y-4">
                {[
                  "Dedicated or shared inside sales reps aligned to your product line or region.",
                  "Sales playbook and calling scripts created jointly with your team.",
                  "Dialer and CRM integration using your tools or our stack.",
                  "Simple daily targets – attempts, connects, qualified leads, meetings booked."
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
                Reporting & Metrics
              </h3>
              <ul className="space-y-4">
                {[
                  "Daily and weekly reports with attempts, connects, qualified leads and meetings.",
                  "Reason codes for 'no interest', 'call later' and 'wrong contact'.",
                  "Pipeline snapshot from first touch to meeting / proposal stage.",
                  "Recordings and talk tracks for coaching and script improvements."
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
          <h2 className="text-3xl font-heading font-bold mb-6">Who Uses Our Inside Sales Teams</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-12">
            We work with startups, scale-ups and established businesses that need a flexible sales engine without building a large in-house team.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "SaaS & Software",
              "EdTech & Training",
              "Fintech & NBFCs",
              "Real Estate & Housing",
              "Healthcare & Diagnostics",
              "Telecom & ISP",
              "D2C & E-commerce",
              "B2B Services & Agencies"
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
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Revenue & Inside Sales – FAQs</h2>
            <p className="text-lg text-slate-600">
              Some common questions clients ask before starting. We can walk you through sample reports and call flows on a quick call.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Do you only do cold calling or also handle inbound leads?",
                a: "We do both. Many clients start with inbound and warm lead follow-up, and then add structured cold calling once scripts and ICP are clear."
              },
              {
                q: "Can you book meetings directly on our calendars?",
                a: "Yes. We typically integrate with Google Calendar, Outlook or your scheduling tool so that reps can book demos and discovery calls for your team."
              },
              {
                q: "How do you charge for inside sales services?",
                a: "Pricing can be per FTE, per hour or outcome-linked (for example – per qualified meeting). The model depends on your volumes, markets and complexity."
              },
              {
                q: "Can we start small and scale if it works?",
                a: "Yes. You can start with a small pod (for example, 1–3 reps) as a pilot and then scale up in phases as the process proves itself."
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Want to Add an Inside Sales Engine?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Share a brief about your product, target market and current sales process. We’ll come back with a simple inside sales plan – team size, scope, KPIs and commercials.
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

// Icon for Filter was not imported, let's use Target instead or define it
