import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight, Users, Zap, ShieldCheck, Heart } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function WhyUs() {
  useEffect(() => {
    document.title = "Why Us | SaberTechs";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                The SaberTechs Difference
              </div>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-6">
                Why Work With <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                We combine human teams, practical automation and simple, transparent reporting so that you can move work to us with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               {
                 title: "Human-First, Quiet Use of AI",
                 description: "Our core strength is well-trained human teams for support, sales, back office and QA. We use AI only where it actually helps – reducing repeat work, speeding up answers and keeping costs under control, without compromising on empathy.",
                 icon: Users,
                 color: "text-blue-600 bg-blue-50"
               },
               {
                 title: "One Partner for Multiple Workstreams",
                 description: "Stop juggling 5 different vendors. We handle customer support, inside sales, back-office data work, content moderation and specialized compliance audits all under one roof. Scale up or down across services as your needs change.",
                 icon: Zap,
                 color: "text-amber-600 bg-amber-50"
               },
               {
                 title: "Transparency & Simple Reporting",
                 description: "No black boxes. You get clear daily reports, direct access to team leads, and full visibility into quality scores. We operate as an extension of your team, not a distant vendor hiding behind tickets.",
                 icon: ShieldCheck,
                 color: "text-green-600 bg-green-50"
               },
               {
                 title: "Global Standards, Local Cost",
                 description: "Get enterprise-grade processes, security and quality assurance at competitive rates. We optimize our delivery centers to provide the best balance of talent quality and cost efficiency.",
                 icon: Heart,
                 color: "text-rose-600 bg-rose-50"
               },
               {
                 title: "Fast Ramp-up & Flexibility",
                 description: "We can start small with a pilot team and scale fast. Our training and onboarding processes are designed for speed without sacrificing quality.",
                 icon: ArrowRight,
                 color: "text-purple-600 bg-purple-50"
               },
               {
                 title: "Data Security & Compliance",
                 description: "We take data security seriously. strict access controls, secure environments, and compliance with global data protection standards.",
                 icon: ShieldCheck,
                 color: "text-indigo-600 bg-indigo-50"
               }
             ].map((feature, i) => (
               <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                 <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                   <feature.icon className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                 <p className="text-slate-600 leading-relaxed text-sm">
                   {feature.description}
                 </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Ready to start?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact">
               <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold rounded-full px-8 h-12 shadow-lg">
                 Get a Proposal
               </Button>
             </Link>
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
