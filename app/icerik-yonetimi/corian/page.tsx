'use client'; // Bu satır sayfanın canlı etkileşimli olmasını sağlar

import { useState } from 'react';
import Link from 'next/link';

export default function CorianPanel() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <main className="min-h-screen bg-[#F5F5F5] p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link href="/icerik-yonetimi" className="text-[#696969] hover:text-[#2F4F4F] mb-6 inline-block font-medium">
          ← Marka Listesine Dön
        </Link>

        <h1 className="text-4xl font-extrabold text-[#2F4F4F] mb-8 uppercase tracking-tighter">
          Corian İçerik Yönetimi
        </h1>

        <div className="space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-left">
          
          {/* SEO Bölümü */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-[#2F4F4F] border-b pb-2 italic">SEO Ayarları</h2>
            
            {/* SEO Başlığı Sayacı */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-semibold text-[#696969]">SEO Başlığı (40-45 Karakter)</label>
                <span className={`text-xs font-bold px-2 py-1 rounded ${title.length > 45 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                  {title.length} / 45
                </span>
              </div>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2F4F4F] outline-none transition-all" 
                placeholder="Örn: Corian Mutfak Tezgahı Modelleri 2026" 
              />
            </div>

            {/* Meta Açıklama Sayacı */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-semibold text-[#696969]">Meta Açıklama (140-145 Karakter)</label>
                <span className={`text-xs font-bold px-2 py-1 rounded ${description.length > 145 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                  {description.length} / 145
                </span>
              </div>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border rounded-lg h-24 focus:ring-2 focus:ring-[#2F4F4F] outline-none transition-all" 
                placeholder="Corian yüzeylerin şıklığını ve dayanıklılığını keşfedin..."
              />
            </div>
          </section>

          {/* İçerik Hiyerarşisi */}
          <section className="space-y-4 pt-6 border-t border-gray-50">
            <h2 className="text-xl font-bold text-[#2F4F4F] mb-4">Sayfa Mimarisi (H1-H3)</h2>
            <div className="grid gap-4">
              <input type="text" className="w-full p-3 border rounded-lg bg-gray-50 italic" placeholder="H1 Başlığı buraya..." />
              <textarea className="w-full p-3 border rounded-lg h-32 bg-gray-50" placeholder="H2 Tanıtım metni..."></textarea>
              <input type="text" className="w-full p-3 border rounded-lg bg-gray-50" placeholder="H3 İlgili makaleler..." />
            </div>
          </section>

          <button className="w-full bg-[#2F4F4F] text-[#F5F5F5] py-4 rounded-xl font-bold text-lg hover:bg-[#1e3333] transition-all shadow-xl active:scale-[0.98]">
            İÇERİĞİ SİSTEME KAYDET
          </button>
        </div>
      </div>
    </main>
  );
}