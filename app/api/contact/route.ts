import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const {
    name,
    email: rawEmail,
    phone,
    message,
    lang = "fr",
  } = await req.json();

  // 1. Validation des champs
  const errors: Record<string, string> = {};
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Le nom est requis (au moins 2 caractères).";
  }
  const email = (rawEmail || "").trim();
  if (
    !email ||
    typeof email !== "string" ||
    !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(email)
  ) {
    errors.email = "Email invalide.";
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.message = "Le message doit contenir au moins 10 caractères.";
  }
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // 2. Création du transporteur Nodemailer
  // Remplacez la création du transporteur par celle-ci :
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true pour le port 465, false pour le port 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Évite les blocages liés aux certificats locaux en développement
    },
  });

  // 3. Email envoyé à l'administrateur (Toujours structuré de la même manière)
  try {
    await transporter.sendMail({
      from: `"Asikire & Co Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `🔥 Nouveau Prospect [${lang.toUpperCase()}] - Asikire & Co`,
      text: `Nouveau message reçu (${lang}) :\n\nNom : ${name}\nEmail : ${email}\nTéléphone : ${phone || "Non renseigné"}\n\nMessage :\n${message}`,
      html: `
        <div style="font-family:sans-serif;font-size:1rem;color:#111;max-width:600px;margin:auto;">
          <h2 style="color:#82CD27;border-bottom:1px solid #eee;padding-bottom:10px;">Nouveau prospect Asikire & Co (${lang.toUpperCase()})</h2>
          <p><b>Nom :</b> ${name}</p>
          <p><b>Email :</b> ${email}</p>
          <p><b>Téléphone :</b> ${phone || "Non renseigné"}</p>
          <p><b>Message :</b><br/>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email à l'administrateur." },
      { status: 500 },
    );
  }

  // 4. Configuration des contenus multilingues pour le client
  const clientEmails = {
    fr: {
      subject: "Nous avons bien reçu votre demande – Asikire & Co 🚀",
      text: `Bonjour ${name},\n\nMerci de nous avoir contactés !\n\nNous avons bien reçu vos objectifs concernant le développement de votre entreprise. Notre équipe analyse votre demande et reviendra vers vous sous 24 heures.\n\nPour rappel, voici comment Asikire & Co propulse votre activité :\n1️⃣ Business Consulting : Diagnostic et optimisation.\n2️⃣ Advertising : Campagnes d'acquisition ciblées.\n3️⃣ SaaS & Web Development : Solutions technologiques modernes.\n\nVotre message :\n"${message}"\n\nÀ très vite,\nL'équipe Asikire & Co`,
      html: `
        <div style="font-family:sans-serif;font-size:1rem;color:#222;max-width:600px;margin:auto;line-height:1.6;">
          <h2>Merci pour votre message, ${name} 🚀</h2>
          <p>Chez <b>Asikire & Co</b>, notre objectif est d'aider votre entreprise de services à se faire connaître et à convertir l'intérêt de vos prospects en revenus concrets.</p>
          <div style="background:#f7fafc;padding:16px 20px;border-radius:8px;margin:24px 0;border-left:4px solid #82CD27;">
            <b>Nos 3 piliers de croissance :</b>
            <ul style="margin:12px 0;padding-left:20px;color:#444;">
              <li><b>Business Consulting :</b> Maximiser l'efficacité de vos structures.</li>
              <li><b>Advertising :</b> Capturer l'attention d'audiences qualifiées.</li>
              <li><b>SaaS & Web Development :</b> Développer des solutions technologiques modernes.</li>
            </ul>
          </div>
          <p>Un consultant prendra contact avec vous d'ici 24 heures.</p>
        </div>`,
    },
    en: {
      subject: "We have received your request – Asikire & Co 🚀",
      text: `Hello ${name},\n\nThank you for reaching out to us!\n\nWe have successfully received your business growth goals. Our team is analyzing your request and will get back to you within 24 hours.\n\nAs a reminder, here is how Asikire & Co drives your business forward:\n1️⃣ Business Consulting: Diagnostics and structural optimization.\n2️⃣ Advertising: High-converting acquisition campaigns.\n3️⃣ SaaS & Web Development: High-performance and user-friendly digital tools.\n\nYour message:\n"${message}"\n\nSee you soon,\nThe Asikire & Co Team`,
      html: `
        <div style="font-family:sans-serif;font-size:1rem;color:#222;max-width:600px;margin:auto;line-height:1.6;">
          <h2>Thank you for your message, ${name} 🚀</h2>
          <p>At <b>Asikire & Co</b>, our goal is to help your service-based business get discovered and convert client acquisition into real revenue.</p>
          <div style="background:#f7fafc;padding:16px 20px;border-radius:8px;margin:24px 0;border-left:4px solid #82CD27;">
            <b>Our 3 Growth Pillars:</b>
            <ul style="margin:12px 0;padding-left:20px;color:#444;">
              <li><b>Business Consulting:</b> Maximize corporate structure and efficiency.</li>
              <li><b>Advertising:</b> Target and capture high-intent audiences.</li>
              <li><b>SaaS & Web Development:</b> Build modern, scalable custom digital solutions.</li>
            </ul>
          </div>
          <p>An expert advisor will contact you within the next 24 hours.</p>
        </div>`,
    },
  };

  const currentEmail = lang === "en" ? clientEmails.en : clientEmails.fr;

  // 5. Email de confirmation automatique envoyé au client (FR ou EN)
  try {
    await transporter.sendMail({
      from: `"Asikire & Co" <${process.env.SMTP_USER}>`,
      to: email,
      subject: currentEmail.subject,
      text: currentEmail.text,
      html: currentEmail.html,
    });
  } catch (error) {
    // Échec silencieux
    console.error("Détail de l'erreur Nodemailer :", error);

    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email à l'administrateur." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
