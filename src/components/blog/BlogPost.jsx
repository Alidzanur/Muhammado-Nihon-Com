import React from 'react';
import { Button } from '../ui/button';
import { container, sectionY } from '../landing/constants';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

// Data blog sample (sama dengan BlogPage)
const blogPosts = [
  {
    id: 1,
    title: "Tips Sukses Bekerja di Jepang sebagai Caregiver",
    excerpt: "Pelajari strategi dan tips praktis untuk berhasil bekerja sebagai caregiver di Jepang, termasuk adaptasi budaya dan komunikasi yang efektif.",
    content: `
      <p>Bekerja sebagai caregiver di Jepang membutuhkan persiapan yang matang dan pemahaman mendalam tentang budaya serta etos kerja Jepang. Berikut adalah tips-tips praktis yang dapat membantu Anda sukses dalam karier caregiver di Negeri Sakura.</p>
      
      <h2>1. Kuasai Bahasa Jepang</h2>
      <p>Kemampuan berbahasa Jepang adalah kunci utama kesuksesan. Tidak hanya untuk komunikasi dengan pasien, tetapi juga dengan keluarga dan rekan kerja. Fokus pada:</p>
      <ul>
        <li>Kosakata medis dan perawatan</li>
        <li>Pola kalimat sopan (keigo)</li>
        <li>Istilah-istilah khusus dalam perawatan lansia</li>
      </ul>
      
      <h2>2. Pahami Budaya Jepang</h2>
      <p>Budaya Jepang sangat menghargai kesopanan, ketepatan waktu, dan dedikasi kerja. Sebagai caregiver, Anda harus:</p>
      <ul>
        <li>Selalu tepat waktu</li>
        <li>Menghormati privasi pasien</li>
        <li>Mengikuti protokol yang ketat</li>
        <li>Menunjukkan empati yang tulus</li>
      </ul>
      
      <h2>3. Kembangkan Keterampilan Teknis</h2>
      <p>Selain soft skills, keterampilan teknis juga sangat penting:</p>
      <ul>
        <li>Teknik perawatan dasar (ADL - Activities of Daily Living)</li>
        <li>Penggunaan alat bantu perawatan</li>
        <li>Manajemen obat-obatan</li>
        <li>Pertolongan pertama darurat</li>
      </ul>
      
      <h2>4. Bangun Komunikasi yang Baik</h2>
      <p>Komunikasi yang efektif dengan pasien dan keluarga adalah kunci keberhasilan. Latih kemampuan:</p>
      <ul>
        <li>Mendengarkan aktif</li>
        <li>Memberikan informasi yang jelas</li>
        <li>Menangani situasi sulit dengan tenang</li>
        <li>Membangun kepercayaan</li>
      </ul>
      
      <h2>5. Jaga Kesehatan Mental dan Fisik</h2>
      <p>Pekerjaan caregiver bisa sangat menantang secara emosional dan fisik. Penting untuk:</p>
      <ul>
        <li>Mengatur waktu istirahat yang cukup</li>
        <li>Mencari dukungan dari komunitas</li>
        <li>Mengembangkan hobi dan aktivitas refreshing</li>
        <li>Berdoa dan mendekatkan diri kepada Allah</li>
      </ul>
      
      <p>Dengan persiapan yang matang dan dedikasi yang tinggi, Anda dapat membangun karier yang sukses sebagai caregiver di Jepang. Ingatlah bahwa setiap tantangan adalah peluang untuk tumbuh dan berkembang.</p>
    `,
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
    content: `
      <p>Visa kerja Jepang memiliki beberapa kategori tergantung jenis pekerjaan dan durasi tinggal. Sebagai pemula, penting untuk memahami proses dan persyaratan yang diperlukan.</p>
      
      <h2>Jenis Visa Kerja Jepang</h2>
      <p>Berikut adalah jenis-jenis visa kerja yang umum digunakan:</p>
      <ul>
        <li><strong>Specified Skilled Worker (SSW)</strong> - Untuk pekerja terampil</li>
        <li><strong>Technical Intern Training</strong> - Untuk magang teknis</li>
        <li><strong>Caregiver Visa</strong> - Khusus untuk caregiver</li>
        <li><strong>Engineer/Specialist in Humanities</strong> - Untuk profesional</li>
      </ul>
      
      <h2>Persyaratan Umum</h2>
      <p>Setiap jenis visa memiliki persyaratan khusus, namun secara umum Anda memerlukan:</p>
      <ul>
        <li>Paspor yang masih berlaku</li>
        <li>Formulir aplikasi visa</li>
        <li>Foto paspor terbaru</li>
        <li>Certificate of Eligibility (COE)</li>
        <li>Dokumen pendukung sesuai jenis visa</li>
      </ul>
      
      <h2>Proses Pengajuan</h2>
      <p>Proses pengajuan visa biasanya memakan waktu 1-3 bulan:</p>
      <ol>
        <li>Persiapan dokumen</li>
        <li>Pengajuan ke Kedutaan/Konsulat Jepang</li>
        <li>Verifikasi dokumen</li>
        <li>Wawancara (jika diperlukan)</li>
        <li>Pengambilan visa</li>
      </ol>
      
      <h2>Tips Sukses</h2>
      <ul>
        <li>Persiapkan dokumen dengan teliti</li>
        <li>Pastikan semua informasi akurat</li>
        <li>Ikuti timeline yang diberikan</li>
        <li>Jangan ragu bertanya jika ada keraguan</li>
      </ul>
    `,
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
    content: `
      <p>Sebagai Muslim yang bekerja di Jepang, ada beberapa tantangan unik yang harus dihadapi. Namun dengan persiapan yang tepat dan dukungan komunitas, Anda dapat menjalani kehidupan yang nyaman dan berkah.</p>
      
      <h2>Tantangan Utama</h2>
      <h3>1. Makanan Halal</h3>
      <p>Mencari makanan halal di Jepang bisa menjadi tantangan besar. Solusinya:</p>
      <ul>
        <li>Pelajari label makanan Jepang</li>
        <li>Gunakan aplikasi pencari makanan halal</li>
        <li>Bergabung dengan komunitas Muslim lokal</li>
        <li>Belajar memasak sendiri</li>
      </ul>
      
      <h3>2. Tempat Shalat</h3>
      <p>Masjid di Jepang tidak sebanyak di Indonesia. Alternatifnya:</p>
      <ul>
        <li>Gunakan ruang shalat di tempat kerja</li>
        <li>Shalat di kamar atau ruang kosong</li>
        <li>Bergabung dengan komunitas Muslim</li>
        <li>Gunakan aplikasi pencari masjid</li>
      </ul>
      
      <h3>3. Komunitas</h3>
      <p>Membangun jaringan sosial yang baik sangat penting:</p>
      <ul>
        <li>Ikuti kegiatan komunitas Muslim</li>
        <li>Bergabung dengan grup WhatsApp</li>
        <li>Hadiri acara-acara keislaman</li>
        <li>Jaga komunikasi dengan keluarga di Indonesia</li>
      </ul>
      
      <h2>Tips Praktis</h2>
      <ul>
        <li>Bawa perlengkapan shalat dari Indonesia</li>
        <li>Pelajari bahasa Jepang untuk komunikasi</li>
        <li>Jaga kesehatan fisik dan mental</li>
        <li>Selalu berdoa dan mendekatkan diri kepada Allah</li>
      </ul>
    `,
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
    content: `
      <p>Ahmad, alumni angkatan 2023, berhasil bekerja sebagai caregiver di Tokyo setelah melalui proses pelatihan yang intensif di Muhammado Nihon. Berikut adalah perjalanan inspiratifnya.</p>
      
      <h2>Latar Belakang</h2>
      <p>Ahmad berasal dari Cirebon dan memiliki latar belakang pendidikan SMA. Dia memutuskan untuk mengikuti program caregiver di Muhammado Nihon karena tertarik dengan peluang kerja di Jepang.</p>
      
      <h2>Proses Pelatihan</h2>
      <p>Selama 6 bulan pelatihan, Ahmad mengikuti:</p>
      <ul>
        <li>Kelas bahasa Jepang intensif</li>
        <li>Pelatihan keterampilan caregiver</li>
        <li>Simulasi kerja dan interview</li>
        <li>Pembinaan spiritual dan mental</li>
      </ul>
      
      <h2>Tantangan yang Dihadapi</h2>
      <p>Awalnya Ahmad mengalami kesulitan dalam:</p>
      <ul>
        <li>Adaptasi dengan budaya Jepang</li>
        <li>Komunikasi dengan pasien lansia</li>
        <li>Mengatur waktu shalat di tempat kerja</li>
        <li>Mencari makanan halal</li>
      </ul>
      
      <h2>Strategi Sukses</h2>
      <p>Dengan dukungan dari Muhammado Nihon dan komunitas Muslim di Tokyo, Ahmad berhasil:</p>
      <ul>
        <li>Menguasai bahasa Jepang dengan baik</li>
        <li>Membangun hubungan baik dengan pasien</li>
        <li>Menemukan komunitas Muslim yang solid</li>
        <li>Mengembangkan karier yang stabil</li>
      </ul>
      
      <h2>Pesan untuk Calon Alumni</h2>
      <p>"Jangan pernah menyerah pada impian Anda. Dengan persiapan yang matang dan dukungan yang tepat, semua hal mungkin untuk dicapai. Muhammado Nihon memberikan fondasi yang kuat untuk kesuksesan di Jepang." - Ahmad</p>
    `,
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
    content: `
      <p>Berangkat ke Jepang untuk bekerja adalah langkah besar yang membutuhkan persiapan mental yang matang. Tidak hanya persiapan fisik dan dokumen, tetapi juga persiapan mental untuk menghadapi perubahan besar dalam kehidupan.</p>
      
      <h2>1. Atasi Kecemasan dan Keraguan</h2>
      <p>Merasa cemas sebelum berangkat adalah hal yang wajar. Beberapa cara mengatasinya:</p>
      <ul>
        <li>Berbicara dengan alumni yang sudah bekerja di Jepang</li>
        <li>Mencari informasi sebanyak-banyaknya tentang kehidupan di Jepang</li>
        <li>Bergabung dengan komunitas Muslim di Jepang</li>
        <li>Berdoa dan mendekatkan diri kepada Allah</li>
      </ul>
      
      <h2>2. Persiapan Bahasa dan Komunikasi</h2>
      <p>Kemampuan berkomunikasi adalah kunci adaptasi yang sukses:</p>
      <ul>
        <li>Latihan percakapan sehari-hari</li>
        <li>Pelajari kosakata yang sering digunakan di tempat kerja</li>
        <li>Gunakan aplikasi belajar bahasa Jepang</li>
        <li>Jangan takut membuat kesalahan dalam berbicara</li>
      </ul>
      
      <h2>3. Persiapan Budaya dan Etika</h2>
      <p>Memahami budaya Jepang akan membantu Anda beradaptasi dengan lebih mudah:</p>
      <ul>
        <li>Pelajari etika kerja Jepang</li>
        <li>Pahami pentingnya ketepatan waktu</li>
        <li>Pelajari cara menghormati senior</li>
        <li>Pahami konsep "wa" (harmoni) dalam budaya Jepang</li>
      </ul>
      
      <p>Ingatlah bahwa setiap orang memiliki proses adaptasi yang berbeda. Berikan waktu untuk diri sendiri dan jangan terlalu keras pada diri sendiri jika mengalami kesulitan di awal.</p>
    `,
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
    content: `
      <p>Mengelola keuangan dengan baik saat bekerja di Jepang adalah kunci untuk mencapai tujuan finansial Anda. Berikut adalah tips praktis untuk mengelola keuangan dengan efektif.</p>
      
      <h2>1. Buat Budget Bulanan</h2>
      <p>Langkah pertama adalah membuat budget yang realistis:</p>
      <ul>
        <li>Catat semua pengeluaran bulanan</li>
        <li>Alokasikan 50% untuk kebutuhan pokok</li>
        <li>Sisihkan 20% untuk tabungan</li>
        <li>Gunakan 30% untuk keperluan lain</li>
      </ul>
      
      <h2>2. Buka Rekening Bank Jepang</h2>
      <p>Memiliki rekening bank lokal akan memudahkan transaksi:</p>
      <ul>
        <li>Pilih bank yang memiliki banyak ATM</li>
        <li>Perhatikan biaya administrasi bulanan</li>
        <li>Buka rekening tabungan dengan bunga yang kompetitif</li>
        <li>Gunakan mobile banking untuk kemudahan</li>
      </ul>
      
      <h2>3. Transfer ke Indonesia</h2>
      <p>Untuk mengirim uang ke Indonesia, pertimbangkan:</p>
      <ul>
        <li>Bandungkan biaya transfer antar provider</li>
        <li>Gunakan layanan transfer online yang lebih murah</li>
        <li>Transfer dalam jumlah besar untuk menghemat biaya</li>
        <li>Perhatikan kurs mata uang yang menguntungkan</li>
      </ul>
      
      <p>Dengan disiplin dan perencanaan yang baik, Anda dapat mengoptimalkan penghasilan di Jepang untuk mencapai tujuan finansial jangka panjang.</p>
    `,
    author: "Tim Muhammado Nihon",
    date: "2024-01-18",
    readTime: "6 min read",
    category: "Keuangan",
    image: "/images/2.jpeg",
    slug: "mengelola-keuangan-jepang-tips-praktis"
  }
];

