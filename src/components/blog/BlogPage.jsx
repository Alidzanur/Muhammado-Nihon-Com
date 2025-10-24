import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { container, sectionY } from '../landing/constants';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { StaggerContainer, childVariants } from '../animations/StaggerChildren.jsx';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Header from '../landing/Header.jsx';
import FooterLanding from '../landing/FooterLanding.jsx';

// Data blog sample
const blogPosts = [
  {
    id: 1,
    title: "Tips Sukses Bekerja di Jepang sebagai Caregiver",
    excerpt: "Pelajari strategi dan tips praktis untuk berhasil bekerja sebagai caregiver di Jepang, termasuk adaptasi budaya dan komunikasi yang efektif.",
    content: "Bekerja sebagai caregiver di Jepang membutuhkan persiapan yang matang...",
    author: "Tim Muhammado Nihon",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tips Kerja",
    image: "/images/Home-4.jpeg",
    slug: "tips-sukses-bekerja-caregiver-jepang"
  },
  {
    id: 2,
    title: "Panduan Lengkap Visa Kerja Jepang untuk Pemula",
    excerpt: "Semua yang perlu Anda ketahui tentang proses pengajuan visa kerja Jepang, dokumen yang diperlukan, dan timeline yang realistis.",
    content: "Visa kerja Jepang memiliki beberapa kategori tergantung jenis pekerjaan...",
    author: "Tim Muhammado Nihon",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Visa & Dokumen",
    image: "/images/Home-5.jpeg",
    slug: "panduan-visa-kerja-jepang-pemula"
  },
  {
    id: 3,
    title: "Kehidupan Muslim di Jepang: Tantangan dan Solusi",
    excerpt: "Bagaimana menjalani kehidupan sebagai Muslim di Jepang, mulai dari mencari makanan halal hingga komunitas Muslim yang solid.",
    content: "Sebagai Muslim yang bekerja di Jepang, ada beberapa tantangan unik...",
    author: "Tim Muhammado Nihon",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Kehidupan Muslim",
    image: "/images/Home-6.jpeg",
    slug: "kehidupan-muslim-jepang-tantangan-solusi"
  },
  {
    id: 4,
    title: "Kisah Sukses Alumni: Dari Cirebon ke Tokyo",
    excerpt: "Inspirasi dari alumni Muhammado Nihon yang berhasil bekerja di Tokyo dan membangun karier yang gemilang.",
    content: "Ahmad, alumni angkatan 2023, berhasil bekerja sebagai caregiver di Tokyo...",
    author: "Tim Muhammado Nihon",
    date: "2024-01-01",
    readTime: "4 min read",
    category: "Kisah Alumni",
    image: "/images/Faqih.jpeg",
    slug: "kisah-sukses-alumni-cirebon-tokyo"
  },
  {
    id: 5,
    title: "Persiapan Mental Sebelum Berangkat ke Jepang",
    excerpt: "Tips mengatasi kecemasan dan mempersiapkan mental untuk kehidupan baru di Jepang, termasuk strategi adaptasi dan dukungan komunitas.",
    content: "Berangkat ke Jepang untuk bekerja adalah langkah besar yang membutuhkan persiapan mental yang matang...",
    author: "Tim Muhammado Nihon",
    date: "2024-01-20",
    readTime: "7 min read",
    category: "Tips Kerja",
    image: "/images/1.jpeg",
    slug: "persiapan-mental-sebelum-berangkat-jepang"
  },
  {
    id: 6,
    title: "Mengelola Keuangan di Jepang: Tips Praktis",
    excerpt: "Panduan lengkap mengelola keuangan saat bekerja di Jepang, termasuk budgeting, tabungan, dan transfer ke Indonesia.",
    content: "Mengelola keuangan dengan baik saat bekerja di Jepang adalah kunci untuk mencapai tujuan finansial Anda...",
    author: "Tim Muhammado Nihon",
    date: "2024-01-18",
    readTime: "6 min read",
    category: "Keuangan",
    image: "/images/2.jpeg",
    slug: "mengelola-keuangan-jepang-tips-praktis"
  }
];

export default function BlogPage() {
  try {
    console.log('Rendering BlogPage');
    
    // SEO Meta Data
    const seoData = {
      title: "Blog LPK Jepang - Tips, Panduan & Kisah Sukses | PT Muhammado Nihon Istiqomah",
      description: "Temukan tips sukses bekerja di Jepang, panduan visa, kisah alumni, dan informasi lengkap tentang program LPK ke Jepang. Baca artikel terbaru dari PT Muhammado Nihon Istiqomah.",
      keywords: "blog LPK Jepang, tips kerja Jepang, panduan visa Jepang, kisah sukses alumni, caregiver Jepang, magang Jepang, budaya kerja Jepang",
      canonical: "https://ptmni.co.id/blog",
      ogImage: "https://ptmni.co.id/images/Home-4.jpeg"
    };

    return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* SEO Meta Tags */}
      <head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PT Muhammado Nihon Istiqomah" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="PT Muhammado Nihon Istiqomah" />
        <meta name="publisher" content="PT Muhammado Nihon Istiqomah" />
        <meta name="language" content="id" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Cirebon" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog LPK Jepang - PT Muhammado Nihon Istiqomah",
            "description": seoData.description,
            "url": seoData.canonical,
            "publisher": {
              "@type": "Organization",
              "name": "PT Muhammado Nihon Istiqomah",
              "url": "https://ptmni.co.id",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ptmni.co.id/images/Logo-Muhammado.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://ptmni.co.id/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": post.author
              },
              "image": `https://ptmni.co.id${post.image}`,
              "articleSection": post.category
            }))
          })}
        </script>
      </head>

      <Header />

      {/* Main Content */}
      <main>
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className={`${container} py-3`}>
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-slate-600 hover:text-brand-600 transition-colors">Beranda</a>
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 font-medium">Blog</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <SectionFadeIn as="section" className="bg-gradient-to-br from-slate-50 to-white">
          <div className={`${container} py-16 sm:py-20 lg:py-24`}>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Blog & 
                <span className="bg-gradient-brand bg-clip-text text-transparent"> Artikel</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Tips, panduan, dan inspirasi untuk perjalanan kerja Anda di Jepang
              </p>
            </div>
          </div>
        </SectionFadeIn>

        {/* Blog Posts */}
        <SectionFadeIn as="section">
          <div className={`${container} ${sectionY}`}>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <motion.div key={post.id} variants={childVariants}>
                  <Card className="border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-brand-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 sm:p-7">
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="font-medium">{new Date(post.date).toLocaleDateString('id-ID')}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="font-medium">{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                        <span className="text-xs sm:text-sm text-slate-500 font-medium">By {post.author}</span>
                        <Button asChild variant="ghost" size="sm" className="text-brand-600 hover:text-brand-700 hover:bg-brand-50 px-2 py-1 h-auto">
                          <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium">
                            Baca Selengkapnya
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </SectionFadeIn>
      </main>

      <FooterLanding />
    </div>
  );
  } catch (error) {
    console.error('Error in BlogPage:', error);
    return (
      <div className="min-h-screen bg-white text-slate-700 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Error Loading Blog</h1>
          <p className="text-slate-600 mb-8">Terjadi kesalahan saat memuat halaman blog.</p>
          <p className="text-sm text-red-500 mb-4">Error: {error.message}</p>
          <Button asChild>
            <a href="/">Kembali ke Beranda</a>
          </Button>
        </div>
      </div>
    );
  }
}
