"use client";
import React, { useState } from "react";
import { ArrowLeft, Globe, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const translations = {
  fr: {
    back: "Retour",
    tag: "FORMULAIRE DE CONTACT",
    title: "CONTACTEZ-NOUS",
    namePlace: "Nom complet",
    emailPlace: "Adresse email",
    phonePlace: "Numéro de téléphone",
    msgPlace: "Votre Message",
    btn: "CONTACT",
    sending: "ENVOI...",
    success: "Message envoyé avec succès !",
    error: "Une erreur est survenue.",
  },
  en: {
    back: "Back",
    tag: "CONTACT FORMS",
    title: "CONTACT US",
    namePlace: "Name",
    emailPlace: "Email",
    phonePlace: "Phone",
    msgPlace: "Your Message",
    btn: "CONTACT",
    sending: "SENDING...",
    success: "Message sent successfully!",
    error: "An error occurred.",
  },
};

export default function ContactPage() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans flex flex-col justify-between p-6 md:p-12 relative overflow-hidden">
      {/* Halo lumineux vert derrière le logo (Style exact de l'image contact.png) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#82CD27]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- BARRE SUPÉRIEURE --- */}
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center z-10">
        <a
          href="/"
          className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 hover:text-[#82CD27] transition-colors uppercase"
        >
          <ArrowLeft size={14} /> {t.back}
        </a>
        <button
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
          className="text-xs font-mono tracking-widest uppercase hover:text-[#82CD27] transition-colors flex items-center gap-1"
        >
          <Globe size={14} /> {lang.toUpperCase()}
        </button>
      </header>

      {/* --- CONTENU PRINCIPAL (LAYOUT DE CONTACT.PNG) --- */}
      <main className="w-full max-w-5xl mx-auto flex-grow flex items-center justify-center z-10 py-12">
        <div className="w-full grid md:grid-cols-2 gap-16 items-center bg-[#050505]/60 border border-white/5 p-8 md:p-16 rounded-[24px] backdrop-blur-md">
          {/* CÔTÉ GAUCHE : BALISE DU LOGO VERT PRÊTE */}
          <div className="flex justify-center items-center">
            {/* Une fois votre logo vert enregistré, placez-le dans public/logo-green.png */}
            <div className="relative w-full max-w-[320px] aspect-square group">
              <Image
                src="/logo-green.png"
                alt="Asikire & Co Logo Green"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_30px_rgba(130,205,39,0.2)]"
                // En attendant d'avoir le fichier, un fallback visuel est géré ci-dessous
                onError={(e) => {
                  // Optionnel : remplace par un bloc de texte stylisé si l'image est manquante au départ
                  e.currentTarget.style.display = "none";
                }}
              />
              {/* NOTE : Retirez ce bloc div ci-dessous dès que vous avez mis votre image /logo-green.png */}
              {/* <div className="absolute inset-0 flex flex-col items-center justify-center border border-dashed border-[#82CD27]/30 rounded-xl bg-black/40 p-4 text-center">
                <span className="text-[#82CD27] font-black text-6xl tracking-tighter">
                  AC
                </span>
                <span className="text-[10px] font-mono text-neutral-500 mt-2">
                  Placez votre image dans public/logo-green.png
                </span>
              </div> */}
            </div>
          </div>

          {/* CÔTÉ DROIT : LE FORMULAIRE DE CONTACT.PNG */}
          <div className="flex flex-col justify-center">
            <span className="text-[#82CD27] font-mono text-[10px] tracking-[0.25em] uppercase mb-2 block">
              {t.tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
              {t.title}
            </h1>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border border-[#82CD27]/20 bg-[#82CD27]/5 p-6 rounded-xl text-center"
              >
                <CheckCircle2
                  size={32}
                  className="text-[#82CD27] mx-auto mb-3"
                />
                <p className="text-sm font-medium">{t.success}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder={t.namePlace}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#111111]/80 border border-neutral-800 rounded-lg px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#82CD27] transition-colors"
                />

                <input
                  type="email"
                  required
                  placeholder={t.emailPlace}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#111111]/80 border border-neutral-800 rounded-lg px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#82CD27] transition-colors"
                />

                <input
                  type="tel"
                  placeholder={t.phonePlace}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-[#111111]/80 border border-neutral-800 rounded-lg px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#82CD27] transition-colors"
                />

                <textarea
                  rows={4}
                  required
                  placeholder={t.msgPlace}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#111111]/80 border border-neutral-800 rounded-lg px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#82CD27] transition-colors resize-none"
                />

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-xs font-mono">
                    <AlertCircle size={14} /> <span>{t.error}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[#82CD27] hover:bg-white text-black font-black uppercase text-xs tracking-widest px-8 py-3.5 rounded-lg shadow-[0_0_30px_rgba(130,205,39,0.2)] transition-all disabled:opacity-50"
                  >
                    {status === "loading" ? t.sending : t.btn}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* --- FOOTER RESTREINT --- */}
      <footer className="w-full text-center text-[10px] font-mono text-neutral-600 tracking-widest uppercase z-10">
        © {new Date().getFullYear()} Asikire & Co
      </footer>
    </div>
  );
}
