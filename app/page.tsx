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
  Menu,
  X,
  Megaphone,
  Handshake,
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
      tag: "CONSULTING",
      title: "TROUVEZ PLUS DE CLIENTS",
      desc: "Notre offre unique permet aux entreprises de services de se faire connaître, d'attirer des prospects qualifiés et de maximiser leurs ventes. Plus vous êtes visible, plus votre rentabilité augmente.",
      video: "Vidéo de présentation",
      cta: "COMMENCER",
      stats: { clients: "Clients Actifs", global: "Portée Globale" },
    },
    services: {
      title: "SERVICES D'OPTIMISATION",
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
          price: "390$",
          features: [
            "Audit de marketing",
            "Plan d'action commercial",
            "Support email",
            "Gestion des posts sur les réseaux sociaux",
            "Création d'une Landing Page",
          ],
        },
        {
          name: "Premium Growth (Ads + Web)",
          price: "1490$",
          features: [
            "Campagnes Ads incluses",
            "Création de Landing Page",
            "Suivi des conversions",
            "Support prioritaire WhatsApp",
            "Rapport de performance hebdomadaire",
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
      tag: "CONSULTING",
      title: "GET MORE CUSTOMERS",
      desc: "Our unique offer is to get more people to know about you and get those who are interested about your stuff to contact you. The more they are, the more you can sell and get money.",
      video: "Promotion video",
      cta: "GET STARTED",
      stats: { clients: "Active Clients", global: "Global Reach" },
    },
    services: {
      title: "OPTIMIZATION SERVICES",
      subtitle:
        "Three fundamental service pillars designed essential for business scaling.",
      list: [
        {
          rate: "100%",
          name: "BUSINESS CONSULTING",
          desc: "Overall marketing optimization to maximize your corporate profitability.",
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
          price: "$390",
          features: [
            "Marketing Audit",
            "Commercial Action Plan",
            "Email Support",
            "Manage posts on social media",
            "Landing Page Creation",
          ],
        },
        {
          name: "Premium Growth (Ads + Web)",
          price: "$1490",
          features: [
            "Managed Ads Campaigns",
            "High-Converting Landing Page",
            "Conversion Tracking",
            "Priority WhatsApp Support",
            "Weekly Performance Report",
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

// Petit tableau d'icônes pour mapper dynamiquement selon l'index
const serviceIcons = [
  <Target size={48} className="text-black" />,
  <Handshake size={48} className="text-[#82CD27] mx-auto mb-6" />,
  <Megaphone size={48} className=" text-[#82CD27] mb-6" />,
];

export default function AsikireLandingPage() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const t = content[lang];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans tracking-tight selection:bg-[#82CD27] selection:text-black
      ${theme === "dark" ? "bg-[#0B0B0B] text-white" : "bg-[#F5F5F7] text-neutral-900"}`}
    >
      {/* --- REPRO DE L'OUTLINE BORDURE DE L'IMAGE --- */}
      <div className="fixed inset-4 border border-white/5 rounded-[32px] pointer-events-none z-50 hidden md:block" />

      {/* --- HEADER NAVBAR --- */}
      <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-6 md:px-16 py-6 flex items-center justify-between">
        {/* LOGO ASIKIRE & CO */}
        <div className="flex items-center gap-2 relative z-50">
          <img
            src="/logo.jpeg"
            className="h-8 border border-white/20 rounded-full"
            alt="Logo Asikire"
          />
          <span className="font-black text-lg tracking-tighter uppercase">
            ASIKIRE & CO
          </span>
        </div>

        {/* LIENS DE NAVIGATION (DESKTOP) */}
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

        {/* CONTRÔLES (DESKTOP) & HAMBURGER (MOBILE) */}
        <div className="flex items-center gap-4 relative z-50">
          {/* Ces boutons restent visibles sur Desktop uniquement pour épurer le mobile */}
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
          </div>

          {/* Bouton Contact (Desktop) */}
          <a
            href="/contact"
            className="hidden sm:inline-block bg-white text-black text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#82CD27] transition-all"
          >
            {t.nav.contact}
          </a>

          {/* BOUTON HAMBURGER (Visible uniquement sur Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#82CD27] transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MENU EN PLEIN ÉCRAN POUR MOBILE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`fixed inset-0 z-40 flex flex-col justify-between p-8 pt-32 md:hidden backdrop-blur-xl
          ${theme === "dark" ? "bg-[#0B0B0B]/95" : "bg-[#F5F5F7]/95"}`}
            >
              {/* Liens de Navigation Mobile */}
              <nav className="flex flex-col gap-6 text-2xl font-black tracking-tighter uppercase">
                <a
                  href="#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#82CD27] transition-colors"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#tarifs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#82CD27] transition-colors"
                >
                  {t.nav.pricing}
                </a>
                <a
                  href="#faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#82CD27] transition-colors"
                >
                  {t.nav.faq}
                </a>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#82CD27]"
                >
                  {t.nav.contact}
                </a>
              </nav>

              {/* Barre de contrôles basse (Langues et Thème intégrés en bas du menu mobile) */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <button
                  onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                  className="text-sm font-mono font-bold tracking-wider flex items-center gap-2 text-neutral-400"
                >
                  <Globe size={16} /> {lang.toUpperCase()}
                </button>

                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-3 rounded-full border border-neutral-800"
                >
                  {theme === "dark" ? (
                    <Sun size={16} className="text-[#82CD27]" />
                  ) : (
                    <Moon size={16} />
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- HERO SECTION (Identique à l'image principale) --- */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-16 overflow-hidden">
        {/* Background circuit/glow vert */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,205,39,0.06),transparent_65%)] pointer-events-none" />

        {/* Éléments du haut de l'image (Promotion Video) */}
        {/* --- BOUTON DE DÉCLENCHEMENT --- */}
        <div className="w-full max-w-7xl mx-auto flex justify-start items-center gap-4 relative z-10">
          <button
            onClick={() => setIsVideoOpen(true)}
            className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center bg-black/40 hover:scale-105 transition-transform group cursor-pointer"
          >
            <Play
              size={14}
              className="fill-white translate-x-[1px] group-hover:text-[#82CD27] transition-colors"
            />
          </button>
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
            {t.hero.video}
          </span>
        </div>

        {/* --- INTERFACE DU MODAL ANIME --- */}
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)} // Ferme le modal si on clique à côté de la vidéo
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique sur la vidéo elle-même
                className="relative w-full max-w-4xl aspect-video bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(130,205,39,0.15)]"
              >
                {/* Bouton pour fermer en haut à droite */}
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-4 right-4 z-10 text-white/70 hover:text-[#82CD27] bg-black/50 p-2 rounded-full text-xs font-mono tracking-widest uppercase transition-colors"
                >
                  ✕ CLOSE
                </button>

                {/* OPTION A : Si vous utilisez une vidéo locale (ex: public/presentation.mp4) */}
                <video
                  src={
                    lang === "fr"
                      ? "/presentation-fr.mp4"
                      : "/presentation-en.mp4"
                  }
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />

                {/* OPTION B : Si vous utilisez YouTube (Commentez la balise <video> et décommentez celle-ci) */}
                {/* <iframe
          src={
    lang === 'fr' 
      ? 'https://www.youtube.com/embed/VOTRE_ID_YOUTUBE_FR?autoplay=1' 
      : 'https://www.youtube.com/embed/VOTRE_ID_YOUTUBE_EN?autoplay=1'
  }
          title="Asikire & Co Presentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        /> 
        */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TEXTE CENTRAL GIGANTESQUE "CONSULTING" + GRAPHIQUE VERT */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10 py-6 md:py-12 px-4">
          {/* Conteneur principal adaptatif : empilé sur mobile, relatif sur desktop */}
          <div className="w-full flex flex-col md:relative md:block items-center justify-center">
            {/* Graphique 3D : Au-dessus sur mobile (flux normal), Absolu centré sur Desktop */}
            <div className="md:absolute md:inset-0 flex items-center justify-center pointer-events-none z-20 mb-6 md:mb-0 transform md:translate-y-16">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[url('/graph-3d.png')] bg-contain bg-no-repeat bg-center transition-all
          ${
            theme === "dark"
              ? "drop-shadow-[0_0_50px_rgba(130,205,39,0.3)] mix-blend-screen"
              : "drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] mix-blend-normal"
          }`}
              />
            </div>

            {/* Titre : Gère le texte long, la lisibilité du thème clair et supprime les espaces inutiles */}
            <h1
              className={`w-full text-3xl sm:text-5xl md:text-8xl font-black leading-tight md:leading-none tracking-tighter text-center uppercase select-none break-words relative z-10 max-w-6xl mx-auto
      ${
        theme === "dark"
          ? "text-transparent bg-clip-text bg-gradient-to-b from-white to-[#1F1F1F]"
          : "text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-500 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]"
      }`}
            >
              {t.hero.title}
            </h1>
          </div>

          {/* BOUTON "GET STARTED" VERT LIME - Espacement réduit sur mobile pour compacter le tout */}
          <div className="mt-8 md:mt-24 relative z-30">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#82CD27] text-black font-black uppercase text-sm tracking-widest px-10 py-4 md:px-12 rounded-xl shadow-[0_0_40px_rgba(130,205,39,0.45)] hover:bg-white hover:shadow-white/20 transition-all text-center"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>

        {/* BAS DE LA SECTION HERO (Prix fictif d'accroche / Liens directs / Compteurs) */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-end gap-6 relative z-10 border-t border-white/5 pt-4">
          <div>
            <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-1">
              BUSINESS {t.hero.title}
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
              <p className="text-xl font-black tracking-tighter">3+</p>
              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                {t.hero.stats.clients}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION SERVICES & METRICS (Inspiré par le bas gauche de l'image) --- */}
      <section
        id="services"
        className={`py-24 px-4 md:px-16 border-t border-b transition-colors duration-300
        ${theme === "dark" ? "bg-[#080808] border-white/5" : "bg-[#F5F5F7] border-neutral-200"}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* EN-TÊTE DE LA SECTION */}
          <div className="mb-16 border-l-2 border-[#82CD27] pl-4">
            <span className="text-[#82CD27] font-mono text-xs tracking-widest uppercase block mb-2">
              SERVICES & EXPERTISES
            </span>
            <p
              className={`max-w-xl text-sm font-medium ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
            >
              {t.services.subtitle}
            </p>
          </div>

          {/* TRIPTYQUE BRUTALISTE (Inspiré de ads.png) */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 rounded-3xl overflow-hidden border transition-all duration-300
          ${theme === "dark" ? "bg-[#0B0B0B] border-neutral-900" : "bg-white border-neutral-200 shadow-xl"}`}
          >
            {t.services.list.map((s: any, idx: number) => {
              // Bloc 1 : Alignement à gauche avec grosses métriques
              if (idx === 0) {
                return (
                  <div
                    key={idx}
                    className="p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-950/40 dark:border-neutral-900/60 relative"
                  >
                    <div>
                      {serviceIcons[1]}
                      <h3
                        className={`text-2xl sm:text-3xl font-black tracking-tighter uppercase leading-none mb-6 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
                      >
                        {s.name}
                      </h3>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-neutral-900/20 dark:border-white/5">
                      <div>
                        <div className="text-3xl font-mono font-black text-[#82CD27] leading-none mb-1">
                          {s.rate || "100%"}
                        </div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                          {s.desc?.substring(0, 30)}...
                        </p>
                      </div>
                      <div>
                        <div
                          className={`text-lg font-mono font-bold ${theme === "dark" ? "text-white" : "text-neutral-800"}`}
                        >
                          0.5M+
                        </div>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              // Bloc 2 : Centré, épuré avec l'icône de poignée de main
              if (idx === 1) {
                return (
                  <div
                    key={idx}
                    className="p-8 md:p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-neutral-950/40 dark:border-neutral-900/60 bg-black/[0.02] dark:bg-white/[0.01]"
                  >
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-8">
                      ADVERTISING
                    </span>
                    <div className="hover:scale-105 transition-transform duration-300">
                      {serviceIcons[2]}
                    </div>
                    <h3
                      className={`text-lg font-black uppercase tracking-tight mb-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
                    >
                      {s.name}
                    </h3>
                    <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                );
              }

              // Bloc 3 : Visuel fort à droite avec la demi-sphère texturée
              return (
                <div
                  key={idx}
                  className="p-8 md:p-12 flex flex-col justify-between relative overflow-hidden h-[380px] md:h-auto bg-black/[0.04] dark:bg-black/[0.2]"
                >
                  {/* La Sphère Graphique Verte (Fidèle au côté droit de ads.png) */}
                  <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-[#82CD27] to-[#5ba314] shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.6),0_10px_40px_rgba(130,205,39,0.3)] flex items-center justify-center p-8 transform translate-x-4 md:translate-x-8">
                    {/* Lignes de texture discrètes croisées sur la sphère */}
                    <div className="absolute inset-0 border-r border-b border-black/10 rounded-full rotate-45" />
                    <div className="bg-white/90 p-4 rounded-full shadow-lg relative z-10">
                      {serviceIcons[0]}
                    </div>
                  </div>

                  <div className="relative z-10 max-w-[60%] md:max-w-[55%]">
                    <h3
                      className={`text-xl font-black uppercase tracking-tight mb-3 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
                    >
                      {s.name}
                    </h3>
                  </div>

                  <div className="relative z-10 max-w-[80%] md:max-w-[70%] mt-auto">
                    <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
