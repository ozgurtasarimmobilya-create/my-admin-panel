'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SEOAdminEditor() {
  const [blocks, setBlocks] = useState<any>([]);
  const [meta, setMeta] = useState({ h1: '', snippet: '', intro: '' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  // --- FONKSİYONLAR ---
  const addBlock = (label: string) => {
    setBlocks([...blocks, { 
      id: Math.random().toString(36).substring(2, 9), 
      label, 
      content: '',
      type: label === 'Başlık' ? 'heading' : 'paragraph'
    }]);
  };

  const autoResize = (e: any) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <div className="flex h-screen bg-[#F8F9FB] text-[#1D1D1F] font-sans overflow-hidden">
      
      {/* 1. SOL PANEL: ADMIN NAVIGASYON */}
      <aside className="w-72 bg-[#1A1C1E] text-white flex flex-col z-50 shadow-2xl">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-white">S</div>
            <span className="font-bold tracking-tighter text-xl">SEO ADMIN</span>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-8 overflow-y-auto scrollbar-hide">
          {/* Sayfalar Bölümü */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Yönetim</p>
            <div className="space-y-1">
              {['Tüm Sayfalar', 'Yeni Sayfa Ekle', 'Kategoriler', 'SEO Ayarları'].map((item) => (
                <button key={item} className={`w-full text-left p-3 rounded-xl text-sm font-medium transition-all ${item === 'Yeni Sayfa Ekle' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Editör Bileşenleri */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2">Editör Araçları</p>
            <div className="grid grid-cols-2 gap-2">
              {['Başlık', 'Paragraf', 'Liste', 'Görsel', 'SSS', 'Tablo'].map(item => (
                <button key={item} onClick={() => addBlock(item)} className="p-3 bg-white/5 border border-white/5 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:border-white/20 transition-all text-center">
                  + {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-6 border-t border-white/5">
          <button className="w-full py-3 rounded-xl bg-red-500/10 text-red-400 text-xs font-bold hover:bg-red-500 hover:text-white transition-all uppercase tracking-widest">Çıkış Yap</button>
        </div>
      </aside>

      {/* 2. ANA İÇERİK ALANI */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        
        {/* ÜST BAR: NEREDEYİZ? */}
        <header className="h-[70px] border-b border-slate-100 flex items-center justify-between px-10 bg-white/80 backdrop-blur-md z-40">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-400 font-medium">Sayfalar</span>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">Yeni Sayfa Oluşturuluyor</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">Taslak Olarak Kaydedildi</span>
            <button className="px-6 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-lg active:scale-95">YAYINLA</button>
          </div>
        </header>

        {/* YAZIM ALANI */}
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-[#F8F9FB] p-12">
          <div className="max-w-[850px] mx-auto space-y-8">
            
            {/* H1 BLOĞU - BELİRGİN ÇERÇEVE */}
            <div className="p-8 bg-white border border-slate-200 rounded-[12px] shadow-sm hover:border-slate-400 transition-all text-left relative overflow-hidden group">
              <div className="flex justify-between items-center mb-6">
                 <span className="text-[10px] font-black bg-slate-900 text-white px-3 py-1.5 rounded-lg tracking-[0.2em] uppercase">H1 Ana Başlık</span>
                 <div className="flex items-center gap-4">
                    <span className={`text-[12px] font-bold ${meta.h1.length >= 40 && meta.h1.length <= 45 ? 'text-emerald-500' : 'text-slate-300'}`}>SEO Hedefi: 40-45</span>
                    <span className="text-xs font-mono font-bold bg-slate-50 px-2 py-1 rounded border border-slate-100">{meta.h1.length}</span>
                 </div>
              </div>
              <textarea 
                value={meta.h1} onChange={(e) => setMeta({...meta, h1: e.target.value})} onInput={autoResize}
                className="w-full text-4xl font-extrabold border-none outline-none resize-none bg-transparent placeholder:text-slate-200 leading-tight text-left italic"
                placeholder="Buraya odak anahtar kelime içeren başlığı yazın..." rows={1}
              />
            </div>

            {/* SNIPPET & GİRİŞ - BELİRGİN ÇERÇEVE */}
            <div className="grid grid-cols-1 gap-6">
               <div className="p-6 bg-white border border-slate-200 rounded-[12px] shadow-sm hover:border-slate-400 transition-all text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Snippet (140-145 Karakter)</span>
                  <textarea 
                    value={meta.snippet} onChange={(e) => setMeta({...meta, snippet: e.target.value})}
                    className="w-full text-base text-slate-600 border-none outline-none bg-transparent resize-none leading-relaxed text-left"
                    placeholder="Google'da görünecek açıklama..." rows={2}
                  />
               </div>
            </div>

            {/* DİNAMİK İÇERİK BLOKLARI */}
            <div className="space-y-6 pb-40">
              {blocks.map((block: any, index: number) => (
                <div key={block.id} className="relative p-8 bg-white border border-slate-200 rounded-[12px] shadow-sm hover:border-emerald-400 hover:shadow-md transition-all text-left group">
                  
                  {/* Blok Araç Çubuğu */}
                  <div className="absolute -top-4 right-6 opacity-0 group-hover:opacity-100 transition-all flex items-center bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-bold gap-4 z-40 shadow-xl">
                    <span className="text-emerald-400 uppercase">{block.label}</span>
                    <button onClick={() => setBlocks(blocks.filter((b: any) => b.id !== block.id))} className="text-red-400 border-l border-white/10 pl-4 uppercase cursor-pointer">SİL</button>
                  </div>

                  <textarea 
                    value={block.content}
                    onChange={(e) => {
                      const nb = [...blocks];
                      nb[index].content = e.target.value;
                      setBlocks(nb);
                    }}
                    onInput={autoResize}
                    className={`w-full bg-transparent border-none outline-none resize-none text-left ${
                      block.label === 'Başlık' ? 'text-2xl font-bold text-slate-900' : 'text-base text-slate-600 font-medium'
                    }`}
                    placeholder={`${block.label} içeriğini buraya girin...`}
                    rows={1}
                  />
                </div>
              ))}

              {blocks.length === 0 && (
                <div className="py-20 border-2 border-dashed border-slate-200 rounded-[20px] flex flex-col items-center justify-center text-slate-300">
                  <p className="text-sm font-bold uppercase tracking-widest">İçerik Boş</p>
                  <p className="text-xs mt-2 italic">Sol paneldeki araçlarla sayfayı inşa etmeye başlayın.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}