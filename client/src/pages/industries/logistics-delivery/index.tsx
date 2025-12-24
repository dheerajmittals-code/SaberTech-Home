import { Header } from "@/components/Header";
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
  Menu,
  X,
  ChevronDown,
  Globe,
  Truck,
  Building2,
  Stethoscope,
  Network,
  Package,
  MapPin,
  Clock,
  AlertTriangle,
  Phone,
  BarChart,
  UserCheck,
  Link as LinkIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/isometric_contact_center_illustration.png";

export default function LogisticsDelivery() {
  useEffect(() => {
    document.title = "Logistics & Delivery Support Services | SaberTechs";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Shipment tracking support, NDR management, delivery coordination, back office updates and gig workforce for logistics and last-mile delivery networks.");
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

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
