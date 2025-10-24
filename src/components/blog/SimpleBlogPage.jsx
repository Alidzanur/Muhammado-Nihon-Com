import React from 'react';

export default function SimpleBlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Blog Test</h1>
        <p className="text-lg text-slate-600 mb-6">
          Ini adalah halaman blog sederhana untuk testing. Jika Anda melihat ini, berarti routing blog sudah bekerja.
        </p>
        <div className="bg-slate-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Artikel Test</h2>
          <p className="text-slate-700 mb-4">
            Ini adalah artikel test untuk memastikan komponen blog dapat dimuat dengan benar.
          </p>
          <a href="/" className="text-brand-600 hover:text-brand-700 underline">
            ← Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}


