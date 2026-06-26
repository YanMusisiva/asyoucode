"use client";
import React, { useState } from "react";
import {
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Sun,
  Moon,
  Check,
  Plus,
  Minus,
  Target,
  Users,
  Code2,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- DICTIONNAIRE DE TRADUCTION (FR / EN) ---
const content = {
  fr: {
    nav: {
      services: "Services",
      pricing: "Tarifs",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      tag: "GLOBAL • SERVICES",
      title: "CONSULTING",
      desc: "Notre offre unique permet aux entreprises de services de se faire connaître, d'attirer des prospects qualifiés et de maximiser leurs ventes. Plus vous êtes visible, plus votre rentabilité augmente.",
      video: "Vidéo de présentation",
      cta: "COMMENCER",
      stats: { clients: "Clients Actifs", global: "Portée Globale" },
    },
    services: {
      title: "METRICS D'OPTIMISATION",
      subtitle:
        "Trois leviers indispensables indispensables au développement des entreprises de services.",
      list: [
        {
          rate: "100%",
          name: "BUSINESS CONSULTING",
          desc: "Optimisation globale de votre structure pour maximiser la rentabilité.",
        },
        {
          rate: "🚀",
          name: "ADVERTISING / PUBLICITÉ",
          desc: "Campagnes cibles et acquisition agressive de prospects qualifiés.",
        },
        {
          rate: "Custom",
          name: "DÉVELOPPEMENT SAAS & WEB",
          desc: "Création d'applications et de sites web haut de gamme compréhensibles par vos clients.",
        },
      ],
    },
    pricing: {
      title: "NOS PACKS DE CROISSANCE",
      cta: "Sélectionner ce pack",
      tiers: [
        {
          name: "Starter Consulting",
          price: "990€",
          features: [
            "Audit de structure",
            "Plan d'action commercial",
            "Support email 5j/7",
          ],
        },
        {
          name: "Premium Growth (Ads + Web)",
          price: "2490€",
          features: [
            "Campagnes Ads incluses",
            "Création de Landing Page",
            "Suivi des conversions",
            "Support prioritaire WhatsApp",
          ],
        },
        {
          name: "Enterprise SaaS",
          price: "Sur Mesure",
          features: [
            "Architecture logicielle dédiée",
            "Branding premium complet",
            "Consultant stratégique dédié",
          ],
        },
      ],
    },
    faq: {
      title: "QUESTIONS FRÉQUENTES",
      items: [
        {
          q: "À qui s'adressent vos services ?",
          a: "Exclusivement aux entreprises de services qui souhaitent automatiser ou booster leur acquisition client.",
        },
        {
          q: "Quels sont les délais pour un développement SaaS ou Web ?",
          a: "Une Landing Page prend généralement 7 jours, tandis qu'un SaaS sur-mesure demande entre 4 et 8 semaines selon la complexité.",
        },
        {
          q: "Comment fonctionne l'accompagnement en Advertising ?",
          a: "Nous créons, gérons et optimisons vos campagnes au quotidien, avec un rapport complet de performance chaque semaine.",
        },
      ],
    },
  },
  en: {
    nav: {
      services: "Services",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      tag: "GLOBAL • SERVICES",
      title: "CONSULTING",
      desc: "Our unique offer is to get more people to know about you and get those who are interested about your stuff to contact you. The more they are, the more you can sell and get money.",
      video: "Promotion video",
      cta: "GET STARTED",
      stats: { clients: "Active Clients", global: "Global Reach" },
    },
    services: {
      title: "OPTIMIZATION METRICS",
      subtitle:
        "Three fundamental service pillars designed essential for business scaling.",
      list: [
        {
          rate: "100%",
          name: "BUSINESS CONSULTING",
          desc: "Overall structural optimization to maximize your corporate profitability.",
        },
        {
          rate: "🚀",
          name: "ADVERTISING",
          desc: "Targeted high-converting campaigns to attract clients who need your offer.",
        },
        {
          rate: "Custom",
          name: "SAAS & WEB DEVELOPMENT",
          desc: "Building premium custom applications and high-performance websites.",
        },
      ],
    },
    pricing: {
      title: "GROWTH PACKAGES",
      cta: "Select this plan",
      tiers: [
        {
          name: "Starter Consulting",
          price: "$990",
          features: [
            "Structural Audit",
            "Commercial Action Plan",
            "5 days/week Email Support",
          ],
        },
        {
          name: "Premium Growth (Ads + Web)",
          price: "$2490",
          features: [
            "Managed Ads Campaigns",
            "High-Converting Landing Page",
            "Conversion Tracking",
            "Priority WhatsApp Support",
          ],
        },
        {
          name: "Enterprise SaaS",
          price: "Custom",
          features: [
            "Dedicated Software Architecture",
            "Full Premium Branding",
            "Dedicated Strategic Advisor",
          ],
        },
      ],
    },
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          q: "Who are your services for?",
          a: "Exclusively for service-based businesses looking to automate or scale their client acquisition.",
        },
        {
          q: "What are the timelines for SaaS or Web development?",
          a: "A standard landing page takes around 7 days, while a custom SaaS platform requires 4 to 8 weeks depending on scope.",
        },
        {
          q: "How does the Advertising management work?",
          a: "We build, manage, and optimize your campaigns daily, providing a detailed performance report every single week.",
        },
      ],
    },
  },
};

