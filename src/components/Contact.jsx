import React from 'react';

export default function Contact() {
  return (
    <section className="section" id="kontak">
      <div className="container grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2>Kontak & Lokasi</h2>
          <p className="text-slate-600">Hubungi kami untuk informasi tambahan, kerja sama, atau konsultasi program pelatihan.</p>
          <ul className="space-y-3 text-sm">
            <li><strong>Alamat:</strong> Jl. Contoh No. 123, Kota Anda</li>
            <li><strong>Telepon / WA:</strong> 0812-3456-7890</li>
            <li><strong>Email:</strong> info@lpkcontoh.id</li>
            <li><strong>Jam Operasional:</strong> Senin - Jumat 08.00–16.00</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 text-sm">Peta / Embed Google Maps</div>
          <div className="text-xs text-slate-500">Catatan: Ganti kotak di atas dengan iframe Google Maps resmi lokasi LPK Anda.</div>
        </div>
      </div>
    </section>
  );
}
