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
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  HelpCircle,
  Briefcase,
  Globe,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SaberBot } from "@/components/SaberBot";

import heroImage from "@assets/generated_images/isometric_contact_center_illustration.png";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | SaberTechs – Talk to Our Team";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact SaberTechs for customer support outsourcing, inside sales, back office operations, QA & compliance, AI automation and gig workforce in India. Share your requirement and our team will respond with a simple plan.");
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    const name = encodeURIComponent(formData.get("name") as string || "");
    const company = encodeURIComponent(formData.get("company") as string || "");
    const email = encodeURIComponent(formData.get("email") as string || "");
    const phone = encodeURIComponent(formData.get("phone") as string || "");
    const service = encodeURIComponent(formData.get("service") as string || "");
    const region = encodeURIComponent(formData.get("region") as string || "");
    const volumes = encodeURIComponent(formData.get("volumes") as string || "");
    const requirement = encodeURIComponent(formData.get("requirement") as string || "");
    const contactPreference = encodeURIComponent(formData.get("contact_preference") as string || "");
    const time = encodeURIComponent(formData.get("time") as string || "");

    const subject = `New Inquiry from ${decodeURIComponent(name)}`;
    const body = `Name: ${decodeURIComponent(name)}%0D%0ACompany: ${decodeURIComponent(company)}%0D%0AEmail: ${decodeURIComponent(email)}%0D%0APhone: ${decodeURIComponent(phone)}%0D%0AService: ${decodeURIComponent(service)}%0D%0ARegion: ${decodeURIComponent(region)}%0D%0AVolumes: ${decodeURIComponent(volumes)}%0D%0ARequirement: ${decodeURIComponent(requirement)}%0D%0APreference: ${decodeURIComponent(contactPreference)}%0D%0ATime: ${decodeURIComponent(time)}`;

    window.location.href = `mailto:info@sabertechs.com?subject=${subject}&body=${body}`;
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const phone = "919999999999"; // Placeholder
    const text = encodeURIComponent("Hi, I’d like to discuss outsourcing / gig / operations with your team.");
    window.open("https://wa.me/" + phone + "?text=" + text, "_blank");
  };

  const openContactEmail = () => {
    window.location.href = "mailto:info@sabertechs.com?subject=Contact%20SaberTechs&body=Hi%20Team,%0D%0A%0D%0AWe%20would%20like%20to%20discuss%20a%20requirement.%20Here%20are%20some%20quick%20details:%0D%0A%0D%0A-%20Industry%3A%0D%0A-%20Type%20of%20work%20%28support%2Fsales%2Fback%20office%2FQA%2Fautomation%2Fgig%29%3A%0D%0A-%20Approx.%20volumes%20per%20day%2Fmonth%3A%0D%0A-%20Regions%20%2F%20time%20zones%3A%0D%0A%0D%0ARegards,%0D%0A";
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* HEADER - Sticky & Premium */}
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
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Contact · SaberTechs
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-4 max-w-[540px] mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Let’s Talk About <span className="text-primary">Work You Want to Get Done</span>
            </motion.h1>
            <motion.h3 
              className="text-xl text-slate-600 mb-0 leading-relaxed font-light max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Whether you’re looking for customer support, inside sales, back office operations, QA, AI automation or gig workforce in India, share a few details and we’ll respond with a simple, practical plan.
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start"
              variants={fadeIn}
            >
               {[
                 { label: "Business enquiries – India & global" },
                 { label: "Response time – usually within 1 business day" },
                 { label: "Engagements – pilots, projects & long-term teams" }
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
              <Button size="lg" onClick={scrollToForm} className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Share Your Requirement
              </Button>
              <Button variant="outline" size="lg" onClick={openWhatsApp} className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-lg px-8 h-14 text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                Chat on WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:basis-[55%] lg:w-[55%] relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-100/50 border border-slate-100 bg-white transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
                src={heroImage} 
                alt="Global Communication Illustration" 
                className="w-full h-auto object-cover"
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
                    <Clock size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Response Time</div>
                    <div className="text-sm font-bold text-slate-800">Under 24 Hours</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative background blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - CONTACT OPTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">How Would You Like to Connect?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Pick what fits you best. A short email with a few lines about your requirement is often the fastest way to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Business Enquiries */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Business, Projects & Partnerships</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                For customer support, revenue & inside sales, back office operations, QA & compliance, AI automation and gig workforce requirements.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {["India & International", "Pilots & Projects", "Long-term teams"].map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="font-semibold text-slate-700">Email:</span>
                  <a href="mailto:info@sabertechs.com" className="text-blue-600 hover:underline">info@sabertechs.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span className="font-semibold text-slate-700">WhatsApp:</span>
                  <a href="https://wa.me/919999999999" target="_blank" className="text-blue-600 hover:underline">+91-99999-99999</a>
                </div>
              </div>
            </div>

            {/* Careers */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Careers & Gig Workforce</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                For people who want to work with us full-time or as a gig worker (proctors, field work, calling, audits and more).
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {["Freelance proctors", "Gig workers", "Full-time roles"].map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="font-semibold text-slate-700">Email:</span>
                  <a href="mailto:careers@sabertechs.com" className="text-blue-600 hover:underline">careers@sabertechs.com</a>
                </div>
                <div className="flex items-center gap-3 text-slate-500 italic ml-7">
                  Mention your city, experience and what kind of work you’re looking for.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - FORM */}
      <section className="py-20 bg-slate-50" id="contact-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Tell Us What You Need Help With</h2>
            <p className="text-lg text-slate-600">
              A short form so that we understand your context before we speak. You don’t have to fill everything – just what you know today.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-4xl mx-auto p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" placeholder="Full name" required className="bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organisation</Label>
                  <Input id="company" name="company" placeholder="Company or project name" className="bg-slate-50" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required className="bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91..." className="bg-slate-50" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service">What are you interested in?</Label>
                  <Select name="service">
                    <SelectTrigger className="bg-slate-50">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Customer Support & CX">Customer Support & CX</SelectItem>
                      <SelectItem value="Revenue & Inside Sales">Revenue & Inside Sales</SelectItem>
                      <SelectItem value="Back Office Operations">Back Office Operations</SelectItem>
                      <SelectItem value="QA & Compliance">QA & Compliance</SelectItem>
                      <SelectItem value="AI Automation">AI Automation</SelectItem>
                      <SelectItem value="Gig Workforce">Gig Workforce</SelectItem>
                      <SelectItem value="Multiple services / Not sure">Multiple services / Not sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="region">Region / Market</Label>
                  <Select name="region">
                    <SelectTrigger className="bg-slate-50">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="USA / North America">USA / North America</SelectItem>
                      <SelectItem value="UK / Europe">UK / Europe</SelectItem>
                      <SelectItem value="Middle East">Middle East</SelectItem>
                      <SelectItem value="Other / Multiple">Other / Multiple</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="volumes">Approximate Volumes (if known)</Label>
                <Input id="volumes" name="volumes" placeholder="e.g. 2,000 calls/month, 5 agents, 300 orders/day" className="bg-slate-50" />
                <p className="text-xs text-slate-500">Share any rough idea. We’ll refine it together.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirement">Tell us a bit about your requirement</Label>
                <Textarea 
                  id="requirement" 
                  name="requirement" 
                  placeholder="Example: We are looking for a small team to handle customer support for our D2C brand in India and the US. We currently get 200–300 tickets per day across chat, email and calls." 
                  className="min-h-[120px] bg-slate-50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact_preference">How should we contact you?</Label>
                  <Select name="contact_preference">
                    <SelectTrigger className="bg-slate-50">
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Email only">Email only</SelectItem>
                      <SelectItem value="Phone / WhatsApp">Phone / WhatsApp</SelectItem>
                      <SelectItem value="Either email or phone">Either email or phone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred time to connect (India time)</Label>
                  <Input id="time" name="time" placeholder="e.g. 11:00 am – 6:00 pm IST" className="bg-slate-50" />
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Button type="submit" size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold px-8">
                  Send Details via Email
                </Button>
                <span className="text-xs text-slate-500">This will open an email draft with your inputs.</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 4 - LOCATIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Where We Operate</h2>
            <p className="text-lg text-slate-600">
              We are based in India and support clients across India, the US and other regions, with teams that can work across different time zones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-primary w-6 h-6" />
                <h3 className="text-xl font-bold text-slate-900">India (Primary Operations)</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Our core delivery teams for customer support, sales, back office, QA and gig workforce are based in India.
              </p>
              <div className="flex flex-wrap gap-2">
                {["India time zone coverage", "English & regional languages", "On-ground gig workforce"].map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-blue-500 w-6 h-6" />
                <h3 className="text-xl font-bold text-slate-900">Serving Global Clients</h3>
              </div>
              <p className="text-slate-600 mb-6">
                We support clients serving customers in India as well as those targeting US and other international markets.
              </p>
              <div className="flex flex-wrap gap-2">
                {["US hours", "Blend of shifts", "Remote delivery"].map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Contact – FAQs</h2>
            <p className="text-lg text-slate-600">A few questions people ask when they reach out for the first time.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "What information should we share in the first message?",
                answer: "Even a simple note with your industry, what you want to outsource, and rough volumes (if known) is enough to start. We can figure out the rest together on a quick call."
              },
              {
                question: "Do you work with small teams or only large setups?",
                answer: "We work with both. Many engagements start small – a few agents or a limited-scope project – and then grow once the model is stable."
              },
              {
                question: "Can we start with a pilot?",
                answer: "Yes. Pilots are a good way to validate fit, quality and economics before scaling. We can jointly define a small, time-bound pilot scope."
              },
              {
                question: "How soon can a project go live?",
                answer: "It depends on the complexity of your process. For simple, clearly defined work, we can usually move from discussion to a small live setup quite quickly after commercials are aligned."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="mb-4 border border-slate-100 bg-white rounded-lg px-4 shadow-sm data-[state=open]:border-primary/20 transition-all">
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

      {/* CTA FOOTER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 text-center border border-slate-800 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Ready When You Are
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                You can fill the form, email us, or just send a short WhatsApp message. We’ll come back with a straightforward, no-jargon conversation about what’s possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={scrollToForm} className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  Fill the Contact Form
                </Button>
                <Button variant="outline" size="lg" onClick={openContactEmail} className="border-2 border-slate-600 text-slate-300 hover:border-white hover:text-white hover:bg-transparent font-bold rounded-lg px-8 h-14 text-lg">
                  Email Us Directly
                </Button>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
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
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
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