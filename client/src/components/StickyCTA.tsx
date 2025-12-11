import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] px-4 py-3 md:py-4"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8">
              {/* Text Content */}
              <div className="flex items-center gap-3 text-center md:text-left">
                <div className="hidden md:flex w-10 h-10 rounded-full bg-blue-50 text-primary items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm md:text-base leading-tight">
                    Need a reliable CX & Ops partner?
                  </h4>
                  <p className="hidden md:block text-xs text-slate-500 mt-0.5">
                    Get a custom proposal for your team within 24 hours.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <Link href="/contact">
                <Button className="w-full md:w-auto bg-primary hover:bg-blue-700 text-white font-bold rounded-lg px-6 h-10 md:h-11 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm md:text-base whitespace-nowrap">
                  Talk to an Expert <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
