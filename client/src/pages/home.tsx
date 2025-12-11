import { useLocation, Link } from "wouter";
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
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Import the generated image
import heroImage from "@assets/generated_images/clean_flat_isometric_vector_illustration_of_customer_support_elements_like_chat_bubbles_and_dashboards_in_blue_and_white.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      {/* HEADER - Sticky & Premium */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-primary rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg group-hover:rotate-3 transition-transform">S</div>
              <span className={`text-2xl font-heading font-bold tracking-tight ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
                SaberTechs
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {["Home", "Services", "Why Us", "Industries"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${
                    isScrolled ? "text-slate-600" : "text-slate-700"
                  }`}
                >
                  {item}
                </a>
              ))}
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
                {["Home", "Services", "Why Us", "Industries"].map((item) => (
                  <a key={item} href="#" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">
                    {item}
                  </a>
                ))}
                <Button className="w-full bg-primary text-white mt-4">Get a Quote</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SECTION 1 — HERO (Avada Style with Diagonal Shape) */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-50">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                Operational Excellence
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-7xl font-heading font-extrabold text-slate-900 leading-[1.1] mb-6"
                variants={fadeIn}
              >
                Scale Your <span className="text-primary">Support</span> <br/>Without Limits
              </motion.h1>
              <motion.p 
                className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg font-light"
                variants={fadeIn}
              >
                Outsourced chat, email, voice, sales, and back-office operations built for high-growth SaaS and E-commerce brands.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold rounded-full px-8 h-14 text-lg shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:bg-transparent font-bold rounded-full px-8 h-14 text-lg transition-all">
                  View Capabilities
                </Button>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                  ))}
                </div>
                <p>Trusted by 500+ companies</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImage} 
                  alt="SaberTechs Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-dashed border-primary/20 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Slanted Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-[calc(100%+1.3px)] fill-white">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="opacity-100"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2 — OUR SERVICES (Clean Grid with Hover Lift) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Comprehensive Operations Support</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Customer Support & CX",
                description: "Fast, reliable chat, email & voice support for global SMBs.",
                icon: MessageSquare,
              },
              {
                title: "Revenue & Sales",
                description: "Lead qualification, demos, renewals & customer win-back.",
                icon: BadgeDollarSign,
              },
              {
                title: "Back Office Ops",
                description: "Product listings, data entry, refunds & CRM updates.",
                icon: Database,
              },
              {
                title: "QA & Compliance",
                description: "Call QA, chat monitoring, mystery audits & SOP checks.",
                icon: ShieldCheck,
              },
              {
                title: "AI Automation",
                description: "Chatbots, workflows, routing & automated replies.",
                icon: Bot,
              },
              {
                title: "Gig Workforce",
                description: "Flexible hourly or project-based staffing for CX, audits & ops.",
                icon: Users,
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <service.icon className="w-32 h-32" />
                </div>
                
                <div className="w-14 h-14 rounded-full bg-primary/5 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>
                
                <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-primary transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY SABERTECHS (Light Grey Section) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl font-heading font-bold text-slate-900 sm:text-4xl">Why Companies Choose SaberTechs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               {
                 title: "Start Small, Scale Anytime",
                 description: "Begin with 1–2 agents and expand as your business grows.",
                 icon: Scaling,
                 color: "text-blue-600 bg-blue-50"
               },
               {
                 title: "CX + Ops + Sales",
                 description: "One partner for support, back-office, sales & gig workforce.",
                 icon: Layers,
                 color: "text-purple-600 bg-purple-50"
               },
               {
                 title: "AI-Enhanced Efficiency",
                 description: "Automated workflows, routing & knowledge-base responses.",
                 icon: Zap,
                 color: "text-amber-600 bg-amber-50"
               },
               {
                 title: "Fast Deployment",
                 description: "Launch customer support operations in as little as 72 hours.",
                 icon: Clock,
                 color: "text-emerald-600 bg-emerald-50"
               }
             ].map((feature, i) => (
               <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-slate-100">
                 <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                   <feature.icon className="w-8 h-8" />
                 </div>
                 <h3 className="text-lg font-heading font-bold text-slate-900 mb-3">{feature.title}</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — INDUSTRIES (Pill/Card Style) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900">Industries We Support</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "SaaS & Tech", icon: Monitor },
              { name: "E-commerce & D2C", icon: ShoppingBag },
              { name: "Travel & Hospitality", icon: Plane },
              { name: "EdTech & Assessments", icon: GraduationCap }
            ].map((industry, index) => (
              <div key={index} className="flex items-center gap-4 bg-white border border-slate-200 rounded-full py-4 px-8 shadow-sm hover:shadow-md hover:border-primary/50 hover:text-primary transition-all cursor-default group min-w-[240px] justify-center">
                <industry.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                <span className="font-heading font-semibold text-slate-700 group-hover:text-primary transition-colors">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR IMPACT (Clean Minimal Stats) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Our Impact</h2>
            <p className="text-slate-500 text-lg">We focus on measurable outcomes, not just headcount.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                metric: "70%",
                label: "Reduced Email Backlog",
                sub: "For a US travel company in 6 weeks."
              },
              {
                metric: "30%",
                label: "Conversion Increase",
                sub: "For a SaaS startup using our SDR follow-ups."
              },
              {
                metric: "50,000+",
                label: "Proctoring Sessions",
                sub: "Managed for EdTech & university clients annually."
              }
            ].map((stat, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                <div className="text-5xl font-heading font-extrabold text-primary mb-2">{stat.metric}</div>
                <div className="text-lg font-bold text-slate-900 mb-3">{stat.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[250px] mx-auto">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Ready to Build Your Team?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Get a custom proposal within 24 hours. No long-term contracts, just results.
          </p>
          <Button size="lg" className="bg-primary hover:bg-blue-700 text-white font-bold rounded-full px-12 h-16 text-xl shadow-xl shadow-primary/20">
            Talk to an Expert <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          <div className="mt-8 flex items-center justify-center gap-2 text-slate-500">
             <Phone className="w-4 h-4" /> <span>Or call us at (555) 123-4567</span>
          </div>
        </div>
      </section>

      {/* FOOTER - Mega Footer Style */}
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
                <li><a href="#" className="hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Customer Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sales & Revenue</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Back Office Ops</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Automation</a></li>
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
