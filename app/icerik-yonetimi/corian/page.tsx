'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CorianPanel() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [h1, setH1] = useState('');
  const [snippet, setSnippet] = useState('');
  const [h2, setH2] = useState('');
  const [h3List, setH3List] = useState(['']); // Dinamik H3 Listesi
  const [colors, setColors] = useState({ primary: '#2F4F4F', secondary: '#696969', accent: '#F5F5F5' });

  const addH3 = () => setH3List([...h3List, '']);
  
  const Counter = ({ current, limit, label }: { current: number, limit: number, label: string }) => (
    <div className="flex justify-between items-center mb-1">
      <label className="text-sm font-semibold text-[#696969]">{label}</label>
      <span className={`text-xs font-bold px-2 py-1 rounded ${current > limit ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
        {current} / {limit}
      </span>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#F5F5F5] p-12 font-sans text-left">
      <div className="max-w-5xl mx-auto">
        <Link href="/icerik-yonetimi" className="text-[#696969] hover:text-[#2F4F4F] mb-6 inline-block font-medium">← Marka Listesine Dön</Link>
        <h1 className="text-4xl font-extrabold text-[#2F4F4F] mb-8 uppercase tracking-tighter">Corian SEO & İçerik Merkezi</h1>

        <div className="space-y-10 bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          
          {/* RENK SEÇİMİ (MARKA KİMLİĞİ) */}
          <section className="p-6 bg-gray-50 rounded-xl border border-dashed">
            <h2 className="text-lg font-bold text-[#2F4F4F] mb-4 uppercase italic">🎨 Marka Renk Paleti</h2>
            <div className="flex gap-8">
              {Object.keys(colors).map((key) => (
                <div key={key} className="flex flex-col items-center">
                  <label className="text-xs font-bold mb-2 uppercase text-[#696969]">{key}</label>
                  <input 
                    type="color" 
                    value={(colors as any)[key]} 
                    onChange={(e) => setColors({...colors, [key]: e.target.value})}
                    className="w-16 h-16 cursor-pointer rounded-full border-4 border-white shadow-sm"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* SEO & META */}
          <section className="space-y-6 pt-4">
            <h2 className="text-xl font-bold text-[#2F4F4F] border-l-4 border-[#2F4F4F] pl-3 underline">1. Meta Veriler</h2>
            <div>
              <Counter current={title.length} limit={45} label="SEO Başlığı" />
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2F4F4F] outline-none" />
            </div>
            <div>
              <Counter current={description.length} limit={145} label="Meta Açıklama" />
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 border rounded-lg h-20" />
            </div>
          </section>

          {/* SAYFA YAPISI */}
          <section className="space-y-6 pt-6 border-t">
            <h2 className="text-xl font-bold text-[#2F4F4F] border-l-4 border-[#2F4F4F] pl-3 underline">2. Sayfa Mimarisi</h2>
            <div>
              <Counter current={h1.length} limit={65} label="H1 Başlığı" />
              <input type="text" value={h1} onChange={(e) => setH1(e.target.value)} className="w-full p-3 border rounded-lg font-bold" />
            </div>
            <div>
              <Counter current={snippet.length} limit={200} label="Snippet Giriş" />
              <textarea value={snippet} onChange={(e) => setSnippet(e.target.value)} className="w-full p-3 border rounded-lg h-24" />
            </div>
            
            {/* H2 ve Dinamik H3'ler */}
            <div className="p-4 bg-gray-50 rounded-xl space-y-4">
              <Counter current={h2.length} limit={60} label="H2 Alt Başlık" />
              <input type="text" value={h2} onChange={(e) => setH2(e.target.value)} className="w-full p-3 border rounded-lg" />
              
              {h3List.map((h3, index) => (
                <div key={index} className="pl-8 border-l-2 border-[#2F4F4F]/20">
                   <label className="text-xs font-bold text-[#696969]">H3 Başlık - {index + 1}</label>
                   <input 
                    type="text" 
                    value={h3} 
                    onChange={(e) => {
                      const newList = [...h3List];
                      newList[index] = e.target.value;
                      setH3List(newList);
                    }}
                    className="w-full p-2 border rounded-lg mt-1" 
                    placeholder="İlgili makale başlığı..."
                   />
                </div>
              ))}
              
              <button 
                onClick={addH3}
                className="ml-8 text-sm font-bold text-[#2F4F4F] hover:underline flex items-center gap-1"
              >
                + Yeni H3 Başlık Ekle
              </button>
            </div>
          </section>

          <button className="w-full bg-[#2F4F4F] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#1e3333] transition-all shadow-2xl active:scale-[0.97] uppercase tracking-widest">
            SİSTEMİ GÜNCELLE VE YAYINLA
          </button>
        </div>
      </div>
    </main>
  );
}