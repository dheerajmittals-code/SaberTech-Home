import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
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
  Network,
  Stethoscope,
  Truck,
  Building2,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isIndustriesMobileOpen, setIsIndustriesMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
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
              <span className={`text-2xl font-heading font-bold tracking-tight ${isScrolled || location !== "/" ? "text-slate-900" : "text-slate-900"}`}>
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
              
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-[280px]">
                <div className="bg-white rounded-xl shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-slate-100 overflow-hidden p-2">
                  {[
                    { name: "Customer Support & CX", link: "/services/customer-support-cx", icon: MessageSquare },
                    { name: "Revenue & Inside Sales", link: "/services/revenue-inside-sales", icon: BadgeDollarSign },
                    { name: "Back Office Operations", link: "/services/back-office-operations", icon: Database },
                    { name: "QA & Compliance", link: "/services/qa-compliance", icon: ShieldCheck },
                    { name: "AI Automation", link: "/services/ai-automation", icon: Bot },
                    { name: "Gig Workforce", link: "/services/gig-workforce", icon: Users }
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
              
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-[280px]">
                <div className="bg-white rounded-xl shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-slate-100 overflow-hidden p-2">
                  {[
                    { name: "SaaS & Technology", link: "/industries/saas-technology", icon: Monitor },
                    { name: "E-commerce & D2C", link: "/industries/ecommerce-d2c", icon: ShoppingBag },
                    { name: "Travel & Hospitality", link: "/industries/travel-hospitality", icon: Plane },
                    { name: "EdTech & Exams", link: "/industries/edtech-exams", icon: GraduationCap },
                    { name: "Telecom & ISPs", link: "/industries/telecom-isp", icon: Network },
                    { name: "Fintech & Insurance", link: "/industries/fintech-insurance", icon: BadgeDollarSign },
                    { name: "Healthcare", link: "/industries/healthcare-diagnostics", icon: Stethoscope },
                    { name: "Logistics & Delivery", link: "/industries/logistics-delivery", icon: Truck },
                    { name: "Real Estate", link: "/industries/real-estate", icon: Building2 }
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

            <Link href="/why-us">
              <span className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors cursor-pointer ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                Why Us
              </span>
            </Link>

            <Link href="/contact">
              <span className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors cursor-pointer ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                Contact
              </span>
            </Link>

            <Link href="/careers">
              <span className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors cursor-pointer ${isScrolled ? "text-slate-600" : "text-slate-700"}`}>
                Careers
              </span>
            </Link>

            <Link href="/contact#contact-form">
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

              <div className="border-b border-slate-50">
                <div className="flex items-center justify-between py-2">
                  <Link href="/services">
                    <span className="text-lg font-medium text-slate-800 flex-1 cursor-pointer block">Services</span>
                  </Link>
                  <button onClick={(e) => { e.stopPropagation(); setIsServicesMobileOpen(!isServicesMobileOpen); }} className="p-2 text-slate-500">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesMobileOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {isServicesMobileOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 pb-2 bg-slate-50/50 rounded-lg mb-2">
                      {[
                        { name: "Customer Support & CX", link: "/services/customer-support-cx" },
                        { name: "Revenue & Inside Sales", link: "/services/revenue-inside-sales" },
                        { name: "Back Office Operations", link: "/services/back-office-operations" },
                        { name: "QA & Compliance", link: "/services/qa-compliance" },
                        { name: "AI Automation", link: "/services/ai-automation" },
                        { name: "Gig Workforce", link: "/services/gig-workforce" }
                      ].map((service) => (
                        <Link key={service.name} href={service.link}>
                          <span className="block py-3 text-slate-600 hover:text-primary text-base border-b border-slate-100 last:border-0 cursor-pointer">{service.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-b border-slate-50">
                <div className="flex items-center justify-between py-2">
                  <Link href="/industries">
                    <span className="text-lg font-medium text-slate-800 flex-1 cursor-pointer block">Industries</span>
                  </Link>
                  <button onClick={(e) => { e.stopPropagation(); setIsIndustriesMobileOpen(!isIndustriesMobileOpen); }} className="p-2 text-slate-500">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isIndustriesMobileOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {isIndustriesMobileOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 pb-2 bg-slate-50/50 rounded-lg mb-2">
                      {[
                        { name: "SaaS & Technology", link: "/industries/saas-technology" },
                        { name: "E-commerce & D2C", link: "/industries/ecommerce-d2c" },
                        { name: "Travel & Hospitality", link: "/industries/travel-hospitality" },
                        { name: "EdTech & Exams", link: "/industries/edtech-exams" },
                        { name: "Telecom & ISPs", link: "/industries/telecom-isp" },
                        { name: "Fintech & Insurance", link: "/industries/fintech-insurance" },
                        { name: "Healthcare", link: "/industries/healthcare-diagnostics" },
                        { name: "Logistics & Delivery", link: "/industries/logistics-delivery" },
                        { name: "Real Estate", link: "/industries/real-estate" }
                      ].map((industry) => (
                        <Link key={industry.name} href={industry.link}>
                          <span className="block py-3 text-slate-600 hover:text-primary text-base border-b border-slate-100 last:border-0 cursor-pointer">{industry.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/why-us">
                <span className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50 block cursor-pointer">Why Us</span>
              </Link>

              <Link href="/contact">
                <span className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50 block cursor-pointer">Contact</span>
              </Link>
              
              <Link href="/careers">
                <span className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50 block cursor-pointer">Careers</span>
              </Link>

              <Link href="/contact#contact-form">
                <Button className="w-full bg-primary text-white mt-4">Get a Quote</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
