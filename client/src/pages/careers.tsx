import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { BookOpen, Zap, Users } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers | SaberTechs";
    window.scrollTo(0, 0);
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

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! Your application has been submitted. Our HR team will connect if there is a suitable opening.");
    (e.target as HTMLFormElement).reset();
  };

  const openWhatsAppHR = (e: React.MouseEvent) => {
    e.preventDefault();
    const phone = "919999999999";
    const text = encodeURIComponent("Hi SaberTechs HR, I want to apply. My name is ________. Role preference: ________. City: ________.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
                Careers at SaberTechs
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Build your career with a <span className="text-primary">people-first</span> operations team.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                We run customer support, inside sales, back office, QA, and exam operations for growing businesses.
                If you’re disciplined, polite, and dependable — we’d love to work with you.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 mb-10">
                 <a href="#openings">
                  <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold rounded-full px-8 h-12 shadow-lg">
                    View Openings
                  </Button>
                </a>
                <a href="#gig">
                   <Button variant="outline" size="lg" className="bg-white border-slate-200 text-primary hover:bg-slate-50 font-bold rounded-full px-8 h-12">
                    Join Gig Network
                  </Button>
                </a>
                 <a href="#apply">
                   <Button variant="outline" size="lg" className="bg-white border-slate-200 text-primary hover:bg-slate-50 font-bold rounded-full px-8 h-12">
                    Apply Now
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3">
                {["Structured training & SOPs", "Clear targets & reporting", "Work across multiple industries", "Long-term collaboration mindset"].map((item, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Why work with SaberTechs</h2>
            <p className="text-lg text-slate-600">
              Professional processes, transparent expectations, and a culture focused on execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                label: "Professional operations",
                title: "Clear SOPs & onboarding",
                desc: "We train teams on scripts, tools, escalation rules and quality benchmarks.",
                icon: BookOpen
              },
              {
                label: "Growth oriented",
                title: "Learn across functions",
                desc: "Customer support, inside sales, QA, back office — work that builds real skills.",
                icon: Zap
              },
              {
                label: "People first",
                title: "Respectful work culture",
                desc: "We value discipline, politeness, punctuality and team accountability.",
                icon: Users
              }
            ].map((card, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">{card.label}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section id="openings" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Open roles</h2>
            <p className="text-lg text-slate-600">
              These are common roles we hire for. If your profile matches, apply and our HR team will contact you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {[
               {
                 type: "Full-time",
                 title: "Customer Support Executive",
                 desc: "Voice / Email / Chat support. English + Hindi preferred. Rotational shifts possible.",
                 pills: ["Customer support", "Communication", "Ticketing tools"]
               },
               {
                 type: "Full-time",
                 title: "Inside Sales / Lead Follow-up",
                 desc: "Lead qualification, demos scheduling, follow-ups, and CRM hygiene.",
                 pills: ["Calling", "Follow-ups", "CRM"]
               },
               {
                 type: "Full-time",
                 title: "QA / Auditor",
                 desc: "Call audits, scorecards, feedback notes, and compliance reporting.",
                 pills: ["Quality", "Scorecards", "Reporting"]
               },
               {
                 type: "Full-time",
                 title: "Back Office Executive",
                 desc: "Data updates, case tagging, verification checks, reporting and documentation.",
                 pills: ["Excel", "Accuracy", "SOP-driven"]
               },
               {
                 type: "Project-based",
                 title: "Exam Operations Coordinator",
                 desc: "Center coordination, vendor follow-ups, logistics planning and reporting.",
                 pills: ["Coordination", "Reporting", "Execution"]
               },
               {
                 type: "Anytime",
                 title: "Internships (Ops / Sales / Admin)",
                 desc: "Hands-on learning with real execution tasks. Duration: 4–12 weeks.",
                 pills: ["Learning", "Operations", "Support"]
               }
             ].map((job, i) => (
               <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-200 transition-all flex flex-col h-full">
                 <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{job.type}</div>
                 <h3 className="text-lg font-bold text-slate-900 mb-2">{job.title}</h3>
                 <p className="text-slate-600 text-sm mb-4 flex-grow">{job.desc}</p>
                 <div className="flex flex-wrap gap-2 mt-auto">
                   {job.pills.map((pill, j) => (
                     <span key={j} className="bg-slate-50 border border-slate-100 text-slate-500 text-[10px] px-2 py-1 rounded-full uppercase font-medium">
                       {pill}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-8 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-blue-50/30 opacity-50 z-0"></div>
               <div className="relative z-10">
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Don’t see your role?</h3>
                 <p className="text-slate-600 mb-6">Apply anyway. If we find a fit, we’ll reach out when a matching role opens.</p>
                 <div className="flex flex-wrap justify-center gap-4">
                   <a href="#apply">
                     <Button className="bg-primary hover:bg-blue-700 text-white font-bold rounded-lg">Apply Now</Button>
                   </a>
                   <a href="mailto:hr@sabertechs.com?subject=Inquiry">
                     <Button variant="outline" className="border-slate-200 hover:bg-slate-50">Talk to HR</Button>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* GIG NETWORK */}
      <section id="gig" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Join our Gig Network (On-demand)</h2>
            <p className="text-lg text-slate-600">
              We have a large freelance workforce used for exam proctoring & invigilation. We are expanding this network
              for other on-demand tasks where reliability, reporting and basic training matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
               <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">Gig roles</div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">What kind of gig work?</h3>
               <ul className="space-y-3">
                 {[
                   "Online proctoring / exam invigilation (online/offline)",
                   "Field verification / audit visits (checklist + photo proof)",
                   "Event & center coordination support",
                   "Survey visits / mystery audits (process-based)"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                     <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
               <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">Eligibility</div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Who can join?</h3>
               <ul className="space-y-3">
                 {[
                   "Comfortable using smartphone apps (WhatsApp/Maps/Forms)",
                   "Professional behavior + punctuality",
                   "Basic reading/writing skills for reporting",
                   "Willingness to follow SOPs and submit proofs"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                     <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
             <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-xl font-bold mb-2">Want to get gig opportunities?</h3>
                   <p className="text-slate-300 mb-6">Apply using the form below and select “Gig Workforce”.</p>
                   <div className="flex justify-center gap-4">
                     <a href="#apply">
                       <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-lg">Join Gig Network</Button>
                     </a>
                     <a href="#faq">
                       <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white bg-transparent">Read FAQs</Button>
                     </a>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Our hiring process</h2>
            <p className="text-lg text-slate-600">
              Simple, transparent and fast — depending on role and project timelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {[
               { step: "Step 1", title: "Apply", desc: "Submit the form with your role preference and contact details." },
               { step: "Step 2", title: "Screening call", desc: "A short call to verify communication, availability and basics." },
               { step: "Step 3", title: "Assessment & onboarding", desc: "Role-based assessment, training, SOP briefing and go-live." }
             ].map((item, i) => (
               <div key={i} className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm relative">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Apply now</h2>
            <p className="text-lg text-slate-600">
              Fill the form. Our HR team will reach out if your profile matches an open requirement.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg">
            <form onSubmit={handleApply} className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number</Label>
                    <Input id="phone" required type="tel" placeholder="+91..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Your city" />
                  </div>
               </div>

               <div className="space-y-2">
                 <Label htmlFor="role">Role Preference</Label>
                 <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer-support">Customer Support Executive</SelectItem>
                      <SelectItem value="inside-sales">Inside Sales / Lead Follow-up</SelectItem>
                      <SelectItem value="back-office">Back Office Executive</SelectItem>
                      <SelectItem value="qa">QA / Auditor</SelectItem>
                      <SelectItem value="exam-ops">Exam Operations (Coordinator / Proctoring)</SelectItem>
                      <SelectItem value="gig">Gig Workforce (On-demand)</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                 </Select>
               </div>

               <div className="space-y-2">
                 <Label htmlFor="summary">Experience Summary (optional)</Label>
                 <Textarea id="summary" placeholder="Briefly describe your experience, skills, and availability." className="min-h-[120px]" />
               </div>

               <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-blue-700 text-white font-bold h-12 text-base">
                    Submit Application
                  </Button>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <a href="mailto:hr@sabertechs.com?subject=Job%20Application%20-%20SaberTechs" className="text-sm text-slate-500 hover:text-primary font-medium">Email HR</a>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <a href="#" onClick={openWhatsAppHR} className="text-sm text-slate-500 hover:text-primary font-medium">WhatsApp HR</a>
               </div>

               <p className="text-xs text-slate-400 text-center mt-6">
                 Note: Please do not share sensitive personal data (Aadhaar, PAN, bank details) at this stage.
                 If shortlisted, we’ll request documents securely.
               </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">FAQs</h2>
            <p className="text-lg text-slate-600">Quick answers before you apply.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
             {[
               { q: "Do you offer work-from-home?", a: "Some roles and projects may be remote or hybrid depending on client requirements." },
               { q: "How does gig work payment happen?", a: "Payment is project-based and depends on scope. Details are shared before confirmation." },
               { q: "Do you hire freshers?", a: "Yes, for certain roles where communication and willingness to learn is strong." },
               { q: "How quickly will you respond?", a: "If there is a matching requirement, HR usually responds within a few working days." }
             ].map((faq, i) => (
               <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-sm text-slate-600">{faq.a}</p>
               </div>
             ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-500">
              For business partnership enquiries, please use the <Link href="/contact"><a className="text-blue-600 hover:underline">Contact</a></Link> page.
            </p>
          </div>
         </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 SaberTechs Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
