import React, { useState } from 'react';
import { Button } from '../ui/button';
import { container, sectionY } from '../landing/constants';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../landing/Header.jsx';
import FooterLanding from '../landing/FooterLanding.jsx';

// Data blog sample yang disederhanakan
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
      
      <p>Dengan persiapan yang matang dan dedikasi yang tinggi, Anda dapat membangun karier yang sukses sebagai caregiver di Jepang.</p>
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
      
      <p>Dengan persiapan dokumen yang lengkap dan mengikuti prosedur yang benar, Anda dapat memperoleh visa kerja Jepang dengan sukses.</p>
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
      
      <p>Dengan dukungan komunitas Muslim yang solid, Anda dapat menjalani kehidupan yang nyaman dan berkah di Jepang.</p>
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
    title: "Panduan Lengkap Magang di Jepang untuk Pemula",
    excerpt: "Semua yang perlu Anda ketahui tentang program magang di Jepang, mulai dari persiapan dokumen hingga adaptasi budaya.",
    content: `
      <p>Program magang di Jepang adalah kesempatan emas untuk belajar budaya kerja Jepang dan mengembangkan keterampilan profesional. Berikut panduan lengkap untuk memulai perjalanan magang Anda.</p>
      
      <h2>Jenis Program Magang</h2>
      <h3>1. Technical Intern Training Program</h3>
      <p>Program magang teknis yang fokus pada pengembangan keterampilan khusus:</p>
      <ul>
        <li>Durasi: 1-5 tahun</li>
        <li>Fokus: Keterampilan teknis dan bahasa</li>
        <li>Keuntungan: Pengalaman kerja nyata</li>
        <li>Peluang: Bisa lanjut ke Specified Skilled Worker</li>
      </ul>
      
      <h3>2. Specified Skilled Worker (SSW)</h3>
      <p>Program untuk pekerja terampil dengan persyaratan khusus:</p>
      <ul>
        <li>Durasi: 5 tahun (dapat diperpanjang)</li>
        <li>Fokus: Pekerjaan spesifik dan keterampilan tinggi</li>
        <li>Keuntungan: Gaji lebih tinggi</li>
        <li>Peluang: Bisa membawa keluarga</li>
      </ul>
      
      <h2>Persiapan yang Diperlukan</h2>
      <p>Sebelum memulai magang, pastikan Anda telah mempersiapkan:</p>
      <ul>
        <li>Kemampuan bahasa Jepang dasar (N5-N4)</li>
        <li>Dokumen lengkap (paspor, ijazah, sertifikat)</li>
        <li>Kondisi fisik yang prima</li>
        <li>Mental yang siap untuk adaptasi budaya</li>
      </ul>
      
      <p>Dengan persiapan yang matang, program magang di Jepang akan menjadi pengalaman yang berharga untuk karier Anda.</p>
    `,
    author: "Tim Muhammado Nihon",
    date: "2024-01-20",
    readTime: "7 min read",
    category: "Magang & Kerja",
    image: "/images/Home-4.jpeg",
    slug: "panduan-magang-jepang-pemula"
  },
  {
    id: 5,
    title: "Tips Sukses Interview Kerja di Jepang",
    excerpt: "Pelajari strategi dan teknik interview yang efektif untuk mendapatkan pekerjaan di Jepang, termasuk etika dan budaya kerja Jepang.",
    content: `
      <p>Interview kerja di Jepang memiliki karakteristik unik yang berbeda dengan negara lain. Memahami budaya dan etika interview Jepang akan meningkatkan peluang Anda untuk diterima.</p>
      
      <h2>Persiapan Sebelum Interview</h2>
      <h3>1. Penelitian Perusahaan</h3>
      <p>Lakukan riset mendalam tentang perusahaan:</p>
      <ul>
        <li>Sejarah dan visi perusahaan</li>
        <li>Produk atau layanan yang ditawarkan</li>
        <li>Budaya kerja dan nilai-nilai perusahaan</li>
        <li>Berita terbaru dan pencapaian perusahaan</li>
      </ul>
      
      <h3>2. Persiapan Dokumen</h3>
      <p>Siapkan dokumen dengan rapi dan profesional:</p>
      <ul>
        <li>Resume dalam bahasa Jepang (履歴書)</li>
        <li>CV dalam bahasa Jepang (職務経歴書)</li>
        <li>Portfolio atau sertifikat relevan</li>
        <li>Foto profesional (3x4 cm)</li>
      </ul>
      
      <h2>Etika Interview Jepang</h2>
      <h3>1. Penampilan</h3>
      <p>Penampilan sangat penting dalam budaya Jepang:</p>
      <ul>
        <li>Pakaian formal (setelan hitam atau navy)</li>
        <li>Rambut rapi dan tidak mencolok</li>
        <li>Makeup minimal untuk wanita</li>
        <li>Sepatu bersih dan pantofel</li>
      </ul>
      
      <h3>2. Sikap dan Perilaku</h3>
      <p>Perhatikan etika dan sopan santun:</p>
      <ul>
        <li>Datang tepat waktu (lebih baik 10 menit lebih awal)</li>
        <li>Membungkuk saat menyapa dan mengucapkan selamat tinggal</li>
        <li>Duduk dengan tegak dan tidak bersandar</li>
        <li>Mendengarkan dengan penuh perhatian</li>
      </ul>
      
      <h2>Pertanyaan yang Sering Diajukan</h2>
      <p>Beberapa pertanyaan umum dalam interview Jepang:</p>
      <ul>
        <li>Mengapa Anda ingin bekerja di Jepang?</li>
        <li>Apa yang Anda ketahui tentang perusahaan kami?</li>
        <li>Bagaimana Anda mengatasi kesulitan?</li>
        <li>Apa kelebihan dan kekurangan Anda?</li>
        <li>Di mana Anda melihat diri Anda dalam 5 tahun?</li>
      </ul>
      
      <p>Dengan persiapan yang matang dan pemahaman budaya yang baik, Anda dapat menghadapi interview dengan percaya diri dan sukses.</p>
    `,
    author: "Tim Muhammado Nihon",
    date: "2024-01-25",
    readTime: "8 min read",
    category: "Tips Kerja",
    image: "/images/Home-5.jpeg",
    slug: "tips-sukses-interview-kerja-jepang"
  },
  {
    id: 6,
    title: "Mengenal Budaya Kerja Jepang: Etika dan Tradisi",
    excerpt: "Pelajari budaya kerja Jepang yang unik, mulai dari konsep wa (harmoni) hingga sistem senioritas yang khas.",
    content: `
      <p>Budaya kerja Jepang memiliki karakteristik yang sangat berbeda dengan budaya kerja Barat. Memahami budaya ini akan membantu Anda beradaptasi dan sukses di lingkungan kerja Jepang.</p>
      
      <h2>Konsep Dasar Budaya Kerja Jepang</h2>
      <h3>1. Wa (和) - Harmoni</h3>
      <p>Harmoni adalah nilai utama dalam budaya kerja Jepang:</p>
      <ul>
        <li>Menghindari konflik terbuka</li>
        <li>Mengutamakan kepentingan kelompok</li>
        <li>Menjaga hubungan baik dengan rekan kerja</li>
        <li>Menghormati pendapat orang lain</li>
      </ul>
      
      <h3>2. Senpai-Kohai System</h3>
      <p>Sistem senioritas yang sangat dihormati:</p>
      <ul>
        <li>Senpai (senior) memberikan bimbingan</li>
        <li>Kohai (junior) menghormati dan belajar</li>
        <li>Hierarki yang jelas dalam organisasi</li>
        <li>Respect berdasarkan pengalaman dan usia</li>
      </ul>
      
      <h2>Etika Kerja Jepang</h2>
      <h3>1. Dedikasi dan Loyalitas</h3>
      <p>Karyawan Jepang dikenal sangat dedikasi:</p>
      <ul>
        <li>Loyalitas tinggi terhadap perusahaan</li>
        <li>Kerja keras dan pantang menyerah</li>
        <li>Mengutamakan kualitas daripada kecepatan</li>
        <li>Komitmen jangka panjang</li>
      </ul>
      
      <h3>2. Punctuality dan Precision</h3>
      <p>Ketepatan waktu dan presisi sangat dihargai:</p>
      <ul>
        <li>Datang tepat waktu atau lebih awal</li>
        <li>Menyelesaikan tugas dengan sempurna</li>
        <li>Memperhatikan detail kecil</li>
        <li>Menghindari kesalahan sebisa mungkin</li>
      </ul>
      
      <h2>Komunikasi di Tempat Kerja</h2>
      <h3>1. Indirect Communication</h3>
      <p>Komunikasi Jepang cenderung tidak langsung:</p>
      <ul>
        <li>Menggunakan bahasa yang sopan dan halus</li>
        <li>Menghindari penolakan langsung</li>
        <li>Membaca "air" dan situasi</li>
        <li>Menggunakan bahasa tubuh dan ekspresi</li>
      </ul>
      
      <h3>2. Group Decision Making</h3>
      <p>Keputusan dibuat secara kolektif:</p>
      <ul>
        <li>Ringi system (konsensus kelompok)</li>
        <li>Semua pihak dilibatkan dalam keputusan</li>
        <li>Proses yang memakan waktu tapi solid</li>
        <li>Tanggung jawab bersama</li>
      </ul>
      
      <h2>Tips Adaptasi</h2>
      <p>Untuk beradaptasi dengan budaya kerja Jepang:</p>
      <ul>
        <li>Pelajari bahasa Jepang secara bertahap</li>
        <li>Observasi dan tiru perilaku rekan kerja</li>
        <li>Bertanya dengan sopan jika tidak mengerti</li>
        <li>Menunjukkan respect terhadap senior</li>
        <li>Berpartisipasi aktif dalam kegiatan kelompok</li>
      </ul>
      
      <p>Dengan pemahaman yang baik tentang budaya kerja Jepang, Anda dapat berintegrasi dengan baik dan membangun karier yang sukses.</p>
    `,
    author: "Tim Muhammado Nihon",
    date: "2024-01-30",
    readTime: "9 min read",
    category: "Budaya Kerja",
    image: "/images/Home-6.jpeg",
    slug: "mengenal-budaya-kerja-jepang-etika-tradisi"
  },
  {
    id: 7,
    title: "Kisah Sukses Alumni Cirebon di Tokyo",
    excerpt: "Inspirasi dari alumni Muhammado Nihon yang berhasil membangun karier gemilang di Tokyo, mulai dari caregiver hingga entrepreneur.",
    content: `
      <p>Berikut adalah kisah inspiratif dari alumni Muhammado Nihon yang berasal dari Cirebon dan berhasil membangun karier yang sukses di Tokyo. Mereka membuktikan bahwa dengan tekad dan persiapan yang tepat, impian bekerja di Jepang dapat diwujudkan.</p>
      
      <h2>Ahmad - Dari Caregiver ke Supervisor</h2>
      <h3>Perjalanan Awal</h3>
      <p>Ahmad memulai perjalanannya sebagai caregiver di Tokyo pada tahun 2019. Dengan latar belakang pendidikan keperawatan dari Cirebon, ia memiliki dasar yang kuat untuk bekerja di bidang kesehatan.</p>
      
      <h3>Pencapaian</h3>
      <p>Dalam 3 tahun, Ahmad berhasil:</p>
      <ul>
        <li>Menguasai bahasa Jepang hingga level N2</li>
        <li>Dipromosikan menjadi supervisor caregiver</li>
        <li>Memimpin tim 15 caregiver</li>
        <li>Mendapatkan gaji 2x lipat dari awal</li>
      </ul>
      
      <h2>Siti - Entrepreneur Sukses</h2>
      <h3>Ide Bisnis</h3>
      <p>Siti melihat peluang bisnis makanan halal di Tokyo. Dengan pengalaman kuliner dari Cirebon, ia memutuskan untuk membuka warung makan halal kecil-kecilan.</p>
      
      <h3>Perkembangan Bisnis</h3>
      <p>Warung makan Siti berkembang pesat:</p>
      <ul>
        <li>Mulai dengan 1 warung kecil</li>
        <li>Sekarang memiliki 3 cabang di Tokyo</li>
        <li>Mempekerjakan 20 karyawan</li>
        <li>Omzet mencapai 50 juta yen per bulan</li>
      </ul>
      
      <h2>Faqih - Konsultan Keuangan</h2>
      <h3>Latar Belakang</h3>
      <p>Faqih memiliki latar belakang ekonomi dan berhasil bekerja di perusahaan finansial Jepang. Ia membantu sesama pekerja Indonesia mengelola keuangan mereka.</p>
      
      <h3>Kontribusi</h3>
      <p>Faqih telah membantu:</p>
      <ul>
        <li>500+ pekerja Indonesia mengelola keuangan</li>
        <li>Membuat sistem tabungan yang efektif</li>
        <li>Memberikan konsultasi investasi</li>
        <li>Mendirikan komunitas keuangan sehat</li>
      </ul>
      
      <h2>Kunci Sukses Mereka</h2>
      <h3>1. Persiapan yang Matang</h3>
      <p>Semua alumni ini mempersiapkan diri dengan baik:</p>
      <ul>
        <li>Belajar bahasa Jepang sebelum berangkat</li>
        <li>Memahami budaya kerja Jepang</li>
        <li>Mengembangkan keterampilan khusus</li>
        <li>Membangun network yang kuat</li>
      </ul>
      
      <h3>2. Tekad yang Kuat</h3>
      <p>Mereka tidak mudah menyerah menghadapi tantangan:</p>
      <ul>
        <li>Beradaptasi dengan budaya baru</li>
        <li>Mengatasi homesickness</li>
        <li>Menghadapi kesulitan bahasa</li>
        <li>Membangun kepercayaan diri</li>
      </ul>
      
      <h3>3. Komunitas yang Solid</h3>
      <p>Dukungan komunitas sangat penting:</p>
      <ul>
        <li>Bergabung dengan komunitas Muslim Tokyo</li>
        <li>Mendapatkan dukungan dari alumni lain</li>
        <li>Berbagi pengalaman dan tips</li>
        <li>Membantu sesama pekerja Indonesia</li>
      </ul>
      
      <h2>Pesan untuk Calon Alumni</h2>
      <p>Ketiga alumni ini memberikan pesan yang sama:</p>
      <blockquote>
        <p>"Jangan pernah menyerah pada impian Anda. Dengan persiapan yang matang, tekad yang kuat, dan dukungan komunitas yang solid, Anda juga bisa sukses di Jepang seperti kami."</p>
      </blockquote>
      
      <p>Kisah sukses mereka membuktikan bahwa Muhammado Nihon tidak hanya membantu alumni mendapatkan pekerjaan, tetapi juga membangun karier yang berkelanjutan dan bermakna di Jepang.</p>
    `,
    author: "Tim Muhammado Nihon",
    date: "2024-02-05",
    readTime: "10 min read",
    category: "Kisah Sukses",
    image: "/images/Home-4.jpeg",
    slug: "kisah-sukses-alumni-cirebon-tokyo"
  },
  {
    id: 8,
    title: "Persiapan Mental Sebelum Berangkat ke Jepang",
    excerpt: "Tips dan strategi untuk mempersiapkan mental sebelum memulai perjalanan kerja di Jepang, termasuk mengatasi homesickness dan culture shock.",
    content: `
      <p>Persiapan mental adalah aspek penting yang sering diabaikan sebelum berangkat ke Jepang. Selain persiapan fisik dan dokumen, Anda juga perlu mempersiapkan mental untuk menghadapi berbagai tantangan di negeri sakura.</p>
      
      <h2>Mengenal Tantangan Mental</h2>
      <h3>1. Culture Shock</h3>
      <p>Culture shock adalah reaksi normal terhadap lingkungan baru. Gejalanya meliputi:</p>
      <ul>
        <li>Perasaan cemas dan stres</li>
        <li>Kesulitan beradaptasi dengan budaya baru</li>
        <li>Merindukan rumah dan keluarga</li>
        <li>Merasa terisolasi dan kesepian</li>
      </ul>
      
      <h3>2. Language Barrier</h3>
      <p>Kesulitan berkomunikasi dapat menyebabkan:</p>
      <ul>
        <li>Frustrasi dan kecemasan</li>
        <li>Merasa tidak percaya diri</li>
        <li>Kesulitan memahami instruksi kerja</li>
        <li>Isolasi sosial</li>
      </ul>
      
      <h2>Strategi Persiapan Mental</h2>
      <h3>1. Persiapan Pengetahuan</h3>
      <p>Pelajari tentang Jepang sebanyak mungkin:</p>
      <ul>
        <li>Budaya dan tradisi Jepang</li>
        <li>Etika kerja dan kehidupan sehari-hari</li>
        <li>Cuaca dan musim di Jepang</li>
        <li>Makanan dan gaya hidup</li>
      </ul>
      
      <h3>2. Persiapan Bahasa</h3>
      <p>Kuasai bahasa Jepang dasar:</p>
      <ul>
        <li>Kosakata sehari-hari</li>
        <li>Pola kalimat sederhana</li>
        <li>Ucapan sopan dan formal</li>
        <li>Istilah-istilah kerja</li>
      </ul>
      
      <h3>3. Persiapan Sosial</h3>
      <p>Bangun jaringan sosial sebelum berangkat:</p>
      <ul>
        <li>Bergabung dengan komunitas pekerja Indonesia di Jepang</li>
        <li>Terhubung dengan alumni Muhammado Nihon</li>
        <li>Ikuti grup WhatsApp atau media sosial</li>
        <li>Pelajari lokasi masjid dan komunitas Muslim</li>
      </ul>
      
      <h2>Mengatasi Homesickness</h2>
      <h3>1. Tetap Terhubung dengan Keluarga</h3>
      <p>Manfaatkan teknologi untuk tetap dekat:</p>
      <ul>
        <li>Video call rutin dengan keluarga</li>
        <li>Berbagi foto dan cerita harian</li>
        <li>Mengirim paket atau hadiah kecil</li>
        <li>Membuat jadwal komunikasi yang teratur</li>
      </ul>
      
      <h3>2. Ciptakan Rutinitas Baru</h3>
      <p>Bangun kebiasaan yang membuat nyaman:</p>
      <ul>
        <li>Jadwal shalat yang teratur</li>
        <li>Olahraga atau aktivitas fisik</li>
        <li>Hobi atau kegiatan yang disukai</li>
        <li>Makanan atau minuman favorit dari Indonesia</li>
      </ul>
      
      <h2>Strategi Adaptasi</h2>
      <h3>1. Fase Honeymoon (1-2 bulan pertama)</h3>
      <p>Nikmati pengalaman baru:</p>
      <ul>
        <li>Jelajahi tempat-tempat menarik</li>
        <li>Coba makanan dan budaya baru</li>
        <li>Buat kenangan positif</li>
        <li>Fokus pada hal-hal menyenangkan</li>
      </ul>
      
      <h3>2. Fase Crisis (2-6 bulan)</h3>
      <p>Hadapi tantangan dengan sabar:</p>
      <ul>
        <li>Terima bahwa kesulitan adalah bagian dari proses</li>
        <li>Cari bantuan dari komunitas</li>
        <li>Fokus pada tujuan jangka panjang</li>
        <li>Jangan terlalu keras pada diri sendiri</li>
      </ul>
      
      <h3>3. Fase Recovery (6-12 bulan)</h3>
      <p>Mulai merasa nyaman:</p>
      <ul>
        <li>Mengembangkan rutinitas yang stabil</li>
        <li>Membangun hubungan yang bermakna</li>
        <li>Merasa lebih percaya diri</li>
        <li>Menikmati kehidupan di Jepang</li>
      </ul>
      
      <h2>Tips Praktis</h2>
      <h3>1. Bawa Barang Kenangan</h3>
      <p>Bawa beberapa barang dari rumah:</p>
      <ul>
        <li>Foto keluarga dan teman</li>
        <li>Makanan atau bumbu favorit</li>
        <li>Buku atau majalah Indonesia</li>
        <li>Barang dengan nilai sentimental</li>
      </ul>
      
      <h3>2. Pelajari Keterampilan Baru</h3>
      <p>Manfaatkan waktu untuk berkembang:</p>
      <ul>
        <li>Kursus bahasa Jepang</li>
        <li>Keterampilan kerja tambahan</li>
        <li>Hobi atau minat baru</li>
        <li>Keterampilan hidup mandiri</li>
      </ul>
      
      <h3>3. Jaga Kesehatan Mental</h3>
      <p>Prioritaskan kesejahteraan mental:</p>
      <ul>
        <li>Tidur yang cukup dan teratur</li>
        <li>Makan makanan bergizi</li>
        <li>Olahraga rutin</li>
        <li>Meditasi atau doa</li>
      </ul>
      
      <h2>Kapan Mencari Bantuan</h2>
      <p>Jangan ragu untuk mencari bantuan jika:</p>
      <ul>
        <li>Merasa sangat tertekan atau cemas</li>
        <li>Kesulitan tidur atau makan</li>
        <li>Merasa tidak bisa mengatasi masalah</li>
        <li>Memiliki pikiran negatif yang berlebihan</li>
      </ul>
      
      <p>Persiapan mental yang baik akan membantu Anda menghadapi tantangan dengan lebih percaya diri dan berhasil beradaptasi dengan kehidupan di Jepang.</p>
    `,
    author: "Tim Muhammado Nihon",
    date: "2024-02-10",
    readTime: "11 min read",
    category: "Persiapan Mental",
    image: "/images/Home-5.jpeg",
    slug: "persiapan-mental-sebelum-berangkat-jepang"
  },
  {
    id: 9,
    title: "Mengelola Keuangan di Jepang: Tips Praktis",
    excerpt: "Panduan lengkap mengelola keuangan saat bekerja di Jepang, mulai dari sistem perbankan hingga strategi menabung dan investasi.",
    content: `
      <p>Mengelola keuangan di Jepang membutuhkan pemahaman yang baik tentang sistem perbankan, budaya kerja, dan strategi keuangan yang efektif. Berikut panduan lengkap untuk mengelola keuangan Anda dengan baik di negeri sakura.</p>
      
      <h2>Sistem Perbankan Jepang</h2>
      <h3>1. Jenis Bank</h3>
      <p>Jepang memiliki beberapa jenis bank:</p>
      <ul>
        <li><strong>City Banks</strong> - Bank besar seperti Mizuho, Sumitomo Mitsui</li>
        <li><strong>Regional Banks</strong> - Bank daerah untuk wilayah tertentu</li>
        <li><strong>Postal Bank</strong> - Bank pos yang mudah diakses</li>
        <li><strong>Credit Unions</strong> - Koperasi kredit lokal</li>
      </ul>
      
      <h3>2. Membuka Rekening Bank</h3>
      <p>Persyaratan untuk membuka rekening:</p>
      <ul>
        <li>Paspor dan visa kerja</li>
        <li>Certificate of Residence (住民票)</li>
        <li>Nomor telepon Jepang</li>
        <li>Alamat tempat tinggal di Jepang</li>
      </ul>
      
      <h2>Struktur Gaji di Jepang</h2>
      <h3>1. Komponen Gaji</h3>
      <p>Gaji di Jepang biasanya terdiri dari:</p>
      <ul>
        <li><strong>基本給 (Kihonkyu)</strong> - Gaji pokok</li>
        <li><strong>諸手当 (Shoteate)</strong> - Tunjangan (transportasi, makan, dll)</li>
        <li><strong>残業代 (Zangyodai)</strong> - Uang lembur</li>
        <li><strong>ボーナス (Bonus)</strong> - Bonus tahunan</li>
      </ul>
      
      <h3>2. Potongan Gaji</h3>
      <p>Potongan yang umum terjadi:</p>
      <ul>
        <li><strong>所得税 (Shotokuzei)</strong> - Pajak penghasilan</li>
        <li><strong>住民税 (Juminzei)</strong> - Pajak daerah</li>
        <li><strong>社会保険 (Shakaihoken)</strong> - Asuransi sosial</li>
        <li><strong>雇用保険 (Koyohoken)</strong> - Asuransi ketenagakerjaan</li>
      </ul>
      
      <h2>Strategi Menabung</h2>
      <h3>1. Aturan 50-30-20</h3>
      <p>Bagilah gaji dengan proporsi:</p>
      <ul>
        <li><strong>50%</strong> - Kebutuhan pokok (makan, tempat tinggal, transport)</li>
        <li><strong>30%</strong> - Keinginan (hiburan, belanja)</li>
        <li><strong>20%</strong> - Tabungan dan investasi</li>
      </ul>
      
      <h3>2. Tabungan Otomatis</h3>
      <p>Manfaatkan fitur bank Jepang:</p>
      <ul>
        <li>Automatic transfer ke rekening tabungan</li>
        <li>Fixed deposit dengan bunga tetap</li>
        <li>Savings account dengan bunga tinggi</li>
        <li>Goal-based saving plans</li>
      </ul>
      
      <h2>Biaya Hidup di Jepang</h2>
      <h3>1. Tempat Tinggal</h3>
      <p>Biaya akomodasi bervariasi:</p>
      <ul>
        <li><strong>Tokyo</strong> - 80,000-150,000 yen/bulan</li>
        <li><strong>Osaka</strong> - 60,000-120,000 yen/bulan</li>
        <li><strong>Daerah lain</strong> - 40,000-80,000 yen/bulan</li>
        <li><strong>Share house</strong> - 30,000-60,000 yen/bulan</li>
      </ul>
      
      <h3>2. Makanan</h3>
      <p>Estimasi biaya makan:</p>
      <ul>
        <li><strong>Masak sendiri</strong> - 20,000-30,000 yen/bulan</li>
        <li><strong>Makan di luar</strong> - 40,000-60,000 yen/bulan</li>
        <li><strong>Kombinasi</strong> - 30,000-45,000 yen/bulan</li>
      </ul>
      
      <h3>3. Transportasi</h3>
      <p>Biaya transportasi:</p>
      <ul>
        <li><strong>Commuter pass</strong> - 10,000-20,000 yen/bulan</li>
        <li><strong>Taxi</strong> - 500-1,000 yen/ride</li>
        <li><strong>Bicycle</strong> - 5,000-15,000 yen (one-time)</li>
      </ul>
      
      <h2>Investasi di Jepang</h2>
      <h3>1. NISA (Nippon Individual Savings Account)</h3>
      <p>Program investasi dengan keuntungan pajak:</p>
      <ul>
        <li>Investasi hingga 1.2 juta yen/tahun</li>
        <li>Keuntungan bebas pajak</li>
        <li>Berlaku selama 20 tahun</li>
        <li>Berbagai pilihan investasi</li>
      </ul>
      
      <h2>Tips Praktis</h2>
      <h3>1. Gunakan Aplikasi Keuangan</h3>
      <p>Aplikasi yang berguna:</p>
      <ul>
        <li><strong>MoneyTree</strong> - Tracking keuangan</li>
        <li><strong>Zaim</strong> - Pencatatan pengeluaran</li>
        <li><strong>Bank apps</strong> - Transfer dan monitoring</li>
        <li><strong>Exchange rate apps</strong> - Kurs mata uang</li>
      </ul>
      
      <h3>2. Hindari Jebakan Keuangan</h3>
      <p>Waspada terhadap:</p>
      <ul>
        <li>Kartu kredit dengan bunga tinggi</li>
        <li>Pinjaman dengan bunga tinggi</li>
        <li>Investasi yang terlalu berisiko</li>
        <li>Belanja impulsif</li>
      </ul>
      
      <h3>3. Rencanakan Masa Depan</h3>
      <p>Persiapkan untuk:</p>
      <ul>
        <li>Dana darurat (3-6 bulan gaji)</li>
        <li>Tabungan untuk pulang ke Indonesia</li>
        <li>Investasi jangka panjang</li>
        <li>Asuransi kesehatan dan jiwa</li>
      </ul>
      
      <h2>Mengirim Uang ke Indonesia</h2>
      <h3>1. Metode Transfer</h3>
      <p>Pilihan untuk mengirim uang:</p>
      <ul>
        <li><strong>Bank transfer</strong> - Aman tapi mahal</li>
        <li><strong>Wise (TransferWise)</strong> - Murah dan cepat</li>
        <li><strong>Remitly</strong> - Mudah digunakan</li>
        <li><strong>Western Union</strong> - Cepat tapi mahal</li>
      </ul>
      
      <h3>2. Pertimbangkan Biaya</h3>
      <p>Faktor yang mempengaruhi biaya:</p>
      <ul>
        <li>Jumlah yang ditransfer</li>
        <li>Metode transfer</li>
        <li>Kurs mata uang</li>
        <li>Biaya admin</li>
      </ul>
      
      <p>Dengan perencanaan keuangan yang baik, Anda dapat memaksimalkan penghasilan di Jepang dan membangun masa depan yang lebih cerah.</p>
    `,
    author: "Tim Muhammado Nihon",
    date: "2024-02-15",
    readTime: "12 min read",
    category: "Keuangan",
    image: "/images/Home-6.jpeg",
    slug: "mengelola-keuangan-jepang-tips-praktis"
  }
];

