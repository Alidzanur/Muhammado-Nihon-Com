/*
  PT Muhammad Nihon Istiqomah — Landing Page (React + Tailwind)
  --------------------------------------------------------------
  • Design goals: Professional, trustworthy, modern, clean, supportive, hopeful.
  • Palette:
      - Accent Red: #BC002D (primary CTA)  | Alt: #D90429
      - Base: #FFFFFF, Section BG: #F5F7FA
      - Text: #2D3748 (body), Navy: #1A2B48 (headings)
  • Typography:
      - Headings: Poppins (600/700)
      - Body: Lato (400/500)
    -> Load fonts in your app root (e.g. <link href="https://fonts.googleapis.com/..." />)
  • Components: shadcn/ui (Card, Accordion, Button) + lucide-react icons
  • Notes:
      - Replace all placeholder images with REAL photos of training, alumni, kegiatan, dokumentasi legalitas.
      - Insert legalitas numbers (izin LPK, kemitraan) in the Footer’s Legal box.
      - Wire the WhatsApp CTA with your number using wa.me and pre-filled message.
      - Keep red for CTA/links only (avoid large red backgrounds).
*/

import React from "react";
// Import komponen UI lokal (dibuat sederhana di src/components/ui/)
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import {
  ShieldCheck,
  Handshake,
  HeartHandshake,
  BookOpen,
  Users,
  MapPin,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  PlaneTakeoff,
  GraduationCap,
  ChefHat,
  Factory,
  Video,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionFadeIn from "./animations/SectionFadeIn.jsx";
import { StaggerContainer, childVariants } from "./animations/StaggerChildren.jsx";
import { ScrollProgressBar } from "./animations/ScrollProgressBar.jsx";
import { issuesData, uspData, programData, testimonials, processSteps, faqData } from "../data/landingData.js";

const WHATSAPP_NUMBER = "62812XXXXXXX"; // ← ganti dengan nomor WA admin (tanpa +)
const WA_TEXT = encodeURIComponent(
  "Assalamu'alaikum, saya ingin konsultasi program kerja ke Jepang di PT MNI. Mohon informasinya."
);
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT}`;

// Logo PT MNI (embedded as data URI) — untuk produksi, taruh file di /public/logo-mni.png lalu ganti LOGO_SRC ke "/logo-mni.png"
const LOGO_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAD/CAYAAAAquMkCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFxQAAAAXFAAczJb8AAAF+0lEQVR4nO3cS5KkOBQFUZ1vHsg0FAWqJx1j8mXV8xdl6aFAo6dPUmI3w0hUoHh5dZ7bQ3g0pAn6Lx7r8N2aq3Lx8fHh5c9tHj9nJbWq5dX4a3u+0s4cP7ZC0m2vQp4n1vQxU1vA1V3cQpq1b1iY3GkqfY0k/2J0kA9oV3v4V5QbN0+eY3Y5qk1m0qk3m2kE2zvZ3m2t3m3V6m2o0m2Y6m2e0m2X0m2Z0m2X0m2Z0m2X0m2Z0m2X0m2Z0m2X0m2Z0m2X0m2Z0m2X0m2Z0m2X0m2Z0m2X0m2Z0m2X0m2Z0m2X0m2Z0m2X0m2bT+v3k2O6lN2lqv3r3jv0d3yq4lM8oW8tYb1Vq2r8H1b2p1k3rWm6m9mcv7c0kO1m6o9mYtqg3m59QjHhYJ8y2G1f0d2Y3u6F3V+2t3a3m3mY7mZ0mXx3f7+oYF6tVvVqP1zWwN8f4yWjK0k9Gg9A7cU+F1y5r7cZB9p+X+0ryZkWQm2c8nPvKZl4dG7H3O1W4p3o8V7a2g7mTg5r4bqvK3zQ7U1mP3m7mVYk5d1YpGm4m8c1p0FQ5sJXx2sC1k9M7s2aA1c7m+X1f0c/3s0lY4z2G+WkG8yQyK8j2o4s1bWJ5k9m4d2G4q2V0o1x1U5C7wW2Y8mP8mX3aWbXW2m1m3m3o+QH1gH3gE3iH2mF3mG2mH3mI2mJ3mK2mL3mM2mN3mO2mP3mQ2mR3mS2mT3mU2mV3mW2mX3mY2mZ3ma2mb3mc2md3me2mf3mg2mh3mi2mj3mk2ml3mm2mn3mo2mp3mq2mr3ms2mt3mu2mv3mw2mx3my2mz3m02m13m22m33m42m53m62m73m82m93nA2nB3nC2nD3nE2nF3nG2nH3nI2nJ3nK2nL3nM2nN3nO2nP3nQ2nR3nS2nT3nU2nV3nW2nX3nY2nZ3na2nb3nc2nd3ne2nf3ng2nh3ni2nj3nk2nl3nm2nn3no2np3nq2nr3ns2nt3nu2nv3nw2nx3ny2nz3oA2oB3oC2oD3oE2oF3oG2oH3oI2oJ3oK2oL3oM2oN3oO2oP3oQ2oR3oS2oT3oU2oV3oW2oX3oY2oZ3oa2ob3oc2od3oe2of3og2oh3oi2oj3ok2ol3om2on3oo2op3oq2or3os2ot3ou2ov3ow2ox3oy2oz3pA=="; // embedded as data URI to ensure it always renders

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {kicker && (
        <p className="uppercase tracking-[0.18em] text-xs text-[#1A2B48]/70 mb-2">{kicker}</p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A2B48] leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-[#2D3748]/80">{subtitle}</p>
      )}
    </div>
  );
}

function KBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-[#2D3748] border-[#E2E8F0] bg-white">
      <CheckCircle2 className="w-4 h-4 text-[#BC002D]" /> {children}
    </span>
  );
}

export default function LandingPageMNI() {
  // Parallax ringan pada area hero gambar (menggunakan scrollYProgress)
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  return (
    <div className="min-h-screen bg-white text-[#2D3748] [font-family:var(--font-body,Lato,sans-serif)]">
      <ScrollProgressBar />
      {/* Top Bar / Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Logo PT Muhammad Nihon Istiqomah" className="w-10 h-10 rounded-md object-contain bg-white border border-[#E2E8F0]" />
            <div>
              <p className="text-sm font-semibold text-[#1A2B48] leading-none">PT Muhammad Nihon Istiqomah</p>
              <p className="text-xs text-[#2D3748]/60 leading-none mt-1">LPK ke Jepang — Profesional & Amanah</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#program" className="hover:text-[#BC002D]">Program</a>
            <a href="#keunggulan" className="hover:text-[#BC002D]">Keunggulan</a>
            <a href="#testimoni" className="hover:text-[#BC002D]">Testimoni</a>
            <a href="#faq" className="hover:text-[#BC002D]">FAQ</a>
            <a href="#kontak" className="hover:text-[#BC002D]">Kontak</a>
          </nav>
          <div className="hidden md:block">
            <Button asChild className="bg-[#BC002D] hover:bg-[#BC002D]/90">
              <a href={WA_LINK} target="_blank" rel="noreferrer">Konsultasi Gratis</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
  <SectionFadeIn className="relative overflow-hidden" as="section" id="hero" aria-label="Bagian pembuka PT MNI">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="uppercase tracking-[0.18em] text-xs text-[#1A2B48]/70 mb-3">LPK Ke Jepang — Muslim Friendly</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1A2B48] [font-family:var(--font-heading,Poppins,sans-serif)] leading-tight">
              Jembatan Aman Menuju Karier Halal & Bermartabat di Jepang
            </h1>
            <p className="mt-5 text-[#2D3748]/80">
              Bimbingan bahasa, keterampilan kerja, dan pembinaan spiritual dalam satu ekosistem pendampingan. Transparan, terstruktur, dan berfokus pada masa depan Anda.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button asChild size="lg" className="bg-[#BC002D] hover:bg-[#BC002D]/90">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Daftar Konsultasi Gratis
                </a>
              </Button>
              <a href="#program" className="inline-flex items-center gap-2 text-[#1A2B48] hover:text-[#BC002D]">
                Lihat Program <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <KBadge>Transparansi Biaya</KBadge>
              <KBadge>Bimbingan Ibadah & Halal</KBadge>
              <KBadge>Mentoring Alumni</KBadge>
            </div>
            <div className="mt-8 text-xs text-[#2D3748]/60">
              *Tampilkan logo mitra resmi & legalitas di sini (JITCO/OTIT, Kemenaker, dsb.)
            </div>
          </motion.div>

          <motion.div style={{ y: parallaxY }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="grid grid-cols-3 gap-3 will-change-transform">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F7FA] border border-[#E2E8F0]">
                  <img
                    src={`https://picsum.photos/seed/mni${i}/600/800`}
                    loading="lazy"
                    width="300"
                    height="400"
                    alt={`Foto kegiatan atau alumni ${i} (ganti dengan foto asli untuk meningkatkan kepercayaan)`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#2D3748]/60 text-center">Gunakan foto asli kegiatan & alumni untuk kepercayaan maksimal.</p>
          </motion.div>
        </div>
      </SectionFadeIn>

      {/* Masalah & Solusi */}
      <SectionFadeIn className="bg-[#F5F7FA]" id="masalah" as="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle
            kicker="Kekhawatiran Umum"
            title="Masalah yang Sering Dihadapi & Cara PT MNI Menjawabnya"
            subtitle="Ringkas, jelas, dan menyentuh kebutuhan nyata calon peserta."
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {issuesData.map((item, idx) => {
              const IconComp = { ShieldCheck, BookOpen, HeartHandshake, Users }[item.icon];
              return (
                <motion.div key={item.key} variants={childVariants}>
                  <Card className="border-[#E2E8F0]">
                    <CardHeader className="flex flex-row items-center gap-3 pb-2">
                      <div className="shrink-0"><IconComp className="w-6 h-6 text-[#BC002D]" /></div>
                      <CardTitle className="text-base text-[#1A2B48]">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 text-sm text-[#2D3748]/80">{item.desc}</CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionFadeIn>

      {/* Keunggulan (USP) */}
      <SectionFadeIn id="keunggulan" as="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle
            kicker="Mengapa PT MNI"
            title="Amanah, Terstruktur, dan Berorientasi Hasil"
            subtitle="USP yang relevan dengan kebutuhan & kekhawatiran calon peserta."
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {uspData.map((text, i) => {
              const icons = [ShieldCheck, BookOpen, HeartHandshake, Users, Clock, MapPin];
              const IconComp = icons[i % icons.length];
              return (
                <motion.div key={text} variants={childVariants} className="flex items-start gap-3 p-4 rounded-2xl border border-[#E2E8F0] bg-white">
                  <IconComp className="w-5 h-5 text-[#BC002D]" />
                  <p className="text-sm text-[#2D3748]">{text}</p>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionFadeIn>

      {/* Program Pelatihan */}
      <SectionFadeIn className="bg-[#F5F7FA]" id="program" as="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle
            kicker="Program PT MNI"
            title="Pilih Jalur yang Tepat untuk Masa Depan Anda"
            subtitle="Sorot Program Kaigo sebagai unggulan, disusul Magang & SSW."
          />
          <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {programData.map((p) => {
              const IconComp = { HeartHandshake, GraduationCap, ChefHat }[p.icon];
              return (
                <motion.div key={p.key} variants={childVariants}>
                  <Card className={`border-[#E2E8F0] ${p.highlight ? 'ring-2 ring-[#BC002D]/20' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-[#1A2B48] flex items-center gap-2"><IconComp className="w-5 h-5 text-[#BC002D]" /> {p.title}</CardTitle>
                        {p.tag && <span className="text-xs px-2 py-1 rounded-full bg-[#BC002D]/10 text-[#BC002D]">{p.tag}</span>}
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-[#2D3748]/80 space-y-3">
                      <ul className="list-disc pl-5 space-y-1">
                        {p.bullets.map(b => <li key={b}>{b}</li>)}
                      </ul>
                      <div className="flex items-center gap-4 text-xs flex-wrap">
                        {p.meta.map(m => {
                          const MetaIcon = { Clock, Users, Factory }[m.icon] || Clock;
                          return <span key={m.label} className="inline-flex items-center gap-1"><MetaIcon className="w-4 h-4" /> {m.label}</span>;
                        })}
                      </div>
                      <div className="pt-2">
                        <Button asChild variant={p.highlight ? 'solid' : 'outline'} className={`${p.highlight ? 'bg-[#BC002D] hover:bg-[#BC002D]/90' : 'border-[#BC002D] text-[#BC002D] hover:bg-[#BC002D]/10'} w-full`}>
                          <a href={WA_LINK} target="_blank" rel="noreferrer">{p.cta}</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionFadeIn>

      {/* Testimoni & Bukti Sosial */}
      <SectionFadeIn id="testimoni" as="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle
            kicker="Cerita Alumni"
            title="Testimoni & Bukti Sosial"
            subtitle="Prioritaskan video testimoni & dokumentasi kegiatan."
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(i => (
              <motion.div key={i} variants={childVariants}>
                <Card className="border-[#E2E8F0] overflow-hidden" aria-label={`Testimoni alumni ${i}`}>
                  <div className="relative aspect-video bg-[#F5F7FA]">
                    <img src={`https://picsum.photos/seed/testi${i}/800/450`} loading="lazy" width="400" height="225" alt="Thumbnail video testimoni alumni (ganti dengan video asli)" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-[#E2E8F0] flex items-center justify-center">
                        <Video className="w-6 h-6 text-[#BC002D]" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-[#1A2B48]">Nama Alumni</p>
                    <p className="text-sm text-[#2D3748]/80 mt-1">“MasyaAllah, prosesnya jelas dan selalu didampingi. Alhamdulillah kini saya bekerja di Jepang.”</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="border-[#BC002D] text-[#BC002D] hover:bg-[#BC002D]/10">Lihat Galeri Kegiatan</Button>
          </div>
        </div>
      </SectionFadeIn>

      {/* Alur Proses */}
      <SectionFadeIn className="bg-[#F5F7FA]" as="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle kicker="Step-by-Step" title="Alur Proses Hingga Keberangkatan" />
          <StaggerContainer className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5">
            {processSteps.map((step, idx) => {
              const IconComp = { MessageCircle, BookOpen, Handshake, ShieldCheck, PlaneTakeoff }[step.icon];
              return (
                <motion.li key={step.key} variants={childVariants} className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#BC002D]/10 flex items-center justify-center"><IconComp className="w-5 h-5 text-[#BC002D]" /></div>
                  <p className="text-sm font-medium text-[#1A2B48]">{idx + 1}. {step.title}</p>
                </motion.li>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionFadeIn>

      {/* FAQ */}
      <SectionFadeIn id="faq" as="section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle kicker="Ada Pertanyaan?" title="FAQ — Pertanyaan yang Sering Diajukan" />
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-[#1A2B48]">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#2D3748]/80">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionFadeIn>

      {/* Final CTA */}
      <SectionFadeIn id="kontak" className="bg-[#F5F7FA]" as="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1A2B48] [font-family:var(--font-heading,Poppins,sans-serif)]">
                Siap Wujudkan Mimpi Bekerja di Jepang?
              </h3>
              <p className="mt-3 text-[#2D3748]/80">Isi data singkat di bawah ini dan tim kami akan menghubungi Anda.</p>
            </div>
            <form
              className="mt-8 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto justify-items-stretch"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                const nama = fd.get("nama") || "";
                const wa = fd.get("wa") || "";
                const text = encodeURIComponent(
                  `Assalamu'alaikum, saya ${nama}. Nomor WA saya ${wa}. Saya ingin konsultasi program kerja ke Jepang di PT MNI.`
                );
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
              }}
            >
              <div>
                <label className="text-sm text-[#1A2B48]">Nama Lengkap</label>
                <input name="nama" required placeholder="Nama Anda" className="mt-1 w-full h-11 rounded-xl border border-[#E2E8F0] px-3 outline-none focus:ring-2 focus:ring-[#BC002D]/30" />
              </div>
              <div>
                <label className="text-sm text-[#1A2B48]">No. WhatsApp</label>
                <input name="wa" required placeholder="08XXXXXXXXXX" className="mt-1 w-full h-11 rounded-xl border border-[#E2E8F0] px-3 outline-none focus:ring-2 focus:ring-[#BC002D]/30" />
              </div>
              <div className="col-span-full flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center text-center">
                <Button type="submit" className="bg-[#BC002D] hover:bg-[#BC002D]/90 h-11 px-10 shadow-sm w-full sm:w-auto">Kirim & Konsultasi via WhatsApp</Button>
                <Button asChild variant="outline" className="border-[#BC002D] text-[#BC002D] hover:bg-[#BC002D]/10 h-11 px-10 w-full sm:w-auto">
                  <a href={WA_LINK} target="_blank" rel="noreferrer">Chat Admin Langsung</a>
                </Button>
              </div>
            </form>
          </div>
        </div>
  </SectionFadeIn>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <img src={LOGO_SRC} alt="Logo PT Muhammad Nihon Istiqomah" className="w-10 h-10 rounded-md object-contain bg-white border border-[#E2E8F0]" />
              <p className="font-semibold text-[#1A2B48]">PT Muhammad Nihon Istiqomah</p>
            </div>
            <p className="text-sm text-[#2D3748]/70 mt-3">LPK ke Jepang — profesional, amanah, dan mendukung kebutuhan peserta Muslim.</p>
          </div>

          <div>
            <p className="font-medium text-[#1A2B48] mb-3">Menu</p>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-[#BC002D]" href="#program">Program</a></li>
              <li><a className="hover:text-[#BC002D]" href="#keunggulan">Keunggulan</a></li>
              <li><a className="hover:text-[#BC002D]" href="#testimoni">Testimoni</a></li>
              <li><a className="hover:text-[#BC002D]" href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-[#1A2B48] mb-3">Kontak</p>
            <ul className="space-y-2 text-sm">
              <li>Alamat: (isi alamat kantor/kelas)</li>
              <li>Telepon: 08XXXXXXXXXX</li>
              <li>Email: info@ptmni.co.id</li>
              <li>Instagram/TikTok/Facebook: @ptmni</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-[#1A2B48] mb-3">Legal</p>
            <ul className="space-y-2 text-sm">
              <li>Izin LPK: (isi nomor izin)</li>
              <li>Mitra Resmi: (cantumkan nama mitra)</li>
              <li><span className="text-[#2D3748]/60">© {new Date().getFullYear()} PT MNI. All rights reserved.</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
