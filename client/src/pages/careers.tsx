import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight, Briefcase } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers | SaberTechs";
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
                Join Our Team
              </div>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-6">
                Build the Future of <span className="text-primary">Operations</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Work with global brands, smart automation, and a team that values growth.
                We're always looking for talented individuals to join our mission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Open Positions</h2>
            
            <div className="space-y-4">
              {[
                { title: "Customer Success Manager", type: "Full-time", location: "Remote / Hybrid", dept: "Operations" },
                { title: "Senior Sales Associate", type: "Full-time", location: "Remote", dept: "Sales" },
                { title: "Quality Assurance Analyst", type: "Full-time", location: "Remote", dept: "Quality" },
                { title: "Operations Team Lead", type: "Full-time", location: "Hybrid", dept: "Operations" }
              ].map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-lg transition-all"
                >
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.dept}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="shrink-0 border-slate-200 hover:bg-slate-50 text-slate-700">
                    View Details
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Don't see a fit?</h3>
              <p className="text-slate-600 mb-6">
                We're always hiring great talent. Send your resume to our HR team and we'll keep you on file.
              </p>
              <Button className="bg-primary text-white font-bold rounded-full px-8">
                Email Your Resume
              </Button>
            </div>
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
