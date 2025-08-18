"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";

// Navbar Vercel-style responsive avec menu hamburger
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur border-b border-gray-200 fixed top-0 left-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        <span className="text-2xl font-black text-black tracking-tight">
          AsYouCode
        </span>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 ">
          <li>
            <a
              href="#presentation"
              className="hover:text-black transition-colors text-lg text-gray-700 font-light"
            >
              Présentation
            </a>
          </li>
          <li>
            <a
              href="#matieres"
              className="hover:text-black transition-colors text-lg text-gray-700 font-light"
            >
              Matières
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-black transition-colors text-lg text-gray-700 font-light"
            >
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block bg-black text-white px-5 py-2 rounded-md shadow hover:bg-gray-900 transition-colors font-semibold"
        >
          Contactez-nous
        </a>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          <svg
            className="w-7 h-7 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-gray-200 shadow">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium text-base">
            <li>
              <a
                href="#presentation"
                className="hover:text-black transition-colors text-lg text-gray-700 font-light"
                onClick={() => setOpen(false)}
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                href="#matieres"
                className="hover:text-black transition-colors text-lg text-gray-700 font-light"
                onClick={() => setOpen(false)}
              >
                Matières
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-black transition-colors text-lg text-gray-700 font-light"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-black text-white px-5 py-2 rounded-md shadow hover:bg-gray-900 transition-colors font-semibold"
                onClick={() => setOpen(false)}
              >
                Contactez-nous
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

// Vercel-style CTA button
const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href="#contact"
    className={`inline-block bg-black text-white px-8 py-3 rounded-md shadow font-semibold text-base hover:bg-gray-900 transition-colors ${className}`}
  >
    Contactez-nous
  </a>
);

// Header section, full width, symmetric padding
const Header = () => (
  <header className="bg-gradient-to-br from-[#f8fafc] via-[#f3f4f6] to-[#fef9c3] pt-16 pb-20 text-black border-b border-gray-200">
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight max-w-2xl">
        Apprenez à coder{" "}
        <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 px-3 py-1 rounded-lg shadow font-extrabold">
          simplement
        </span>
      </h1>
      <p className="text-2xl text-gray-700 mb-8 font-light max-w-xl mx-auto">
        Passe du scroll à la création.
        <br />
        <span className="text-lg text-gray-600">
          Une formation où vous codez, construisez et apprennez en réalisant des
          projets concrets en ligne applications mobiles ou sites web, en
          partant même de zéro, contactez-nous si vous êtes prêt à lancer votre
          carrière.
          <br />
          <span className="font-semibold text-black">
            Essayez gratuitement.
          </span>
        </span>
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs mx-auto">
        <a
          href="#contact"
          className="w-full sm:w-auto inline-block bg-gradient-to-r from-black via-gray-900 to-gray-700 text-white px-6 py-2.5 rounded-lg shadow-md font-semibold text-base tracking-wide hover:scale-105 hover:bg-black transition-all duration-200"
        >
          Discuter avec un formateur
        </a>
        <a
          href="#presentation"
          className="w-full sm:w-auto inline-block bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 text-black px-6 py-2.5 rounded-lg shadow-md font-semibold text-base tracking-wide border border-yellow-300 hover:bg-yellow-200 hover:scale-105 transition-all duration-200"
        >
          Découvrir la plateforme
        </a>
      </div>
    </div>
  </header>
);

// Présentation section, symmetric
const Presentation = () => (
  <section
    id="presentation"
    className="py-20 bg-white border-b border-gray-100"
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
      <div className="flex-1 bg-white rounded-xl p-10 shadow border border-gray-100">
        <h2 className="text-3xl font-black mb-4 text-black tracking-tight">
          Présentation
        </h2>
        <p className="text-xl text-gray-700 mb-6 font-light">
          En quelques semaines ou mois, transforme tes idées en applications
          concrètes : apprends à coder et réalise des projets extraordinaires.
          Aujourd&apos;hui, l&apos;IA révolutionne le numérique, rendant tes
          compétences immédiatement actionnables, sans pression, et sans payer
          1500 $ pour un an de formation lente. Profite de cette ère pour créer
          vite, mieux, et avancer.
        </p>
        <CTAButton />
      </div>
      <Image
        width={400}
        height={300}
        src="/presentation.jpg"
        alt="Présentation"
        className="rounded-xl shadow w-full max-w-md object-fit h-72 border border-gray-200"
      />
    </div>
  </section>
);

const LearningTopics = React.lazy(() => import("./LearningTopics"));