export default function BlogPost({ slug }) {
  try {
    console.log('BlogPost received slug:', slug);
    console.log('Available slugs:', blogPosts.map(p => p.slug));
    const post = blogPosts.find(p => p.slug === slug);
    console.log('Found post:', post);
    
    if (!post) {
      console.log('Post not found, showing 404');
      return (
        <div className="min-h-screen bg-white text-slate-700 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-slate-600 mb-8">Artikel yang Anda cari tidak tersedia.</p>
            <p className="text-sm text-slate-500 mb-4">Slug: {slug}</p>
            <Button asChild>
              <a href="/blog">Kembali ke Blog</a>
            </Button>
          </div>
        </div>
      );
    }

  return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className={`${container} h-16 sm:h-18 lg:h-20 flex items-center justify-between`}>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/images/Logo-Muhammado.png" 
                alt="Logo PT Muhammado Nihon Istiqomah" 
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-contain bg-white border border-slate-200 shadow-sm" 
              />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gradient-brand rounded-full border-2 border-white shadow-sm"></div>
            </div>
            <div className="hidden sm:block">
              <p className="text-ui-base font-bold text-slate-800 leading-tight">PT Muhammado Nihon Istiqomah</p>
              <p className="text-ui-small text-slate-600 leading-tight mt-0.5">LPK ke Jepang — Profesional & Amanah</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <a href="/blog" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Blog
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="/" className="whitespace-nowrap">Beranda</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
            <div className={`${container}`}>
              <div className="max-w-4xl">
                <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('id-ID')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    <span>By {post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <SectionFadeIn as="section">
          <div className={`${container} ${sectionY}`}>
            <div className="max-w-4xl mx-auto">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Share & Navigation */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <Button asChild variant="outline">
                    <a href="/blog">← Kembali ke Blog</a>
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Bagikan
                    </Button>
                    <Button asChild size="sm">
                      <a href="/#program">Lihat Program</a>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Suggested Articles */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Artikel Terkait</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter(relatedPost => relatedPost.id !== post.id)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <div key={relatedPost.id} className="group">
                        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                              loading="lazy"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="bg-brand-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm">
                                {relatedPost.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-5">
                            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                <span className="font-medium">{new Date(relatedPost.date).toLocaleDateString('id-ID')}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                <span className="font-medium">{relatedPost.readTime}</span>
                              </div>
                            </div>
                            
                            <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors leading-tight line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-slate-500 font-medium">By {relatedPost.author}</span>
                              <Button asChild variant="ghost" size="sm" className="text-brand-600 hover:text-brand-700 hover:bg-brand-50 px-2 py-1 h-auto">
                                <a href={`/blog/${relatedPost.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium">
                                  Baca
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </SectionFadeIn>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className={`${container} py-8`}>
          <div className="text-center">
            <p className="text-sm text-slate-600">
              © 2024 PT Muhammado Nihon Istiqomah. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
  } catch (error) {
    console.error('Error in BlogPost:', error);
    return (
      <div className="min-h-screen bg-white text-slate-700 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Error Loading Article</h1>
          <p className="text-slate-600 mb-8">Terjadi kesalahan saat memuat artikel.</p>
          <p className="text-sm text-red-500 mb-4">Error: {error.message}</p>
          <Button asChild>
            <a href="/blog">Kembali ke Blog</a>
          </Button>
        </div>
      </div>
    );
  }
}
