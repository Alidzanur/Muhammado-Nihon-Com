import React, { useState } from 'react';

export default function Registration() {
  const [form, setForm] = useState({ nama: '', email: '', telp: '', program: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulasi submit API
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section className="section bg-slate-50" id="pendaftaran">
      <div className="container max-w-3xl">
        <div className="mb-8 space-y-3 text-center">
          <h2>Form Pendaftaran</h2>
          <p className="text-slate-600">Isi data singkat berikut. Kami akan menghubungi Anda untuk proses selanjutnya.</p>
        </div>
        {submitted ? (
          <div className="bg-white border border-green-200 rounded-lg p-6 text-center space-y-3">
            <h3 className="text-green-700">Pendaftaran Berhasil!</h3>
            <p className="text-sm text-slate-600">Tim kami akan menghubungi Anda dalam 1-2 hari kerja.</p>
            <button onClick={() => { setSubmitted(false); setForm({ nama: '', email: '', telp: '', program: '' }); }} className="btn-primary">Kirim Form Baru</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg p-6 space-y-5 shadow-sm">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="nama">Nama Lengkap</label>
                <input id="nama" name="nama" value={form.nama} onChange={handleChange} required className="w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500 text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500 text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="telp">No. Telepon / WA</label>
                <input id="telp" name="telp" value={form.telp} onChange={handleChange} required className="w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500 text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="program">Program</label>
                <select id="program" name="program" value={form.program} onChange={handleChange} required className="w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500 text-sm">
                  <option value="" disabled>Pilih Program</option>
                  <option>Desain Grafis</option>
                  <option>Pemrograman Web</option>
                  <option>Digital Marketing</option>
                  <option>Administrasi Perkantoran</option>
                  <option>Akuntansi Dasar</option>
                  <option>Bahasa Jepang</option>
                </select>
              </div>
            </div>
            <div className="text-xs text-slate-500">Dengan mengirim formulir ini Anda menyetujui kebijakan privasi kami.</div>
            <div className="flex justify-end">
              <button disabled={loading} className="btn-primary min-w-40">{loading ? 'Mengirim...' : 'Kirim Pendaftaran'}</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