// Contact section with "Ouvrir le formulaire" button and persuasive text
const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [globalError, setGlobalError] = useState("");

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-[#fef9c3] via-[#f3f4f6] to-[#f8fafc]"
    >
      <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-12 border border-yellow-100 text-center backdrop-blur-sm">
        <h2 className="text-4xl font-black mb-4 text-black tracking-tight">
          Prêt à transformer votre avenir&nbsp;?
        </h2>
        <div className="text-lg text-gray-700 mb-8 leading-relaxed">
          <span className="block mb-2">
            <span className="inline-block bg-yellow-100 text-yellow-900 font-bold px-3 py-1 rounded-full mb-2">
              Offre exclusive
            </span>
          </span>

          <br />
          <span className="text-gray-600">
            <b>
              Arrêtez de perdre du temps à chercher des tutos à l&apos;aveugle.
            </b>
            <br /> Contactez-nous dès maintenant pour découvrir comment
            AsYouCode peut vous aider à atteindre vos objectifs gratuitement ou
            encore pour obtenir l&apos;offre payante.
            <br />
          </span>
          <br />
          <div className=" bg-yellow-200 border border-yellow-400 rounded-xl shadow p-6 text-center">
            <h3 className="text-2xl font-bold text-black mb-2">
              Offre exclusive
            </h3>
            <p className="text-4xl font-extrabold text-yellow-900 mb-2">99$</p>
            <p className="text-gray-700 mb-4">
              1 mois d&apos;apprentissage + 1 mois d&apos;exercices + 1 mois de
              projets concrets
            </p>
            <span className="inline-block bg-yellow-300 text-yellow-900 font-bold px-3 py-1 rounded-full">
              C&apos;est garantie.
            </span>
          </div>
        </div>
        {!showForm && (
          <button
            className="inline-block bg-gradient-to-r from-black via-gray-900 to-gray-700 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg hover:scale-105 hover:bg-black transition-all duration-200"
            onClick={() => setShowForm(true)}
          >
            Ouvrir le formulaire
          </button>
        )}
        {showForm && (
          <form
            className="flex flex-col gap-6 mt-8"
            onSubmit={async (e) => {
              e.preventDefault();
              setErrors({});
              setGlobalError("");
              setIsSubmitting(true);

              const form = e.currentTarget;
              const data = {
                name: (form.elements.namedItem("name") as HTMLInputElement)
                  ?.value,
                email: (form.elements.namedItem("email") as HTMLInputElement)
                  ?.value,
                message: (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                )?.value,
              };

              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });

                const json = await res.json();

                if (!res.ok) {
                  if (json.errors) {
                    setErrors(json.errors);
                  } else if (json.error) {
                    setGlobalError(json.error);
                  } else {
                    setGlobalError("Une erreur inattendue s'est produite.");
                  }
                  return;
                }

                form.reset();
                alert("Message envoyé !");
                setShowForm(false);
              } catch {
                setGlobalError("Erreur de connexion au serveur.");
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                className={`px-5 py-3 rounded border ${
                  errors.name ? "border-red-400" : "border-yellow-200"
                } focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-400" : "focus:ring-yellow-400"
                } text-lg bg-white/80 text-black`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                className={`px-5 py-3 rounded border ${
                  errors.email ? "border-red-400" : "border-yellow-200"
                } focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-400" : "focus:ring-yellow-400"
                } text-lg bg-white/80 text-black`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <textarea
                name="message"
                placeholder="Votre message"
                className={`px-5 py-3 rounded border ${
                  errors.message ? "border-red-400" : "border-yellow-200"
                } focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "focus:ring-red-400"
                    : "focus:ring-yellow-400"
                } text-lg bg-white/80 text-black`}
                rows={4}
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {globalError && (
              <p className="text-red-500 text-sm">{globalError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-block bg-gradient-to-r from-black via-gray-900 to-gray-700 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg hover:scale-105 hover:bg-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white text-gray-700 py-10 mt-0 border-t border-gray-100">
    <div className="max-w-7xl mx-auto text-center text-lg font-light px-6">
      <p>&copy; 2025 AsYouCode. Tous droits réservés.</p>
      <div className="mt-4">
        <CTAButton />
      </div>
    </div>
  </footer>
);

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="pt-14">
        <Header />
        <Presentation />
        <Suspense
          fallback={
            <div className="text-center py-10 text-lg text-gray-500">
              Chargement des sujets d&apos;apprentissage...
            </div>
          }
        >
          <div id="matieres">
            <LearningTopics />
          </div>
        </Suspense>
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
