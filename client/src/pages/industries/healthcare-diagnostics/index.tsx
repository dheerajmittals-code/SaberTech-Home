import { Header } from "@/components/Header";
import { SaberBot } from "@/components/SaberBot";
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
  Menu,
  X,
  ChevronDown,
  Globe,
  Truck,
  Building2,
  Stethoscope,
  Network,
  CalendarCheck,
  FileX,
  RefreshCcw,
  AlertCircle,
  TrendingUp,
  Headphones,
  FileText,
  UserCheck,
  BarChart,
  MessageCircle,
  Link as LinkIcon,
  Phone,
  Signal,
  MapPin,
  ClipboardCheck,
  Activity,
  HeartPulse,
  Pill
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/isometric_contact_center_illustration.png";

export default function HealthcareDiagnostics() {

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
      <section className="relative bg-slate-50 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 z-0"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-10 md:px-10 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="w-full lg:basis-[50%] lg:w-[50%] text-center lg:text-left mt-8 lg:mt-0"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-700 text-xs font-medium mb-4 mx-auto lg:mx-0 border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Industries · Healthcare & Diagnostics
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-4"
              variants={fadeIn}
            >
              Reliable Support for <span className="text-primary">Healthcare & Diagnostics</span>
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              We help clinics, hospitals, and diagnostic labs manage patient communication, appointment coordination, report follow-ups and documentation support—using calm, accurate and process-driven operations.
            </motion.h3>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
              {[
                { label: "Appointments", desc: "scheduling" },
                { label: "Reports", desc: "follow-up" },
                { label: "Insurance", desc: "documentation" },
                { label: "Back office", desc: "processing" }
              ].map((item, i) => (
                <div key={i} className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs text-slate-600 shadow-sm flex items-center gap-1">
                  <span className="font-semibold text-green-600">{item.label}</span>
                  <span>{item.desc}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
              variants={fadeIn}
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  Discuss Your Requirement
                </Button>
              </Link>
              <Link href="/industries">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold rounded-lg px-8 h-14 text-lg">
                  Back to Industries
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:basis-[50%] lg:w-[50%] relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-100/50 border border-slate-100 bg-white">
              <img 
                src={heroImage} 
                alt="Healthcare & Diagnostics Support" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Common Challenges in Healthcare Operations</h2>
            <p className="text-lg text-slate-600">
              Healthcare support needs accuracy and empathy. We build stable workflows that reduce missed appointments and follow-up gaps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { 
                 label: "Coordination",
                 title: "Scheduling Complexity", 
                 desc: "Doctor availability, test slots, reschedules and reminders need discipline.", 
                 icon: CalendarCheck 
               },
               { 
                 label: "Follow-up",
                 title: "Reports & Status Calls", 
                 desc: "Patients want quick updates; delays create dissatisfaction and escalations.", 
                 icon: Activity 
               },
               { 
                 label: "Documentation",
                 title: "Insurance / Paperwork", 
                 desc: "Basic paperwork support reduces burden on clinical staff and front desk teams.", 
                 icon: FileText 
               }
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                 <div className="text-[11px] uppercase tracking-wider font-semibold text-green-600 mb-2">{item.label}</div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-slate-600 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">How We Support Healthcare & Diagnostics</h2>
            <p className="text-lg text-slate-600">
              Pick a focused scope (appointments, reports, documentation) or run a complete patient support desk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { 
                 label: "Support",
                 title: "Patient Support Desk", 
                 desc: "Inbound queries via phone/email/WhatsApp with clear SOPs and escalation.", 
                 pills: ["Voice / Email", "Empathy scripts", "Daily reporting"],
                 icon: HeartPulse 
               },
               { 
                 label: "Scheduling",
                 title: "Appointment Booking", 
                 desc: "Bookings, reschedules, reminders and coordination with facility staff.", 
                 pills: ["Reduced no-shows", "TAT focused", "Queue control"],
                 icon: CalendarCheck 
               },
               { 
                 label: "Follow-up",
                 title: "Report Follow-ups", 
                 desc: "Status updates, report readiness communication and next steps coordination.", 
                 pills: ["Status tracking", "Exception handling", "Escalation logic"],
                 icon: Pill 
               },
               {
                 label: "Back Office",
                 title: "Data & Back Office Ops",
                 desc: "Updating records, tagging cases, reconciliation prep, and process checks.",
                 pills: ["Accuracy checks", "Audit trail", "SOP-driven"],
                 icon: Database
               },
               {
                 label: "Documentation",
                 title: "Insurance Documentation",
                 desc: "Basic support in collecting documents and guiding patients on required steps.",
                 pills: ["Checklist based", "TAT tracking", "Clean handoff"],
                 icon: ClipboardCheck
               },
               {
                 label: "Quality",
                 title: "QA & Process Audits",
                 desc: "Sampling audits and coaching insights to keep communication consistent.",
                 pills: ["Sampling QA", "Scorecards", "Process improvement"],
                 icon: Check
               }
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                 <div className="text-[11px] uppercase tracking-wider font-semibold text-green-600 mb-2">{item.label}</div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-slate-600 mb-4">{item.desc}</p>
                 <div className="flex flex-wrap gap-2">
                   {item.pills.map((pill, idx) => (
                     <span key={idx} className="text-[11px] px-2 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600">
                       {pill}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - USE CASES & ENGAGEMENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Typical Use Cases</h2>
              <p className="text-lg text-slate-600 mb-8">Where healthcare and diagnostic teams see quick improvements in experience and operations.</p>
              
              <div className="grid gap-6">
                {[
                  {
                    title: "Diagnostic Labs",
                    points: [
                      "Appointment bookings and home-collection coordination.",
                      "Report readiness follow-ups and patient communication.",
                      "Escalation handling for delays and exceptions."
                    ]
                  },
                  {
                    title: "Clinics & Hospitals",
                    points: [
                      "Inbound helpline for patient queries and scheduling.",
                      "Reminder calls to reduce no-shows.",
                      "Basic documentation and process support for front desk teams."
                    ]
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-700">
                          <span className="text-green-600 font-bold">•</span>
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Engagement Models</h2>
              <p className="text-lg text-slate-600 mb-8">Start small and scale. Keep it simple, measurable and stable.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Dedicated Support Team", desc: "A fixed team managing scheduling and patient calls." },
                  { title: "Back Office Queue", desc: "Process-based team for reports and documentation." },
                  { title: "Hybrid Desk", desc: "Combined support for front-desk coordination and queries." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border border-dashed border-slate-300 p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">Want a Calm, Reliable Patient Support Desk?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Share your daily call volume, operating hours and key workflows (appointments, reports, documentation). We’ll suggest a simple pilot plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-blue-600 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
                  Contact Our Team
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="bg-white border-slate-200 text-primary hover:bg-slate-50 rounded-full px-8 h-12 text-base">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SaberBot />
      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 SaberTechs Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
