import { useLocation } from "wouter";
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
  CheckCircle2,
  Twitter,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Import the generated image
import heroImage from "@assets/generated_images/minimalist_vector_illustration_of_modern_customer_support_dashboard_with_chat_bubbles_and_team_elements_in_blue_and_white.png";

export default function Home() {
  const [, setLocation] = useLocation();

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
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              className="max-w-2xl"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-tight"
                variants={fadeIn}
              >
                Customer Support & CX Teams for Growing SMBs
              </motion.h1>
              <motion.h3 
                className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg"
                variants={fadeIn}
              >
                Outsourced chat, email, voice, sales, back-office & gig operations — built for SaaS, E-commerce, Travel & EdTech.
              </motion.h3>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeIn}
              >
                <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-medium px-8 h-12 text-lg">
                  Book a Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8 h-12 text-lg">
                  Download Capability Deck
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative lg:ml-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100 bg-white">
                <img 
                  src={heroImage} 
                  alt="SaberTechs Dashboard" 
                  className="w-full h-auto object-cover max-w-[600px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR SERVICES */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-slate-600">Comprehensive operational support to help your business scale.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Customer Support & CX",
                description: "Fast, reliable chat, email & voice support for global SMBs.",
                icon: MessageSquare,
                color: "text-blue-600"
              },
              {
                title: "Revenue & Inside Sales Support",
                description: "Lead qualification, demos, renewals & customer win-back.",
                icon: BadgeDollarSign,
                color: "text-emerald-600"
              },
              {
                title: "Back Office & Catalog Operations",
                description: "Product listings, data entry, refunds & CRM updates.",
                icon: Database,
                color: "text-indigo-600"
              },
              {
                title: "QA, Compliance & Audits",
                description: "Call QA, chat monitoring, mystery audits & SOP checks.",
                icon: ShieldCheck,
                color: "text-purple-600"
              },
              {
                title: "AI-Assisted CX Automation",
                description: "Chatbots, workflows, routing & automated replies.",
                icon: Bot,
                color: "text-cyan-600"
              },
              {
                title: "Gig Workforce On-Demand",
                description: "Flexible hourly or project-based staffing for CX, audits & ops.",
                icon: Users,
                color: "text-orange-600"
              }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-4 ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 transition-colors group">
                    Learn More <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY SABERTECHS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Companies Choose SaberTechs</h2>
          </div>
          
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Start Small, Scale Anytime",
                description: "Begin with 1–2 agents and expand as your business grows.",
                icon: Scaling
              },
              {
                title: "CX + Ops + Sales Under One Roof",
                description: "One partner for support, back-office, sales & gig workforce.",
                icon: Layers
              },
              {
                title: "AI-Enhanced Efficiency",
                description: "Automated workflows, routing & knowledge-base responses.",
                icon: Zap
              },
              {
                title: "Fast Deployment (72 Hours)",
                description: "Launch customer support operations quickly.",
                icon: Clock
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-primary">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — INDUSTRIES WE SERVE */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Industries We Support</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { name: "SaaS & Tech", icon: Monitor },
              { name: "E-commerce & D2C", icon: ShoppingBag },
              { name: "Travel & Hospitality", icon: Plane },
              { name: "EdTech & Assessments", icon: GraduationCap }
            ].map((industry, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-4 text-slate-400 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                  <industry.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <span className="text-font-medium text-slate-700">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR IMPACT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Impact</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                metric: "Reduced 70%",
                sub: "Email Backlog",
                desc: "For a US travel company in 6 weeks."
              },
              {
                metric: "30% Increase",
                sub: "In Conversions",
                desc: "For a SaaS startup using our SDR follow-ups."
              },
              {
                metric: "50,000+",
                sub: "Sessions Managed",
                desc: "For EdTech & university clients annually."
              }
            ].map((stat, index) => (
              <Card key={index} className="border border-slate-100 shadow-lg shadow-slate-200/50 bg-white overflow-hidden group hover:border-primary/20 transition-colors">
                <div className="h-2 bg-primary w-full" />
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-1">{stat.metric}</div>
                  <div className="text-lg font-semibold text-primary mb-4">{stat.sub}</div>
                  <p className="text-slate-600 leading-relaxed max-w-[200px] mx-auto">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Ready to Build a Reliable Support Team?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Get a custom proposal within 24 hours. Start scaling your operations today.</p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 h-14 text-lg shadow-lg shadow-blue-900/20 border-none">
            Talk to an Expert
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
                <span className="text-xl font-bold text-slate-900">SaberTechs</span>
              </div>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Reliable CX and Operations outsourcing for modern businesses.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Home</a></li>
                <li><a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Customer Support</a></li>
                <li><a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Sales Support</a></li>
                <li><a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Back Office Ops</a></li>
                <li><a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Gig Workforce</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="text-slate-600 text-sm">support@sabertechs.com</li>
                <li className="text-slate-600 text-sm">+1 (555) 123-4567</li>
                <li className="text-slate-600 text-sm">San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2024 SaberTechs Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-slate-900 text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-slate-900 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