export default function AsikireLandingPage() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t = content[lang];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans tracking-tight selection:bg-[#82CD27] selection:text-black
      ${theme === "dark" ? "bg-[#0B0B0B] text-white" : "bg-[#F5F5F7] text-neutral-900"}`}
    >
      {/* --- REPRO DE L'OUTLINE BORDURE DE L'IMAGE --- */}
      <div className="fixed inset-4 border border-white/5 rounded-[32px] pointer-events-none z-50 hidden md:block" />

      {/* --- HEADER NAVBAR --- */}
      <header className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-md px-8 md:px-16 py-6 flex items-center justify-between">
        {/* LOGO ASIKIRE & CO */}
        <div className="flex items-center gap-2">
          {/* Remplacer par l'image exacte de votre logo.jpeg si nécessaire */}
          <img
            src="/logo.jpeg"
            className="h-8 border border-white/20 rounded-full"
            alt="Logo Asikire"
          />
          <span className="font-black text-lg tracking-tighter uppercase">
            ASIKIRE & CO
          </span>
        </div>

        {/* LIENS DE NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase text-neutral-400">
          <a
            href="#services"
            className="hover:text-[#82CD27] transition-colors"
          >
            {t.nav.services}
          </a>
          <a href="#tarifs" className="hover:text-[#82CD27] transition-colors">
            {t.nav.pricing}
          </a>
          <a href="#faq" className="hover:text-[#82CD27] transition-colors">
            {t.nav.faq}
          </a>
        </nav>

        {/* CONTRÔLES LANGUE, THÈME ET CONTACT */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-xs font-mono font-bold tracking-wider hover:text-[#82CD27] transition-colors flex items-center gap-1"
          >
            <Globe size={14} /> {lang.toUpperCase()}
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-neutral-800 hover:border-[#82CD27] transition-all"
          >
            {theme === "dark" ? (
              <Sun size={14} className="text-[#82CD27]" />
            ) : (
              <Moon size={14} />
            )}
          </button>

          <a
            href="/contact"
            className="hidden sm:inline-block bg-white text-black text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#82CD27] transition-all"
          >
            {t.nav.contact}
          </a>
        </div>
      </header>

      {/* --- HERO SECTION (Identique à l'image principale) --- */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-16 overflow-hidden">
        {/* Background circuit/glow vert */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,205,39,0.06),transparent_65%)] pointer-events-none" />

        {/* Éléments du haut de l'image (Promotion Video) */}
        <div className="w-full max-w-7xl mx-auto flex justify-start items-center gap-4 relative z-10">
          <button className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center bg-black/40 hover:scale-105 transition-transform group">
            <Play
              size={14}
              className="fill-white translate-x-[1px] group-hover:text-[#82CD27]"
            />
          </button>
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
            {t.hero.video}
          </span>
        </div>

        {/* TEXTE CENTRAL GIGANTESQUE "CONSULTING" + GRAPHIQUE VERT */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10 py-12">
          <div className="relative">
            {/* Titre Arrière-plan style Brutaliste */}
            <h1 className="text-[14vw] font-black leading-none tracking-tighter text-center uppercase select-none opacity-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#1F1F1F]">
              {t.hero.title}
            </h1>

            {/* Flèche ascendante / Graphique en 3D simulé au centre (basé sur edited-image.png) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform -translate-y-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-48 h-48 md:w-64 md:h-64 bg-[url('/graph-d.png')] bg-contain bg-no-repeat bg-center drop-shadow-[0_0_50px_rgba(130,205,39,0.3)] mix-blend-screen"
              />
            </div>
          </div>

          {/* BOUTON "GET STARTED" VERT LIME ÉLECTRIQUE */}
          <div className="mt-8 relative z-20">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#82CD27] text-black font-black uppercase text-sm tracking-widest px-12 py-4 rounded-xl shadow-[0_0_40px_rgba(130,205,39,0.45)] hover:bg-white hover:shadow-white/20 transition-all"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>

        {/* BAS DE LA SECTION HERO (Prix fictif d'accroche / Liens directs / Compteurs) */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-end gap-6 relative z-10 border-t border-white/5 pt-8">
          <div>
            <p className="text-2xl font-black text-[#82CD27] tracking-tight">
              $349.99{" "}
              <span className="text-xs text-neutral-400 font-normal">
                /mo start
              </span>
            </p>
            <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-1">
              SIZE: {t.hero.tag}
            </p>
          </div>

          {/* Flèches de navigation ancres */}
          <div className="hidden md:flex justify-center items-center gap-6 text-[11px] font-mono tracking-widest uppercase text-neutral-400">
            <a
              href="#services"
              className="hover:text-[#82CD27] flex items-center gap-1"
            >
              ➔ {t.nav.services}
            </a>
            <a
              href="#tarifs"
              className="hover:text-[#82CD27] flex items-center gap-1"
            >
              ➔ {t.nav.pricing}
            </a>
          </div>

          <div className="text-right flex justify-end gap-8">
            <div>
              <p className="text-xl font-black tracking-tighter">50+</p>
              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                {t.hero.stats.clients}
              </p>
            </div>
            <div>
              <p className="text-xl font-black tracking-tighter">Global</p>
              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                {t.hero.stats.global}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION SERVICES & METRICS (Inspiré par le bas gauche de l'image) --- */}
      <section
        id="services"
        className="py-24 px-6 md:px-16 border-t border-white/5 bg-[#080808]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#82CD27] font-mono text-xs tracking-widest uppercase block mb-2">
              // {t.services.title}
            </span>
            <p className="text-slate-400 max-w-xl text-sm">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.list.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#0F0F0F] border border-neutral-900 p-8 rounded-2xl hover:border-[#82CD27]/40 transition-all group"
              >
                <div className="text-3xl font-black text-[#82CD27] font-mono mb-4">
                  {s.rate}
                </div>
                <h3 className="text-lg font-bold tracking-tight uppercase text-white mb-2 group-hover:text-[#82CD27] transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION TARIFS / PRICING (Priorité Demandée) --- */}
      <section
        id="tarifs"
        className="py-28 px-6 md:px-16 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter text-center uppercase mb-16">
            {t.pricing.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.pricing.tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border transition-all ${idx === 1 ? "border-[#82CD27] bg-[#82CD27]/5 shadow-[0_0_50px_rgba(130,205,39,0.1)]" : "border-neutral-800 bg-[#0F0F0F]"}`}
              >
                <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  {tier.name}
                </h4>
                <div className="text-4xl font-black text-white mb-6 tracking-tight">
                  {tier.price}
                </div>

                <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                  {tier.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-3 text-xs text-neutral-300"
                    >
                      <Check size={14} className="text-[#82CD27]" /> {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all
                  ${idx === 1 ? "bg-[#82CD27] text-black hover:bg-white" : "bg-white text-black hover:bg-[#82CD27]"}`}
                >
                  {t.pricing.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION FAQ (Priorité Demandée) --- */}
      <section
        id="faq"
        className="py-28 px-6 md:px-16 border-t border-white/5 bg-[#080808]"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter text-center uppercase mb-16">
            {t.faq.title}
          </h2>

          <div className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <div
                key={idx}
                className="border border-neutral-900 bg-[#0F0F0F] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 flex justify-between items-center text-left text-base font-bold text-white hover:text-[#82CD27] transition-colors"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <Minus size={16} className="text-[#82CD27]" />
                  ) : (
                    <Plus size={16} />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pt-2 text-xs text-neutral-400 leading-relaxed border-t border-white/5">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER BRUTALISTE --- */}
      <footer className="py-16 border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <span className="font-black text-lg tracking-tighter text-white uppercase block">
              ASIKIRE & CO
            </span>
            <span className="text-[10px] text-neutral-500 font-mono">
              HIGH-END BUSINESS & DIGITAL CONSULTING
            </span>
          </div>
          <p className="text-[11px] font-mono text-neutral-600 tracking-widest uppercase">
            © {new Date().getFullYear()} ASIKIRE & CO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