export default function BlogPost({ slug }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  console.log('BlogPost received slug:', slug);
  console.log('Available slugs:', blogPosts.map(p => p.slug));
  
  const post = blogPosts.find(p => p.slug === slug);
  console.log('Found post:', post);
  
  // Get related articles (exclude current post)
  const relatedArticles = blogPosts.filter(relatedPost => relatedPost.id !== post.id);
  
  // Calculate total slides (showing 3 cards per slide)
  const totalSlides = Math.ceil(relatedArticles.length / 3);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  // Get current batch of articles (3 per slide)
  const getCurrentBatch = () => {
    const startIndex = currentSlide * 3;
    return relatedArticles.slice(startIndex, startIndex + 3);
  };
  
  if (!post) {
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

  // SEO Meta Data
  const seoData = {
    title: `${post.title} | Blog LPK Jepang - PT Muhammado Nihon Istiqomah`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, kerja Jepang, LPK Jepang, ${post.title.toLowerCase()}, PT Muhammado Nihon Istiqomah`,
    canonical: `https://ptmni.co.id/blog/${post.slug}`,
    ogImage: `https://ptmni.co.id${post.image}`,
    publishedTime: post.date,
    modifiedTime: post.date,
    author: post.author,
    category: post.category
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
        
        {/* Article Meta Tags */}
        <meta name="author" content={seoData.author} />
        <meta name="article:author" content={seoData.author} />
        <meta name="article:published_time" content={seoData.publishedTime} />
        <meta name="article:modified_time" content={seoData.modifiedTime} />
        <meta name="article:section" content={seoData.category} />
        <meta name="article:tag" content={seoData.category} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="PT Muhammado Nihon Istiqomah" />
        <meta property="article:author" content={seoData.author} />
        <meta property="article:published_time" content={seoData.publishedTime} />
        <meta property="article:section" content={seoData.category} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="publisher" content="PT Muhammado Nihon Istiqomah" />
        <meta name="language" content="id" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Cirebon" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": seoData.canonical,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
              "@type": "Organization",
              "name": post.author,
              "url": "https://ptmni.co.id"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PT Muhammado Nihon Istiqomah",
              "url": "https://ptmni.co.id",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ptmni.co.id/images/Logo-Muhammado.png"
              }
            },
            "image": {
              "@type": "ImageObject",
              "url": seoData.ogImage,
              "width": 1200,
              "height": 630
            },
            "articleSection": post.category,
            "wordCount": post.content.split(' ').length,
            "timeRequired": post.readTime,
            "inLanguage": "id",
            "isPartOf": {
              "@type": "Blog",
              "name": "Blog LPK Jepang - PT Muhammado Nihon Istiqomah",
              "url": "https://ptmni.co.id/blog"
            }
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
              <a href="/blog" className="text-slate-600 hover:text-brand-600 transition-colors">Blog</a>
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 font-medium">{post.category}</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 font-medium line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img 
            src={post.image} 
            alt={`${post.title} - ${post.category} | PT Muhammado Nihon Istiqomah`}
            className="w-full h-full object-cover" 
            loading="eager"
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
              
              {/* Related Articles Slider */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">Artikel Terkait</h3>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={prevSlide}
                      className="p-2"
                      disabled={totalSlides <= 1}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={nextSlide}
                      className="p-2"
                      disabled={totalSlides <= 1}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {getCurrentBatch().map((relatedPost) => (
                            <div key={relatedPost.id} className="group">
                              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                  <img 
                                    src={relatedPost.image} 
                                    alt={relatedPost.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                    loading="lazy"
                                  />
                                  <div className="absolute top-2 left-2">
                                    <span className="bg-brand-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                                      {relatedPost.category}
                                    </span>
                                  </div>
                                </div>
                                <div className="p-4">
                                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-3 h-3" />
                                      <span className="font-medium">{new Date(relatedPost.date).toLocaleDateString('id-ID')}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      <span className="font-medium">{relatedPost.readTime}</span>
                                    </div>
                                  </div>
                                  
                                  <h4 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors leading-tight line-clamp-2">
                                    {relatedPost.title}
                                  </h4>
                                  
                                  <p className="text-xs text-slate-600 mb-3 leading-relaxed line-clamp-2">
                                    {relatedPost.excerpt}
                                  </p>
                                  
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500 font-medium">By {relatedPost.author}</span>
                                    <Button asChild variant="ghost" size="sm" className="text-brand-600 hover:text-brand-700 hover:bg-brand-50 px-2 py-1 h-auto text-xs">
                                      <a href={`/blog/${relatedPost.slug}`} className="inline-flex items-center gap-1 font-medium">
                                        Baca
                                        <ArrowRight className="w-3 h-3" />
                                      </a>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Slider Indicators */}
                {totalSlides > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentSlide 
                            ? 'bg-brand-600 w-6' 
                            : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </SectionFadeIn>
      </main>

      <FooterLanding />
    </div>
  );
}
